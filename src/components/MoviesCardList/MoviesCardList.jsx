import React from 'react';
import MoviesCard from '../../components/MoviesCard/MoviesCard';

function MoviesCardList(props) {
  const { cards, handleFilmSave, savedMovies, handleFilmUnsave } = props;
  return (
    <section className="cards">
      <ul className="cards__list">
        {cards.map((card, index) => (
          <MoviesCard
            card={card}
            key={card.id || index}
            savedMovies={savedMovies}
            handleFilmSave={handleFilmSave}
            handleFilmUnsave={handleFilmUnsave}
          />
        ))}
      </ul>
    </section>
  );
}

export default MoviesCardList;
