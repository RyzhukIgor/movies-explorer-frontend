import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../Logo/Logo";

function Register() {
    return (
        <section className="form">
        <div className="form__greeting">
          <Logo />
          <h2 className="form__title">Добро пожаловать!</h2>
        </div>
          <fieldset className="form__inputs">
          <label className="form__label" htmlFor="username">Имя</label>
          <input 
            className="form__input"
            type="text" 
            id="username" 
            name="username" 
            defaultValue="Виталий"
          />
          <label className="form__label" htmlFor="email">E-mail</label>
          <input 
            className="form__input" 
            type="email" 
            id="email" 
            name="email" 
            defaultValue=""
          />
          <label className="form__label" htmlFor="password">Пароль</label>
          <input 
            className="form__input" 
            type="password" 
            id="password" 
            name="password" 
            defaultValue="••••••••••••••" 
          />
          <span className="form__input-error" >Что-то пошло не так... </span>
          <button className="form__submit" type="submit">Зарегистрироваться</button>
         </fieldset>
        <p className="form__text">
          Уже зарегистрированы?
          <NavLink className="form__link" to="/signin">Войти</NavLink>
        </p>
      </section>
    );
}

export default Register;
