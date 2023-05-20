import React, { useCallback } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../Logo/Logo';
import { useFormWithValidation } from '../../hooks/useForm';

function Login(props) {
  const { onSubmit } = props;
  const { values, handleChange, errors, isValid, resetForm } =
    useFormWithValidation();

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();

      onSubmit({
        email: values.email,
        password: values.password,
      });
    },
    [values, onSubmit]
  );
  return (
    <section className="login">
      <div className="login__greeting">
        <Logo />
        <h2 className="login__title">Рады видеть!</h2>
      </div>
      <form onSubmit={handleSubmit} noValidate>
        <fieldset className="login__inputs">
          <label className="login__label" htmlFor="email">
            E-mail
          </label>
          <input
            className="login__input"
            type="email"
            id="email"
            name="email"
            required
            placeholder="Введите email"
            value={values['email']}
            onChange={handleChange}
          />
          {errors['email'] && (
            <span className="login__error">{errors['email']}</span>
          )}
          <label className="login__label" htmlFor="password">
            Пароль
          </label>
          <input
            className="login__input"
            type="password"
            id="password"
            name="password"
            required
            placeholder="Введите пароль"
            value={values['password']}
            onChange={handleChange}
          />
          {errors['password'] && (
            <span className="login__error">{errors['password']}</span>
          )}
          <span className="login__input-error">Что-то пошло не так... </span>
          <button className="login__submit" type="submit" disabled={!isValid}>
            Войти
          </button>
        </fieldset>
      </form>
      <p className="login__text">
        Ещё не зарегистрированы?
        <NavLink className="login__link" to="/signup">
          Регистрация
        </NavLink>
      </p>
    </section>
  );
}

export default Login;
