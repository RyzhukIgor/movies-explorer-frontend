function SearchForm() {
    return (
        <section className="search">
            <form className="search__items">
                <input
                    className="search__input"
                    placeholder="Фильм"
                    name="films"
                />
                <button type="button" className="search_button">
                    Поиск
                </button>
            </form>
            <div className="search__checkbox-container">
                <label className="search__checkbox" htmlFor="checkbox">
                    <input
                        type="checkbox"
                        className="search__input-checkbox"
                        id="checkbox"
                    />
                    <div className="search__slider"></div>
                </label>
                <p className="search__category">Короткометражки</p>
            </div>
        </section>
    );
}

export default SearchForm;
