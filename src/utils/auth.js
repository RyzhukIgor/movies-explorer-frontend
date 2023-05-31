export const BASE_URL = 'https://api.bitfilms.nomoredomains.monster';

function checkResponse(res) {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(`Ошибка ${res.status}`);
}

export const login = async (data) => {
  const res = await fetch(`${BASE_URL}/signin`, {
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
  });
  return checkResponse(res);
}

export const checkAuth = async (token) => {
  const res = await fetch(`${BASE_URL}/users/me`, {
      method: 'GET',
      headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
      }
  });
  return checkResponse(res);
}