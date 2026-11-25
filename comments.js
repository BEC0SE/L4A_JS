function getData(url, cb) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.onload = () => xhr.status === 200 ? cb(null, JSON.parse(xhr.responseText)) : cb(xhr.status);
  xhr.onerror = () => cb('Ошибка сети');
  xhr.send();
}

function sortComments(comments) {
  return comments.sort((a, b) => a.name.localeCompare(b.name));
}

getData('https://typicode.com', (err, comments) => {
  if (err) return console.error(err);
  console.log(sortComments(comments));
});
