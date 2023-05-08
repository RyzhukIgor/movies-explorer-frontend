import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import MoviesCard from "../MoviesCard/MoviesCard";
import MoreButton from "../MoreButton/MoreButton";

function Movies() {
    return (
        <>
        
            <SearchForm />
            <MoviesCardList>
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />

            </MoviesCardList>
            <MoreButton />
        </>
    );
}

export default Movies;
