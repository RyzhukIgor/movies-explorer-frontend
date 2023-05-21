import Logo from "../Logo/Logo";
import AccountIcon from "../../images/account-icon.svg";
import { NavLink } from "react-router-dom";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import { useUserStore } from "../../contexts/CurrentUserContext";

function Header() {
  const { user } = useUserStore();

  return (
    <header className="header">
      <Logo />
      {!user ? (
        <nav className="header__buttons">
          <NavLink className="header__btn-signup" to="/signup">
            Регистрация
          </NavLink>
          <NavLink className="header__btn-signin" to="/signin">
            Войти
          </NavLink>
        </nav>
      ) : (
        <>
          <nav className="header__categories">
            <NavLink className="header__text" to="/movies">
              Фильмы
            </NavLink>
            <NavLink className="header__text" to="/saved-movies">
              Сохраненные фильмы
            </NavLink>
          </nav>
          <NavLink className="header__account" to="/profile">
            <p className="header__username">Аккаунт</p>
            <img
              src={AccountIcon}
              className="header__account-icon"
              alt="иконка аккаунт"
            />
          </NavLink>
          <BurgerMenu />
        </>
      )}
    </header>
  );
}

export default Header;
