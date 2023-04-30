import imgLogo from '../../images/logo.png';

function Header(){
return (
    <header className="header">
        <img className="header__logo" src={imgLogo} alt='лого сервиса'/>
        <div className='header__buttons'>
            <button className="header__btn-signup">Регистрация</button>
            <button className="header__btn-signin">Войти</button>
        </div>
    </header>
)
}

export default Header;