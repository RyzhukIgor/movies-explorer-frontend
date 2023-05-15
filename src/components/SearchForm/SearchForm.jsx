function SearchForm() {
    return (
        <section className="search">
            <form className="search__items">
                <input
                    className="search__input"
                    placeholder="Фильм"
                    name="films"
                    required
                />
                <button type="submit" className="search__button">
                    Поиск
                </button>
            </form>
            <div className="search__checkbox-container">
                <label className="search__checkbox"  checked>
                    <input
                        type="checkbox"
                        className="search__input-checkbox"
                        id="checkbox"
                    />
                    <span className="search__slider"></span>
                </label>
                <p className="search__category">Короткометражки</p>
            </div>
        </section>
    );
}

export default SearchForm;
