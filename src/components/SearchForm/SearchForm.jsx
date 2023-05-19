import React, { useCallback } from 'react';

function SearchForm(props) {
  const { query, shortsToggleSwitch, onInputChange, onToggleChange, onSubmit } =
    props;

  const submitSearchForm = useCallback(
    (e) => {
      e.preventDefault();
      onSubmit(query);
    },
    [onSubmit, query]
  );

  return (
    <section className="search">
      <form className="search__items" noValidate onSubmit={submitSearchForm}>
        <input
          className="search__input"
          id="search-input"
          type="search"
          name="search"
          placeholder="Фильм"
          required="required"
          onChange={onInputChange}
          value={query || ''}
          autoFocus
        />
        <button type="submit" className="search__button">
          Поиск
        </button>
      </form>
      <div
        className="search__checkbox-container"
        onChange={onToggleChange}
        shortsToggleSwitch={shortsToggleSwitch}
      >
        <label className="search__checkbox" checked>
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
