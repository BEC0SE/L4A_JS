async function getData(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error('Ошибка HTTP: ' + res.status);
  return await res.json();
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

async function run() {
  try {
    const users = await getData('https://jsonplaceholder.typicode.com/users');
    console.log(formatUsers(users));
  } catch (err) {
    console.error(err);
  }
}

run();
