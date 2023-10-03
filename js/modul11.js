// CRUD

// Create   -> POST
// Read     -> GET  -> getOne / getList
// Update   -> PUT / PATCH
// Delete   -> DELETE

const baseUrl = `https://jsonplaceholder.typicode.com/posts`;

// GET -> getList
fetch(baseUrl)
  .then((response) => response.json())
  // .then(posts => console.log(posts))
  .catch((error) => console.log(error));

// GET -> getOne / getById
const postId = 40;

fetch(`${baseUrl}/${postId}`)
  .then((response) => response.json())
  // .then(post => console.log(post))
  .catch((error) => console.log(error));

// POST
const postBody = {
  title: "foo",
  body: "bar",
  userId: 5,
  author: "Woj",
};

const postOptions = {
  method: "POST",
  body: JSON.stringify(postBody),
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
};

fetch(baseUrl, postOptions)
  .then((response) => response.json())
  // .then(post => console.log(post))
  .catch((error) => console.log(error));

// PUT
const putId = 5;
const putBody = {
  id: putId,
  abba: "This is new body!",
};

const putOptions = {
  method: "PUT",
  body: JSON.stringify(putBody),
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
};

fetch(`${baseUrl}/${putId}`, putOptions)
  .then((response) => response.json())
  .then((post) => console.log(post))
  // .then(() => {
  //   fetch(`${baseUrl}/${putId}`)
  //     .then(response => response.json())
  //     .then(post => console.log(post))
  //     .catch(error => console.log(error))
  // })
  .catch((error) => console.log(error));

// PATCH
const patchId = 10;
const patchBody = {
  id: patchId,
  body: "This is new body!",
};

const patchOptions = {
  method: "PATCH",
  body: JSON.stringify(patchBody),
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
};

fetch(`${baseUrl}/${patchId}`, patchOptions)
  .then((response) => response.json())
  .then((post) => console.log(post))
  // .then(() => {
  //   fetch(`${baseUrl}/${patchId}`)
  //     .then(response => response.json())
  //     .then(post => console.log(post))
  //     .catch(error => console.log(error))
  // })
  .catch((error) => console.log(error));

// DELETE

const deleteId = 12;

const deleteOptions = {
  method: "DELETE",
};

fetch(`${baseUrl}/${deleteId}`, deleteOptions)
  .then(() => console.log("Post deleted"))
  .catch((error) => console.log(error));
