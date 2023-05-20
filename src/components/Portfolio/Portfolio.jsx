import icon from '../../images/portfolio-icon.png';

function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <nav>
        <ul className="portfolio__items">
          <li className="portfolio__item">
            <a
              href="https://github.com/RyzhukIgor/how-to-learn"
              className="portfolio__link"
              target="_blank"
              rel="noreferrer"
            >
              <p className="portfolio__description">Статичный сайт</p>
              <img
                src={icon}
                alt="стрелка-ссылка"
                className="portfolio__icon"
              />
            </a>
          </li>
          <li className="portfolio__item">
            <a
              href="https://github.com/RyzhukIgor/russian-travel"
              className="portfolio__link"
              target="_blank"
              rel="noreferrer"
            >
              <p className="portfolio__description">Адаптивный сайт</p>
              <img
                src={icon}
                alt="стрелка-ссылка"
                className="portfolio__icon"
              />
            </a>
          </li>
          <li className="portfolio__item">
            <a
              href="https://github.com/RyzhukIgor/react-mesto-api-full-gha"
              className="portfolio__link"
              target="_blank"
              rel="noreferrer"
            >
              <p className="portfolio__description">
                Одностраничное приложение
              </p>
              <img
                src={icon}
                alt="стрелка-ссылка"
                className="portfolio__icon"
              />
            </a>
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default Portfolio;
