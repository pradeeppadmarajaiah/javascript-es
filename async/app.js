// async function test() {
//     const test = new Promise(
//         (res, rej) => {
//             setTimeout(() => res("Wait dEeps"), 2000);
//         }
//     );

//     const err = true;

//     if (err) {
//         await Promise.reject(new Error("something went wrong"));
//     } else {
//         const res = await test;
//         return res;
//     }

// }


// test().then(res => console.log(res)).catch(err => console.log(err));

async function getUsers() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    return data;

}


getUsers().then(users => console.log(users))


async function printUsers() {
    const users = await getUsers();
    console.log(users)
}

printUsers()