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
        </section>
    )
}

export default MoviesCardList;