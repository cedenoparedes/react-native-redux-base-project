const URL = 'http://localhost:4000/api/auth';

export default loginApi = (username, password) => {
  return fetch(URL, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username,
      password,
    }),
  })
    .then(response => response.json())
    .then(res => {
      return res;
    });
};
