function getData(url, cb) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.onload = () => xhr.status === 200 ? cb(null, JSON.parse(xhr.responseText)) : cb(xhr.status);
  xhr.onerror = () => cb('Ошибка сети');
  xhr.send();
}

function sortPosts(posts) {
  return posts.sort((a, b) => b.title.length - a.title.length);
}

getData('https://typicode.com', (err, posts) => {
  if (err) return console.error(err);
  console.log(sortPosts(posts));
});
