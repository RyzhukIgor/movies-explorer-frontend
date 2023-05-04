function Profile() {
    return(
        <main className="profile">
          <div className="profile__container">
            <h2 className="profile__greeting">Привет, Виталий!</h2>
            <label className="profile__label" htmlFor="username">
              <span className="profile__label-span">Имя</span>
              <input className="profile__input" type="text" id="username" name="username" defaultValue="Виталий" />
            </label>
            <label className="profile__label" htmlFor="email">
              <span className="profile__label-span">E-mail</span>
              <input className="profile__input" type="email" id="email" name="email" defaultValue="pochta@yandex.ru" />
            </label>
            <button className="profile__button" type="button" >Редактировать</button>
            <button className="profile__button profile__button_red" type="button">Выйти из аккаунта</button>
            </div>  
        </main>
    )
}

export default Profile;