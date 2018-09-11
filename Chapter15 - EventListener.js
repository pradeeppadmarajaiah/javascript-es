// document.querySelector('.clear-tasks').addEventListener('click',
//   (e) => {
//     alert("Hello world");
//     //Disable default handlers
//     e.preventDefault();
//   }
//
// );

//Recommended way
document.querySelector('.clear-tasks').addEventListener('click', onClick);

function onClick(e) {
  //  alert("Hello world");
  //Disable default handlers
  console.log(e);
  e.preventDefault();
  e.target.innerHTML="Wow"
}


document.querySelector('.clear-tasks').addEventListener('mouseover', onMouseover);
function onMouseover(e) {
    e.target.innerHTML="Buuu"
}
