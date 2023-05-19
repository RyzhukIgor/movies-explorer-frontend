import React, { useState } from 'react';
import { useLocation } from "react-router-dom";


function MoviesCard(props) {
    const { card } = props;

    const [isCardSaved, setIsCardSaved] = useState(false);
    const { pathname } = useLocation();

    const saveBtnClassName = (
       `card__btn ${isCardSaved && 'card__btn-active'}`  
    )

    function handleSaveCard() {
        setIsCardSaved(!isCardSaved);
    }
    
    function setHours(value) {
        return Math.floor(value / 60);
      }
    
      function setMinutes(value) {
        return value % 60;
      }


    return (  
        <li className="card">
            <div className="card__description">
                <h2 className="card__title">{card.nameRU}</h2>
                <p className="card__duration">{setHours(card.duration)}ч {setMinutes(card.duration)}м</p>
            </div>
            <img className="сard__poster" src={card.image} alt="заставка фильма" />
            { pathname === "/movies" ? (
                <button
                    className={saveBtnClassName}
                    type="button"
                    aria-label="сохранить"
                    onClick={handleSaveCard}
                />
            ) : (
                <button
                    className="card__btn card__btn-delete"
                    type="button"
                    aria-label="сохранить"
                    onClick={handleSaveCard}
                />
            )}
        </li>
    );
}

export default MoviesCard;
