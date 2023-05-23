import React, { useState, useEffect, useCallback, useMemo } from "react";

import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import MoreButton from "../MoreButton/MoreButton";
import { moviesApi } from "../../utils/MoviesApi";
import { Preloader } from "../Preloader/Preloader";
import mainApi from "../../utils/MainApi";

function Movies() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [isLoading, setIsLoading] = useState(false);
  const [queryValue, setQueryValue] = useState(
    localStorage.getItem("queryValue") || ""
  );
  const [filterValue, setFilterValue] = useState(queryValue);
  const [allFilms, setAllFilms] = useState([]);
  const [savedFilms, setSavedFilms] = useState([]);
  const [shortsToggleSwitch, setShortsToggleSwitch] = useState(
    JSON.parse(localStorage.getItem("shortsToggleSwitch")) || false
  );
  const [resultError, setResultError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [filmsCount, setFilmsCount] = useState(() => {
    return screenWidth >= 1088 ? 12 : screenWidth >= 684 ? 8 : 5;
  });

  function handleLoadMoreButtonClick() {
    if (screenWidth >= 1088) {
      setFilmsCount((prev) => prev + 3);
    } else {
      setFilmsCount((prev) => prev + 2);
    }
  }

  const handleResize = useCallback(() => {
    setScreenWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const fetchAllFilms = useCallback(async () => {
    try {
      setIsLoading(true);
      const films = await moviesApi.getInitialsMovies();

      setAllFilms(
        films.map((film) => ({
          ...film,
          image: `https://api.nomoreparties.co${film.image.url}`,
          thumbnail: `https://api.nomoreparties.co${film.image.formats.thumbnail.url}`,
        }))
      );
    } catch (error) {
      console.log(`Ошибка: ${error}.`);
      setResultError(true);
      setErrorMessage(
        "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз."
      );
    } finally {
      setIsLoading(false);
    }
  }, []);

  const fetchSavedFilms = useCallback(async () => {
    const res = await mainApi.getSavedMovie();

    setSavedFilms(res);
  }, []);

  useEffect(() => {
    fetchAllFilms();
    fetchSavedFilms();
  }, []);

  useEffect(() => {
    localStorage.setItem("shortsToggleSwitch", shortsToggleSwitch.toString());
  }, [shortsToggleSwitch]);

  useEffect(() => {
    localStorage.setItem("queryValue", queryValue);
  }, [queryValue]);

  function handleShortsToggleSwitchState() {
    setShortsToggleSwitch(!shortsToggleSwitch);
  }

  const handleFilmSave = useCallback((film) => {
    setSavedFilms((prev) => [...prev, film]);
  }, []);

  const handleFilmDelete = useCallback((film) => {
    setSavedFilms((prev) => prev.filter((f) => f._id !== film._id));
  }, []);

  const filteredFilms = useMemo(() => {
    const filtered = allFilms.filter((film) => {
      if (shortsToggleSwitch && film.duration > 40) {
        return false;
      }

      const normalizedSearch = filterValue.toLowerCase();
      const normalizedNameRu = film.nameRU.toLowerCase();
      const normalizedNameEn = film.nameEN.toLowerCase();

      return (
        normalizedNameRu.includes(normalizedSearch) ||
        normalizedNameEn.includes(normalizedSearch)
      );
    });

    return filtered;
  }, [allFilms, shortsToggleSwitch, filterValue]);

  const filmsToRender = useMemo(() => {
    return filteredFilms.slice(0, filmsCount).map((film) => ({
      ...film,
      savedMovieId: savedFilms.find((f) => f.movieId === film.id)?._id,
    }));
  }, [filteredFilms, filmsCount, savedFilms]);

  function handleSearch(search) {
    setFilterValue(search);
  }

  const handleSearchFormInput = useCallback((event) => {
    setQueryValue(event.target.value);
  }, []);

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
        (filterValue && filmsToRender.length && (
          <>
            <MoviesCardList
              cards={filmsToRender}
              onSave={handleFilmSave}
              savedMovies={savedFilms}
              onDelete={handleFilmDelete}
            />
            {filteredFilms.length > filmsCount && (
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
