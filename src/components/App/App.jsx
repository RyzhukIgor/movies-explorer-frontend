import React, { useState, useEffect } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import NotFoundPage from "../NotFoundPage/NotFoundPage";

import mainApi from "../../utils/MainApi";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

//import { register, login, getUserData } from '../../utils/Auth';



function App() {
    const [currentUser, setCurrentUser] = useState({});
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isRegOk, setIsRegOk] = useState(true);
    const navigate = useNavigate();

    const tokenCheck = async() => {
        if (localStorage.getItem('token')) {
          const token = localStorage.getItem('token');
          try {
            const userData = await mainApi.getUserInfo(token);
            setCurrentUser(...currentUser, userData);
            setIsLoggedIn(true);
          } catch (err) {
            console.log(err);
          }
        }
      }

      const handleRegister = async(name, email, password) => {
        try{
          const userData = await mainApi.register(name, email, password);
          setIsRegOk(true);
          await handleLogin(email, password);
          setCurrentUser(userData);
        } catch (err) {
          setIsRegOk(false);
        }
      };

      const handleLogin = async(email, password) => {
        try {
          const { token } = await mainApi.login(email, password);
          localStorage.setItem('token', token);
          setIsLoggedIn(true);
          navigate("/movies");
        } catch (err) {
          console.log(err);
          setIsLoggedIn(false);
        }
      };

      useEffect(() => {
        tokenCheck();
      }, [isLoggedIn]);
   
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
                            <ProtectedRoute>
                            <>
                                <Header isLoggedIn={isLoggedIn} />
                                <Movies />
                                <Footer />
                            </>
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="/saved-movies"
                        isLoggedIn={isLoggedIn}
                        element={
                            <ProtectedRoute>
                             <>
                                <Header isLoggedIn={isLoggedIn}/>
                                <SavedMovies />
                                <Footer />
                            </>
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="/Profile"
                        isLoggedIn={isLoggedIn} 
                        element={
                            <ProtectedRoute>
                            <>
                                <Header isLoggedIn={isLoggedIn} />
                                <Profile />
                            </>
                            </ProtectedRoute>
                        }
                    />
                    <Route path="/signup" element={<Register handleRegister={handleRegister} isRegOk={isRegOk} isLoggedIn={isLoggedIn}/>} />
                    <Route path="/signin" element={<Login handleLogin={handleLogin} isLoggedIn={isLoggedIn}/>} />
                    <Route path="*" element={<NotFoundPage isLoggedIn={isLoggedIn}/>} />
                </Routes>
                
            </div>
        </div>
        </CurrentUserContext.Provider>
    );
}

export default App;
