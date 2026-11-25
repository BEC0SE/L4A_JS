async function getData(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error('Ошибка HTTP: ' + res.status);
  return await res.json();
}

function sortComments(comments) {
  return comments.sort((a, b) => a.name.localeCompare(b.name));
}

async function run() {
  try {
    const comments = await getData('https://typicode.com');
    console.log(sortComments(comments));
  } catch (err) {
    console.error(err);
  }
}

run();
