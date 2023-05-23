import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Logo from "../Logo/Logo";
import { useFormWithValidation } from "../../hooks/useForm";
import { useUserStore } from "../../contexts/CurrentUserContext";
import mainApi from "../../utils/MainApi";

function Register() {
  const { values, handleChange, errors, isValid } = useFormWithValidation({
    name: "",
    email: "",
    password: "",
  });
  const [isRegOk, setIsRegOk] = useState(true);
  const { setUser } = useUserStore();
  const navigate = useNavigate();

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    try {
      const { name, email, password } = values;
      const userData = await mainApi.register({ name, email, password });
      setIsRegOk(true);
      setUser(userData);
      navigate("/movies");
    } catch (err) {
      setIsRegOk(false);
    }
  };

  return (
    <section className="form">
      <div className="form__greeting">
        <Logo />
        <h2 className="form__title">Добро пожаловать!</h2>
      </div>
      <form onSubmit={handleSubmit} noValidate>
        <fieldset className="form__inputs">
          <label className="form__label" htmlFor="name">
            Имя
          </label>
          <input
            className="form__input"
            type="text"
            id="username"
            name="name"
            value={values["name"]}
            onChange={handleChange}
            required
            placeholder="Введите имя"
          />
          {errors["name"] && (
            <span className="form__error">{errors["name"]}</span>
          )}
          <label className="form__label" htmlFor="email">
            E-mail
          </label>
          <input
            className="form__input"
            type="email"
            id="email"
            name="email"
            value={values["email"]}
            onChange={handleChange}
            required
            placeholder="Введите email"
            pattern
          />
          {errors["email"] && (
            <span className="form__error">{errors["email"]}</span>
          )}
          <label className="form__label" htmlFor="password">
            Пароль
          </label>
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
          {errors["password"] && (
            <span className="form__error">{errors["password"]}</span>
          )}
          <span
            className={`form__input-error ${
              isRegOk ? "form__error_invisible" : "form__error_visible"
            }`}
          >
            Что-то пошло не так...{" "}
          </span>
          <button className="form__submit" type="submit" disabled={!isValid}>
            Зарегистрироваться
          </button>
        </fieldset>
      </form>
      <p className="form__text">
        Уже зарегистрированы?
        <NavLink className="form__link" to="/signin">
          Войти
        </NavLink>
      </p>
    </section>
  );
}

export default Register;
