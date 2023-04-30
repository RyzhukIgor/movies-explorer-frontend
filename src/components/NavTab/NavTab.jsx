function NavTab() {
    return (
        <nav>
            <ul className="navigation">
                <li className="navigation__item">
                    <a className="navigation__link" href={NavTab.toString()}>
                        О проекте
                    </a>
                </li>
                <li className="navigation__item">
                    <a className="navigation__link" href={NavTab.toString()}>
                        Технологии
                    </a>
                </li>
                <li className="navigation__item">
                    <a className="navigation__link" href={NavTab.toString()}>
                        Студент
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default NavTab;
