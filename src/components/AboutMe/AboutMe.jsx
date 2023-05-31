import Avatar from '../../images/ava.jpg';

function AboutMe() {
  return (
    <section className="about-me" id="about-me">
      <h2 className="about-me__title">Студент</h2>
      <article className="about-me__info-block">
        <div className="about-me__info-person">
          <h3 className="about-me__name">Игорь</h3>
          <h4 className="about-me__subtitle">Фронтенд-разработчик, 30 лет</h4>
          <p className="about-me__info">
            Я родился и живу в Таганроге, закончил ТПИ факультет "Информационные системы и технологии". У
            меня есть жена
            <br /> и дочь. Я занимаюсь моделирование самолётов, а ещё люблю путешествовать.
            Недавно начал кодить. С 2013 по 2018 года служил в ВС РФ. По окончанию службы работал в сервисе
            по предоставлению фотоуслуг.
            После того, как прошёл курс по веб-разработке, устроился работать преподавателем по программированию в детскую онлайн-школу.
          </p>
          <a
            className="about-me__link"
            href="https://github.com/RyzhukIgor"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </div>
        <img src={Avatar} alt="аватар студента" className="about-me__avatar" />
      </article>
    </section>
  );
}

export default AboutMe;
