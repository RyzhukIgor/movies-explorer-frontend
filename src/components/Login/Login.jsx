import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../Logo/Logo";

function Login() {
    return(
        <section className="form-login">
        <div className="form__greeting-login">
          <Logo />
          <h2 className="form__title-login">Рады видеть!</h2>
        </div>
          <fieldset className="form__inputs-login">
          <label className="form__label-login" htmlFor="email">E-mail</label>
          <input 
            className="form__input-login" 
            type="email" 
            id="email" 
            name="email" 
            defaultValue="pochta@yandex.ru"
          />
          <label className="form__label-login" htmlFor="password">Пароль</label>
          <input 
            className="form__input-login" 
            type="password" 
            id="password" 
            name="password"  
          />
          <span className="form__input-error-login" >Что-то пошло не так... </span>
          <button className="form__submit-login" type="submit">Войти</button>
         </fieldset>
   
        <p className="form__text-login">
          Ещё не зарегистрированы?
          <NavLink className="form__link-login" to="/signup">Регистрация</NavLink>
        </p>
      </section>
    );
}


export default Login;