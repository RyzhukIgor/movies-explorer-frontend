function Footer() {
    return (
        <footer className="footer">
            <h2 className="footer__title">
                Учебный проект Яндекс.Практикум х BeatFilm.
            </h2>
            <div className="footer__info">
                <p className="footer__data">&copy; 2023</p>
                <nav>
                    <ul className="footer__links">
                        <li>
                            <a
                                className="footer__link"
                                href="https://practicum.yandex.ru/"
                            >
                                Яндекс.Практикум
                            </a>
                        </li>
                        <li>
                            <a
                                className="footer__link"
                                href="https://github.com"
                            >
                                Github
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </footer>
    );
}

export default Footer;
