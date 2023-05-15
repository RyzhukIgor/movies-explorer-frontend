class MoviesApi {
    constructor(options) {
        this._baseUrl = options.baseUrl
    }

    _checkResponse(res, errMessage) {
        if (!res.ok) {
            throw new Error(`${errMessage}:\n ${res.status}`);
        }
    }

    async getInitialsMovies() {
        const res = await fetch(this._baseUrl, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        this._checkResponse(res, 'Ошибка получения фильмов с сервера');
        const data = await res.json();
        return data;
    }


}

export const moviesApi = new MoviesApi({
    baseUrl: 'https://api.nomoreparties.co/beatfilm-movies',
})