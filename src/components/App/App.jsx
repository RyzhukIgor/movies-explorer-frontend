import { Routes, Route } from "react-router-dom";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";

function App() {
    return (
        <div className="App">
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
                </Routes>
            </div>
        </div>
    );
}

export default App;
