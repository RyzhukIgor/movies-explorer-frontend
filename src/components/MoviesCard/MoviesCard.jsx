import { useState } from "react";
import { useLocation } from "react-router-dom";

import Film from "../../images/01.jpg";

function MoviesCard() {
    const [isCardSaved, setIsCardSaved] = useState(false);
    const { pathname } = useLocation();

    const saveBtnClassName = (
       `card__btn ${isCardSaved && 'card__btn-active'}`  
    )

    function handleSaveCard() {
        setIsCardSaved(!isCardSaved);
    }

    return (
        <div className="card">
            <div className="card__description">
                <h2 className="card__title">33 слова о дизайне 33 слова о дизайне </h2>
                <p className="card__duration">1ч 47м</p>
            </div>
            <img className="сard__poster" src={Film} alt="заставка фильма" />
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
        </div>
    );
}

export default MoviesCard;
