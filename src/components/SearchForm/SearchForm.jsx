function SearchForm() {
    return(
        <section className="search">
            <form className="search__items">
                <input className="search__input" placeholder="Фильм" name="films" />
                <button type="button" className="search_button" ></button>
            </form>
        </section>
    )
}

export default SearchForm;