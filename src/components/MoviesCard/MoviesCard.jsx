import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function MoviesCard(props) {
  const { card, handleFilmSave, savedMovies, handleFilmUnsave } = props;

  const [isCardSaved, setIsCardSaved] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setIsCardSaved(savedMovies.find((Mov) => Mov.movieId === card.id));
  }, [card.id, savedMovies]);

  const saveBtnClassName = `card__btn ${isCardSaved && 'card__btn-active'}`;

  //function handleSaveCard() {
  //   setIsCardSaved(!isCardSaved);
  //}

  function setHours(value) {
    return Math.floor(value / 60);
  }

  function setMinutes(value) {
    return value % 60;
  }

  const allMovieObj = {
    country: card.country,
    nameRU: card.nameRU,
    nameEN: card.nameEN,
    duration: card.duration,
    image: card.image,
    thumbnail: card.thumbnail,
    director: card.director,
    year: card.year,
    description: card.description,
    trailerLink: card.trailerLink,
    movieId: card.id,
  };

  const savedMovieObj = { _id: card._id, ...card };

  function onSaveButtonClick() {
    if (!isCardSaved) {
      handleFilmSave(allMovieObj, setIsCardSaved);
    } else {
      handleFilmUnsave(savedMovies.filter((m) => m.movieId === card.id)[0]);
    }
  }

  function onUnsaveButtonClick() {
    handleFilmUnsave(savedMovieObj, setIsCardSaved);
  }

  return (
    <li className="card">
      <div className="card__description">
        <h2 className="card__title">{card.nameRU}</h2>
        <p className="card__duration">
          {setHours(card.duration)}ч {setMinutes(card.duration)}м
        </p>
      </div>
      <a href={card.trailerLink} target="_blank" rel="noreferrer">
        <img className="сard__poster" src={card.image} alt="заставка фильма" />
      </a>  
      {pathname === '/movies' ? (
        <button
          className={saveBtnClassName}
          type="button"
          aria-label="сохранить"
          onClick={onSaveButtonClick}
        />
      ) : (
        <button
          className="card__btn card__btn-delete"
          type="button"
          aria-label="сохранить"
          onClick={onUnsaveButtonClick}
        />
      )}
    </li>
  );
}

export default MoviesCard;
