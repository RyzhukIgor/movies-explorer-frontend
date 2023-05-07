import React from "react";
import { NavLink } from "react-router-dom";

function BurgerMenuPopup() {
    return (
        <section className="burger-popup">
            <div className="burger-popup__menu">
                <button className="burger-popup__btn" />
                <div className="burger-popup__links">
                    <nav className="burger-popup__nav">
                    <NavLink to="/" className="burger-popup__link">Главная</NavLink>
                    <NavLink to="/movies" className="burger-popup__link">Фильмы</NavLink>
                    <NavLink to="/saved-movies" className="burger-popup__link">Сохранённые фильмы</NavLink>
                    </nav>
                    <NavLink to="/" className="burger-popup__link">
                        Аккаунт<div className="burger-popup__acc-icon" />
                    </NavLink>
                </div>
            </div>
        </section>
    )
}

export default BurgerMenuPopup;