const posts = [
  {
    title: "Post one",
    body: "This is Post one Body"
  }, {
    title: "Post two",
    body: "This is Post two Body"
  }, {
    title: "Post three",
    body: "This is Post three Body"
  }
];

function createPost(post) {
  setTimeout(function() {
    posts.push(post);
  }, 2000);
}

function getPosts() {
  setTimeout(function() {
    let output = '';
    posts.forEach((post) => {
      output += `<li>${post.title}</li>`;
    })
    document.body.innerHTML = output;
  }, 1000);
}

// createPost({title: "Post four", body: "This is Post Four"});
// createPost({title: "Post five", body: "This is Post Five"});
//
//
// getPosts();

//Call Back
function createAfterGet(post, callback) {
  createPost(post);
  callback();
}

// createAfterGet({
//   title: "Post four",
//   body: "This is Post Four"
// }, getPosts);

//or
function createPost1(post, callback) {
  setTimeout(function() {
    posts.push(post);
    callback();
  }, 2000);
}

createPost1({
  title: "Post five",
  body: "This is Post five"
}, getPosts);
