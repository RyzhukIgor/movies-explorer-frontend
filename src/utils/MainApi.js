class MainApi {
    constructor(options) {
        this._baseUrl = options.baseUrl;
        this._headers = options.headers;
    }

    _checkResponse(res, errMessage) {
        if (!res.ok) {
            throw new Error(`${errMessage}:\n ${res.status}`);
        }
    }

    async checkAuth( token )  {
        const res = await fetch(`${this._baseUrl}/users/me`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        })
        return this._checkResponse(res);
    }


    async register({ name, email, password }) {
        const res = await fetch(`${this._baseUrl}/signup`, {
            method: "POST",
            headers: this._headers,
            body: JSON.stringify({
                name: name,
                email: email,
                password: password,
            }),
        });
        this._checkResponse(res, "Ошибка регистрации пользователя");
        const data = await res.json();
        return data;
    }

    async login({ email, password }) {
        const res = await fetch(`${this._baseUrl}/signin`, {
            method: "POST",
            headers: this._headers,
            body: JSON.stringify({"email": `${email}`,
            "password": `${password}`}),
        });
        this._checkResponse(res, "Ошибка авторизации пользователя");
        const data = await res.json();
        return data;
    }

    async getUserInfo() {
        const res = await fetch(`${this._baseUrl}/users/me`, {
            headers: {
                authorization: this._getAuthorization(),
                "Content-Type": "application/json",
            },
        });
        this._checkResponse(res, "Ошибка получения данных с сервера");
        const data = await res.json();
        return data;
    }

    async updateUserInfo(userInfo) {
        const res = await fetch(`${this._baseUrl}/users/me`, {
            method: "PATCH",
            headers: {
                authorization: this._getAuthorization(),
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: userInfo.name,
                email: userInfo.email,
            }),
        });
        this._checkResponse(res, "Ошибка ввода данных");
        const data = await res.json();
        return data;
    }

    async addMovie(movie) {
        const res = await fetch(`${this._baseUrl}/movies `, {
            method: "POST",
            headers: {
                authorization: this._getAuthorization(),
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                country: movie.country,
                director: movie.director,
                duration: movie.duration,
                year: movie.year,
                description: movie.description,
                image: `https://api.nomoreparties.co/${movie.image.url}`,
                trailerLink: movie.trailerLink,
                thumbnail: `https://api.nomoreparties.co/${movie.image.url}`,
                movieId: movie.id,
                nameRU: movie.nameRU,
                nameEN: movie.nameEN,
            }),
        });
        this._checkResponse(res, "Ошибка загрузки фильма на сервер");
        const data = await res.json();
        return data;
    }

    async deleteMovie(movieId) {
        const res = await fetch(`${this._baseUrl}/movies/${movieId} `, {
            method: "DELETE",
            headers: {
                authorization: this._getAuthorization(),
                "Content-Type": "application/json",
            },
        });
        this._checkResponse(res, "Ошибка удаления фильма");
    }

    async getSavedMovie() {
        const res = await fetch(`${this._baseUrl}/movies`, {
            headers: {
                authorization: this._getAuthorization(),
                "Content-Type": "application/json",
            },
        });
        this._checkResponse(
            res,
            "Ошибка получения сохраненных фильмов с сервера"
        );
        const data = await res.json();
        return data;
    }
}

const mainApi = new MainApi({
    baseUrl: "https://api.bitfilms.nomoredomains.monster",
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
});

export default mainApi;