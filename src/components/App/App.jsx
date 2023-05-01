import { Routes, Route } from "react-router-dom";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Movies from "../Movies/Movies";

function App() {
    return (
        <div className="App">
            <div className="page">
                <Routes>
                    <Route
                        path="/"
                        element={
                            <>
                                <Header />
                                <Main />
                                <Footer />
                            </>
                        }
                    />
                    <Route
                        path="/movies"
                        element={
                            <>
                                <Header />
                                <Movies />
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
