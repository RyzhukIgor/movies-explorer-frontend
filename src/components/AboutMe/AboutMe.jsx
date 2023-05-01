import Avatar from '../../images/avatar.jpg';

function AboutMe() {
    return (
        <section className="about-me">
            <h2 className="about-project__title">Студент</h2>
            <article className="about-me__infoblock">
                <div className="about-me__info-person">
                    <h3 className="about-me__name">Виталий</h3>
                    <h4 className="about-me__subtitle">
                        Фронтенд-разработчик, 30 лет
                    </h4>
                    <p className="about-me__info">
                        Я родился и живу в Саратове, закончил факультет
                        экономики СГУ. У меня есть жена<br/> и дочь. Я люблю слушать
                        музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С
                        2015 года работал в компании «СКБ Контур». После того,
                        как прошёл курс по веб-разработке, начал заниматься
                        фриланс-заказами и ушёл с постоянной работы.
                    </p>
                    <a className="about-me__link" href="github.com">Github</a>
                </div>
                <img src={Avatar} alt="аватар студента" className="about-me__avatar" />
            </article>
        </section>
    );
}

export default AboutMe;
