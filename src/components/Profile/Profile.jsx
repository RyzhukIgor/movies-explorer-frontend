import React, { useContext, useState, useEffect } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useFormWithValidation } from "../../hooks/useForm";

function Profile(props) {
    const { onUpdateData } = props;
    const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation();
    const currentUser = useContext(CurrentUserContext);
    const [isUpdatedData, setIsUpdatedData] = useState(false);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        onUpdateData({
            name: values.name || currentUser.name,
            email: values.email || currentUser.email
        })
    }

    useEffect(() => {
        values.name !== currentUser.name || values.email !== currentUser.email 
        ? setIsUpdatedData(true) 
        : setIsUpdatedData(false)
    }, [values.name, currentUser.name, values.email, currentUser.email])

    useEffect(() => {
        resetForm({name: currentUser.name, email: currentUser.email}, {}, false)
    }, [currentUser, resetForm])

    return (
        <section className="profile">
            <div className="profile__container">
                <h2 className="profile__greeting">Привет, {currentUser.name}!</h2>
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
                <nav className="profile__nav">
                <button className="profile__button" type="submit" disabled={!isUpdatedData || !isValid}>
                    Редактировать
                </button>
                <button
                    className="profile__button profile__button_red"
                    type="button"
                    disabled={!isUpdatedData || !isValid}

                >
                    Выйти из аккаунта
                </button>
                </nav>

                </form>

            </div>
        </section>
    );
}

export default Profile;
