import { useState } from "react";

import Film from "../../images/01.jpg";

function MoviesCard() {
    const [isCardSaved, setIsCardSaved] = useState(false);

    function handleSaveCard() {
        setIsCardSaved(!isCardSaved);
    }

    return (
        <div className="card">
            <div className="card__description">
                <h2 className="card__title">33 слова о дизайне </h2>
                <p className="card__duration">1ч 47м</p>
            </div>
            <img className="сard__poster" src={Film} alt="заставка фильма" />
            {isCardSaved ? (
                <button
                    className="card__btn card__btn-active"
                    type="button"
                    aria-label="сохранить"
                    onClick={handleSaveCard}
                />
            ) : (
                <button
                    className="card__btn"
                    type="button"
                    aria-label="сохранить"
                    onClick={handleSaveCard}
                />
            )}
        </div>
    );
}

export default MoviesCard;
