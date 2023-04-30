function AboutProject() {
    return (
        <section className="about-project">
            <h2 className="about-project__title">О проекте</h2>
            <div className="about-project__description-blocks">
                <div className="about-project__description-item">
                    <h3 className="about-project__subtitle">
                        Дипломный проект включал 5 этапов
                    </h3>
                    <p className="about-project__info">
                        Составление плана, работу над бэкендом, вёрстку,
                        добавление функциональности и финальные доработки.
                    </p>
                </div>
                <div className="about-project__description-item">
                    <h3 className="about-project__subtitle">
                        На выполнение диплома ушло 5 недель
                    </h3>
                    <p className="about-project__info">
                        У каждого этапа был мягкий и жёсткий дедлайн, которые
                        нужно было соблюдать, чтобы успешно защититься.
                    </p>
                </div>
            </div>
            <div className="about-project__chart">
                    <h4 className="about-project__week">1 неделя</h4>
                    <h4 className="about-project__week">4 недели</h4>
                    <p className="about-project__week-info">Back-end</p>
                    <p className="about-project__week-info">Front-end</p>
                </div>
        </section>
    );
}

export default AboutProject;
