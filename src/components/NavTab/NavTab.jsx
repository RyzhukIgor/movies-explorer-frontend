function NavTab() {
    return (
        <nav>
            <ul className="navigation">
                <li className="navigation__item">
                    <a className="navigation__link" href="#about-project">
                        О проекте
                    </a>
                </li>
                <li className="navigation__item">
                    <a className="navigation__link" href="#techs">
                        Технологии
                    </a>
                </li>
                <li className="navigation__item">
                    <a className="navigation__link" href="#about-me">
                        Студент
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default NavTab;
