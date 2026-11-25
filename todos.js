function getData(url) {
  return fetch(url).then((res) => {
    if (!res.ok) throw new Error('Ошибка HTTP: ' + res.status);
    return res.json();
  });
}

function filterTodos(todos) {
  return todos.filter((todo) => !todo.completed);
}

getData('https://typicode.com')
  .then(filterTodos)
  .then((res) => console.log(res))
  .catch((err) => console.error(err));
