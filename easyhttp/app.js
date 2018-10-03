const http = new easyHTTP();

http.get("https://jsonplaceholder.typicode.com/posts", (err, res) => {
  if (err) {
    console.log(err)
  } else {
    console.log(res)
    console.log("Get successfully")
  }
});

// Create Data
const data = {
  title: 'Custom Post',
  body: 'This is a Green post'
};

http.post("https://jsonplaceholder.typicode.com/posts", data, (err, res) => {
  if (err) {
    console.log(err)
  } else {
    console.log(res)
    console.log("Posted data successfully")
  }
});

http.put("https://jsonplaceholder.typicode.com/posts/2", data, (err, res) => {
  if (err) {
    console.log(err)
  } else {
    console.log(res)
    console.log("PUT data successfully")
  }
});

http.delete("https://jsonplaceholder.typicode.com/posts/1", (err, res) => {
  if (err) {
    console.log(err)
  } else {
    console.log(res)
    console.log("DELETE successfully")
  }
});
