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

function getPosts() {
  setTimeout(function() {
    let output = '';
    posts.forEach((post) => {
      output += `<li>${post.title}</li>`;
    })
    document.body.innerHTML = output;
  }, 1000);
}

function createPost1(post) {

  return new Promise((resolve, reject) => {
    setTimeout(function() {
      posts.push(post);
      resolve();
    }, 2000);
  });

}

createPost1({title: "Post Four", body: "This is Post Four"}).then(createPost1({title: "Post five", body: "This is Post five"})).then(getPosts);

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(function() {
      posts.push(post);
      const error = true;
      if (!error) {
        resolve()
      } else {
        reject("Something went wrong");
      }

    }, 2000);
  });

}

createPost({title: "Post Four", body: "This is Post Four"}).then(getPosts).catch((err) => {
  console.log(err)
});
