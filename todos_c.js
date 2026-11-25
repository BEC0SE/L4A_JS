async function getData(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error('Ошибка HTTP: ' + res.status);
  return await res.json();
}

function filterTodos(todos) {
  return todos.filter((todo) => !todo.completed);
}

async function run() {
  try {
    const todos = await getData('https://typicode.com');
    console.log(filterTodos(todos));
  } catch (err) {
    console.error(err);
  }
}

run();
