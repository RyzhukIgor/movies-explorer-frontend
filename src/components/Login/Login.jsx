import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../Logo/Logo";
import { useFormWithValidation } from "../../hooks/useForm" ;

function Login() {
    return(
        <section className="login">
        <div className="login__greeting">
          <Logo />
          <h2 className="login__title">Рады видеть!</h2>
        </div>
          <fieldset className="login__inputs">
          <label className="login__label" htmlFor="email">E-mail</label>
          <input 
            className="login__input" 
            type="email" 
            id="email" 
            name="email" 
            defaultValue="pochta@yandex.ru"
            required 
            placeholder="Введите email"
          />
          <label className="login__label" htmlFor="password">Пароль</label>
          <input 
            className="login__input" 
            type="password" 
            id="password" 
            name="password"  
            required 
            placeholder="Введите пароль"
          />
          <span className="login__input-error" >Что-то пошло не так... </span>
          <button className="login__submit" type="submit">Войти</button>
         </fieldset>
   
        <p className="login__text">
          Ещё не зарегистрированы?
          <NavLink className="login__link" to="/signup">Регистрация</NavLink>
        </p>
      </section>
    );
}


export default Login;