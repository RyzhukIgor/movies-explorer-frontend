import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";

import SavedDevider from "../SavedDevider/SavedDevider";

function SavedMovies() {
    return (
        <>
            <SearchForm />
            <MoviesCardList>

            </MoviesCardList>
            <SavedDevider />
        </>
    );
}

export default SavedMovies;
