const URL = 'http://localhost:4000/api/auth';

export default () => {
  return fetch(URL, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username: 'ecedeno',
      password: '123456',
    }),
  })
    .then(response => response.json())
    .then(res => {
      return res;
    });
};
