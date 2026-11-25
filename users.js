function getData(url) {
  return fetch(url).then((res) => {
    if (!res.ok) throw new Error('Ошибка HTTP: ' + res.status);
    return res.json();
  });
}

function formatUsers(users) {
  return users.map((user) => ({
    id: user.id,
    name: user.name,
    username: user.username,
    email: user.email,
    phone: user.phone,
  }));
}

getData('https://jsonplaceholder.typicode.com/users')
  .then(formatUsers)
  .then((res) => console.log(res))
  .catch((err) => console.error(err));
