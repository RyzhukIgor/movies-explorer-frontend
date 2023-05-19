import React, { useState, useEffect } from 'react';

import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoreButton from '../MoreButton/MoreButton';
import { moviesApi } from '../../utils/MoviesApi';
import { Preloader } from '../Preloader/Preloader';

function Movies(props) {
  const { handleFilmSave, savedMovies, handleFilmUnsave } = props;
  const windowWidth = document.documentElement.clientWidth;

  const [isLoading, setIsLoading] = useState(false);
  const [queryValue, setQueryValue] = useState(
    localStorage.getItem('queryValue') || ''
  );
  const [allFilms, setAllFilms] = useState([]);
  const [queryFilteredFilms, setQueryFilteredFilms] = useState(
    JSON.parse(localStorage.getItem('queryFilteredFilms')) || []
  );
  const [shortsToggleSwitch, setShortsToggleSwitch] = useState(
    JSON.parse(localStorage.getItem('shortsToggleSwitch')) || false
  );
  const [resultError, setResultError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [filmsLoaded, setFilmsLoaded] = useState(false);
  const [filmsPerLoad, setFilmsPerLoad] = useState(0);

  function handleFilmsPerRowLoaded() {
    setTimeout(() => {
      if (windowWidth >= 1088) {
        setFilmsPerLoad(12);
      } else if (windowWidth >= 684) {
        setFilmsPerLoad(8);
      } else {
        setFilmsPerLoad(5);
      }
    }, 1000);
  }

  function handleLoadMoreButtonClick() {
    setTimeout(() => {
      if (windowWidth >= 1088) {
        setFilmsPerLoad(filmsPerLoad + 3);
      } else {
        setFilmsPerLoad(filmsPerLoad + 2);
      }
    }, 1000);
  }

  useEffect(() => {
    window.addEventListener('resize', handleFilmsPerRowLoaded(windowWidth));

    return () => {
      window.removeEventListener(
        'resize',
        handleFilmsPerRowLoaded(windowWidth)
      );
    };
  }, [windowWidth]);

  useEffect(() => {
    localStorage.setItem(
      'queryFilteredFilms',
      JSON.stringify(queryFilteredFilms)
    );
  }, [queryFilteredFilms]);

  function handleSearchFormInput(event) {
    setQueryValue(event.target.value);
  }

  function handleShortsToggleSwitchState() {
    setShortsToggleSwitch(!shortsToggleSwitch);
  }

  function filterByDuration(films) {
    return films.filter((film) => Number(film.duration) <= 40);
  }

  function filterByQuery(films, queryValue) {
    return films.filter(
      (film) =>
        film.nameRU.toLowerCase().includes(queryValue.toLowerCase()) ||
        film.nameEN.toLowerCase().includes(queryValue.toLowerCase())
    );
  }

  function handleSearch() {
    setResultError(false);
    setErrorMessage('');
    setFilmsLoaded(false);
    setIsLoading(true);

    moviesApi
      .getInitialsMovies()
      .then((movieList) =>
        movieList.map((movie) => ({
          country: movie.country,
          id: movie.id,
          nameRU: movie.nameRU,
          nameEN: movie.nameEN,
          duration: movie.duration,
          image: `https://api.nomoreparties.co${movie.image.url}`,
          thumbnail: `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`,
          director: movie.director,
          year: movie.year,
          description: movie.description,
          trailerLink: movie.trailerLink,
        }))
      )
      .then((res) => {
        localStorage.setItem('shortsToggleSwitch', shortsToggleSwitch);
        localStorage.setItem('queryValue', queryValue);

        if (!queryValue) {
          setResultError(true);
          setErrorMessage('Нужно ввести ключевое слово');
          return;
        }

        setFilmsLoaded(true);
        shortsToggleSwitch
          ? setAllFilms(filterByDuration(res))
          : setAllFilms(res);
        setQueryFilteredFilms(filterByQuery(allFilms, queryValue));

        if (!queryFilteredFilms.length) {
          setResultError(true);
          setErrorMessage('Ничего не найдено');
          return;
        }
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}.`);
        setResultError(true);
        setErrorMessage(
          'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.'
        );
      })
      .finally(setIsLoading(false));
  }

  return (
    <>
      <SearchForm
        query={queryValue}
        onInputChange={handleSearchFormInput}
        shortsToggleSwitch={shortsToggleSwitch}
        onToggleChange={handleShortsToggleSwitchState}
        onSubmit={handleSearch}
      />
      {isLoading ? (
        <Preloader />
      ) : (
        (resultError && (
          <p className="movies__message">
            <span className="movies__message-none">{errorMessage}</span>
          </p>
        )) ||
        ((filmsLoaded || queryFilteredFilms.length) && (
          <>
            <MoviesCardList 
            cards={queryFilteredFilms.slice(0, filmsPerLoad)} 
            handleFilmSave={handleFilmSave}
            savedMovies={savedMovies}
            handleFilmUnsave={handleFilmUnsave}
            />
            {!(filmsPerLoad >= queryFilteredFilms.length) && (
              <MoreButton moreButtonClick={handleLoadMoreButtonClick} />
            )}
          </>
        )) ||
        null
      )}
    </>
  );
}

export default Movies;
