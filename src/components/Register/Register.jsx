import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../Logo/Logo";
import { useFormWithValidation } from '../../hooks/useForm';

function Register({handleRegister, isRegOk}) {
  const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation({ name:'', email:'', password:'' });
  
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const { name, email, password } = values;
    handleRegister(name, email, password);

}

    return (
        <section className="form">
        <div className="form__greeting">
          <Logo />
          <h2 className="form__title">Добро пожаловать!</h2>
        </div>
        <form onSubmit={handleSubmit} noValidate>
        <fieldset className="form__inputs">
          <label className="form__label" htmlFor="username">Имя</label>
          <input 
            className="form__input"
            type="text" 
            id="username" 
            name="username" 
            value={values["name"]}
            onChange={handleChange}
            required 
            placeholder="Введите имя" 
          />
          {errors["name"] && <span className='form__error'>{errors["name"]}</span>}
          <label className="form__label" htmlFor="email">E-mail</label>
          <input 
            className="form__input" 
            type="email" 
            id="email" 
            name="email" 
            value={values["email"]}
            onChange={handleChange}
            required 
            placeholder="Введите email" 
          />
          {errors["email"] && <span className='form__error'>{errors["email"]}</span>}
          <label className="form__label" htmlFor="password">Пароль</label>
          <input 
            className="form__input" 
            type="password" 
            id="password" 
            name="password" 
            required 
            value={values["password"]}
            onChange={handleChange}
            placeholder="Введите пароль"  
          />
          {errors["password"] && <span className='form__error'>{errors["password"]}</span>}
          <span className={`form__input-error ${ isRegOk ? "form__error_invisible" : "form__error_visible" }`}>Что-то пошло не так... </span>
          <button className="form__submit" type="submit" disabled={!isValid}>Зарегистрироваться</button> 
          </fieldset>
        </form>
        <p className="form__text">
          Уже зарегистрированы?
          <NavLink className="form__link" to="/signin">Войти</NavLink>
        </p>
      </section>
    );
    }

export default Register;
