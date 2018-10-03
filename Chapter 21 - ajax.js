document.getElementById('button').addEventListener('click', loadData)

function loadData() {

  // create request
  const xhr = new XMLHttpRequest();

  xhr.open('GET', "http://dummy.restapiexample.com/api/v1/employee/22", true);

  xhr.onload = function() {
console.log(this.readyState);
    if (this.status === 200) {
      document.getElementById("output").innerHTML= `<H1>${this.responseText}</H1>`;
    }

  }
  xhr.send();

}
