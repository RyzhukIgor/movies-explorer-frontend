import React, { useState, useEffect } from 'react';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFoundPage from '../NotFoundPage/NotFoundPage';

import mainApi from '../../utils/MainApi';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { login, checkAuth } from '../../utils/auth';

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isRegOk, setIsRegOk] = useState(true);
  const [savedMovies, setSavedMovies] = useState(
    JSON.parse(localStorage.getItem('searchFilteredFilms')) || []
  );
  const navigate = useNavigate();

  const handleRegister = async ({ name, email, password }) => {
    try {
      const userData = await mainApi.register({ name, email, password });
      setIsRegOk(true);
      setCurrentUser(userData);
      navigate('/signin');
    } catch (err) {
      setIsRegOk(false);
    }
  };

  const handleLogin = async ({ email, password }) => {
    try {
      const { token } = await login({ email, password });
      localStorage.setItem('jwt', token);
      setIsLoggedIn(true);
      navigate('/movies');
      console.log('done');
    } catch (err) {
      console.log(err);
      setIsLoggedIn(false);
    }
  };

  useEffect(() => {
    const jwt = localStorage.getItem('jwt');

    if (jwt) {
      checkAuth(jwt)
        .then((user) => {
          setCurrentUser(user);
          setIsLoggedIn(true);
          navigate('/movies');
        })
        .catch((err) => console.log(err));
    }
  }, []);

  const handleUpdateData = async ({ name, email }) => {
    try {
      const updatedData = await mainApi.updateInfo({ name, email });
      setCurrentUser(updatedData);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSignOut = () => {
    localStorage.removeItem('jwt');
    setCurrentUser(null);
    setIsLoggedIn(false);
    navigate('/');
  };

  const getUserInfo = async () => {
    try {
      const userInfo = await mainApi.getUserInfo();
      setCurrentUser(userInfo);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (isLoggedIn) {
      getUserInfo();
    }
  }, [isLoggedIn]);

  function handleFilmSave(movie, setIsAdded) {
    mainApi
      .addMovie(movie)
      .then((data) => {
        setSavedMovies([...savedMovies, data]);
        setIsAdded(true);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    if (isLoggedIn) {
      mainApi
        .getSavedMovie()
        .then((res) => {
          setSavedMovies(res);
          localStorage.setItem('ownSavedMovies', JSON.stringify(res));
        })
        .catch((err) => `Error: ${err}`);
    }
  }, [isLoggedIn]);

  function handleFilmUnsave(movie, setIsAdded) {
    mainApi
      .deleteMovie(movie._id)
      .then(() => {
        setSavedMovies((state) => state.filter((m) => m._id !== movie._id));
        setIsAdded(false);
      })
      .catch((err) => console.log(`Error: ${err}`));
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="app">
        <div className="page">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Header isLoggedIn={isLoggedIn} />
                  <Main />
                  <Footer />
                </>
              }
            />
            <Route
              path="/movies"
              isLoggedIn={isLoggedIn}
              element={
                <ProtectedRoute isLoggedIn={isLoggedIn}>
                  <Header isLoggedIn={isLoggedIn} />
                  <Movies
                    handleFilmSave={handleFilmSave}
                    savedMovies={savedMovies}
                    handleFilmUnsave={handleFilmUnsave}
                  />
                  <Footer />
                </ProtectedRoute>
              }
            />
            <Route
              path="/saved-movies"
              isLoggedIn={isLoggedIn}
              element={
                <ProtectedRoute isLoggedIn={isLoggedIn}>
                  <>
                    <Header isLoggedIn={isLoggedIn} />
                    <SavedMovies 
                    savedMovies={savedMovies}
                    handleFilmUnsave={handleFilmUnsave} />
                    <Footer />
                  </>
                </ProtectedRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoute isLoggedIn={isLoggedIn}>
                  <Header isLoggedIn={isLoggedIn} />
                  <Profile
                    onUpdateData={handleUpdateData}
                    onSignOut={handleSignOut}
                  />
                </ProtectedRoute>
              }
            />
            <Route
              path="/signup"
              element={
                <Register
                  handleRegister={handleRegister}
                  isRegOk={isRegOk}
                  isLoggedIn={isLoggedIn}
                />
              }
            />
            <Route
              path="/signin"
              element={<Login onSubmit={handleLogin} isLoggedIn={isLoggedIn} />}
            />
            <Route
              path="*"
              element={<NotFoundPage isLoggedIn={isLoggedIn} />}
            />
          </Routes>
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
