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
import { login, checkAuth } from "../../utils/auth";


function App() {
    const [currentUser, setCurrentUser] = useState({});
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isRegOk, setIsRegOk] = useState(true);
    const navigate = useNavigate();


      const handleRegister = async({name, email, password}) => {
        try{
          const userData = await mainApi.register({name, email, password});
          setIsRegOk(true);
          setCurrentUser(userData);
          navigate("/signin");
        } catch (err) {
          setIsRegOk(false);
        }
      };

      const handleLogin = async({ email, password}) => {
        try {
          const { token } = await login({ email, password});
          localStorage.setItem('jwt', token);
          setIsLoggedIn(true);
          navigate("/movies");
          console.log("done")
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
              setCurrentUser(user)
              setIsLoggedIn(true);
              navigate("/movies");
            })
            .catch((err) => console.log(err));
        }
      }, [])
   
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
                                <Movies />
                                <Footer />
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
                    <Route path="/signin" element={<Login onSubmit={handleLogin} isLoggedIn={isLoggedIn} />} />
                    <Route path="*" element={<NotFoundPage isLoggedIn={isLoggedIn}/>} />
                </Routes>
                
            </div>
        </div>
        </CurrentUserContext.Provider>
    );
}

export default App;
