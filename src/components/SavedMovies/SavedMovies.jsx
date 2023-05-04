import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCard from "../MoviesCard/MoviesCard";
import SavedDevider from "../SavedDevider/SavedDevider";

function SavedMovies() {
    return (
        <>
            <SearchForm />
            <MoviesCardList>
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
            </MoviesCardList>
            <SavedDevider />
        </>
    );
}

export default SavedMovies;
