import React, { useState, useEffect } from 'react';
import { useUserStore } from '../../contexts/CurrentUserContext';
import { useFormWithValidation } from '../../hooks/useForm';
import { Link } from 'react-router-dom';
import mainApi from '../../utils/MainApi';

function Profile() {
  const { values, handleChange, errors, isValid, resetForm } =
    useFormWithValidation();
  const { user, logout, setUser } = useUserStore();
  const [isUpdatedData, setIsUpdatedData] = useState(false);
  const [isShowSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const updatedData = await mainApi.updateInfo({
        name: values.name || user.name,
        email: values.email || user.email,
      });
      setUser(updatedData);
      setShowSuccessMessage(true);
      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 1000);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    values.name !== user.name || values.email !== user.email
      ? setIsUpdatedData(true)
      : setIsUpdatedData(false);
  }, [values.name, user.name, values.email, user.email]);

  useEffect(() => {
    resetForm({ name: user.name, email: user.email }, {}, false);
  }, [user, resetForm]);

  return (
    <section className="profile">
      <div className="profile__container">
        <h2 className="profile__greeting">Привет, {user.name}!</h2>
        <form onSubmit={handleSubmit} noValidate className="profile__form">
          <label className="profile__label" htmlFor="username">
            <span className="profile__label-span">Имя</span>
            <input
              className="profile__input"
              type="text"
              id="name"
              name="name"
              value={values.name || ''}
              onChange={handleChange}
              error={errors.name}
              placeholder="Введите имя"
            />
          </label>
          <label className="profile__label" htmlFor="email">
            <span className="profile__label-span">E-mail</span>
            <input
              className="profile__input"
              type="email"
              id="email"
              name="email"
              required
              placeholder="Введите email"
              value={values.email || ''}
              onChange={handleChange}
              error={errors.email}
            />
          </label>
          <p
            className={`profile__message ${
              isShowSuccessMessage ? 'profile__message_hidden' : 'null'
            }`}
          >
            Данные успешно обновлены!
          </p>
          <nav className="profile__nav">
            <button
              className="profile__button"
              type="submit"
              disabled={!isUpdatedData || !isValid}
            >
              Редактировать
            </button>
            <Link
              className="profile__button profile__button_red"
              to=""
              disabled={!isUpdatedData || !isValid}
              onClick={logout}
            >
              Выйти из аккаунта
            </Link>
          </nav>
        </form>
      </div>
    </section>
  );
}

export default Profile;
