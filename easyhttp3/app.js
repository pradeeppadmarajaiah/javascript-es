const http = new EasyHTTP;

// //Get Users
// http.get("https://jsonplaceholder.typicode.com/users").
// then(data=>console.log(data)).catch(err=>console.log(err));

let data = {
    name: 'pradeep',
    username: 'prade',
    email: 'p@gmail.com'
}
http.delete("https://jsonplaceholder.typicode.com/users/1").
    then(data => console.log(data)).catch(err => console.log(err));

http.post("https://jsonplaceholder.typicode.com/users").
    then(data => console.log(data)).catch(err => console.log(err));

data = {
        name: 'RAJ',
        username: 'raj',
        email: 'raj@gmail.com'
    }
http.put("https://jsonplaceholder.typicode.com/users/1 ").
    then(data => console.log(data)).catch(err => console.log(err));




    
//Get Users
http.get("https://jsonplaceholder.typicode.com/users").
then(data=>console.log(data)).catch(err=>console.log(err));