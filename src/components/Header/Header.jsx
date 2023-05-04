import Logo from "../Logo/Logo";
import AccountIcon from "../../images/account-icon.svg"
import { NavLink } from 'react-router-dom';

function Header({logged}){
return (
    <header className="header">
        <Logo />
        { !logged ? (
        <nav className='header__buttons'>
        <button className="header__btn-signup">Регистрация</button>
        <button className="header__btn-signin">Войти</button>
    </nav>
        ) : (<>
            <nav className='header__categories'>
            <NavLink className="header__text" to="/movies" >Фильмы</NavLink>
            <NavLink className="header__text" to="/saved-movies">Сохраненные фильмы</NavLink>
            </nav>
            <NavLink className='header__account' to="/profile">
            <p className='header__username'>Аккаунт</p>
            <img src={AccountIcon} className='header__account-icon' alt="иконка аккаунт"/>
            </NavLink>
            </>
        )}

    </header>
)
}

export default Header;