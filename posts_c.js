async function getData(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error('Ошибка HTTP: ' + res.status);
  return await res.json();
}

function sortPosts(posts) {
  return posts.sort((a, b) => b.title.length - a.title.length);
}

async function run() {
  try {
    const posts = await getData('https://typicode.com');
    console.log(sortPosts(posts));
  } catch (err) {
    console.error(err);
  }
}

run();
