import { NavLink } from 'react-router-dom';

function NotFoundPage() {
  return (
    <main className="not-found">
      <h1 className="not-found__title">404</h1>
      <p className="not-found__subtitle">Страница не найдена</p>
      <NavLink className="not-found__link" to="/">
        Назад
      </NavLink>
    </main>
  );
}

export default NotFoundPage;
