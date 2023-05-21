import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";

function BurgerMenuPopup(props) {
    const {isOpen, isClose} = props;

    return (
        <section className={`burger-popup ${isOpen ? 'burger-popup_active' : 'null'}`}>
            <div className="burger-popup__menu">
                <button className="burger-popup__btn" onClick={isClose} />
                <div className="burger-popup__links">
                    <nav className="burger-popup__nav">
                    <NavLink to="/" className="burger-popup__link">Главная</NavLink>
                    <NavLink to="/movies" className="burger-popup__link burger-popup__link_active">Фильмы</NavLink>
                    <NavLink to="/saved-movies" className="burger-popup__link">Сохранённые фильмы</NavLink>
                    <NavLink to="/" className="burger-popup__link">
                        Аккаунт<div className="burger-popup__acc-icon" />
                    </NavLink>
                    </nav>
                </div>
            </div>
        </section>
    )
}

export default BurgerMenuPopup;