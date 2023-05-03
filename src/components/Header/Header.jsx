import imgLogo from '../../images/logo.png';
import AccountIcon from "../../images/account-icon.svg"

function Header({logged}){
return (
    <header className="header">
        <img className="header__logo" src={imgLogo} alt='лого сервиса'/>
        { !logged ? (
        <nav className='header__buttons'>
        <button className="header__btn-signup">Регистрация</button>
        <button className="header__btn-signin">Войти</button>
    </nav>
        ) : (<>
            <nav className='header__categories'>
            <a href={Header.toString()} className="header__text">Фильмы</a>
            <a href={Header.toString()} className="header__text">Сохраненные фильмы</a>
            </nav>
            <div className='header__account'>
            <p className='header__username'>Аккаунт</p>
            <img src={AccountIcon} className='header__account-icon' alt="иконка аккаунт"/>
            </div>
            </>
        )}

    </header>
)
}

export default Header;