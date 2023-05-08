import { Routes, Route } from "react-router-dom";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import NotFoundPage from "../NotFoundPage/NotFoundPage";

function App() {
    return (
        <div className="app">
            <div className="page">
                <Routes>
                    <Route
                        path="/"
                        element={
                            <>
                                <Header logged={false} />
                                <Main />
                                <Footer />
                            </>
                        }
                    />
                    <Route
                        path="/movies"
                        element={
                            <>
                                <Header logged={true} />
                                <Movies />
                                <Footer />
                            </>
                        }
                    />
                    <Route
                        path="/saved-movies"
                        element={
                            <>
                                <Header logged={true} />
                                <SavedMovies />
                                <Footer />
                            </>
                        }
                    />
                    <Route
                        path="/Profile"
                        element={
                            <>
                                <Header logged={true} />
                                <Profile />
                            </>
                        }
                    />
                    <Route path="/signup" element={<Register />} />
                    <Route path="/signin" element={<Login />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
                
            </div>
        </div>
    );
}

export default App;
