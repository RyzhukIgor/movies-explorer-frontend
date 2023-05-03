import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList() {
    return (
        <section className="cards">
                <ul className="cards__list">
                <MoviesCard className="cards__item" />
                <MoviesCard className="cards__item" />
                <MoviesCard className="cards__item" />
                <MoviesCard className="cards__item" />
                <MoviesCard className="cards__item" />
                <MoviesCard className="cards__item" />
                <MoviesCard className="cards__item" />
                <MoviesCard className="cards__item" />
                <MoviesCard className="cards__item" />
                <MoviesCard className="cards__item" />
                <MoviesCard className="cards__item" />
                <MoviesCard className="cards__item" />
            </ul>
            <button
                className="cards__btn"
                type="button"
                aria-label="показать больше"
            >
                Ещё
            </button>
        </section>
    );
}

export default MoviesCardList;
