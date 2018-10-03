document.getElementById('button1').addEventListener('click', loadData)

function loadData() {

  // create request
  const xhr = new XMLHttpRequest();

  xhr.open('GET', "customer.json", true);

  xhr.onload = function() {
    console.log(this.readyState);
    if (this.status === 200) {
      const customer = JSON.parse(this.responseText);
      const result = `<ul>
      <li>Id :${customer.name} </li>
      <li>Name :${customer.name} </li>
      <li>Company :${customer.name} </li>
      <li>Phone :${customer.phone} </li>
      </ul>`
      document.getElementById("customer").innerHTML = result;

    }

  }
  xhr.send();

}

document.getElementById('button2').addEventListener('click', loadCustomers)

function loadCustomers() {

  // create request
  const xhr = new XMLHttpRequest();

  xhr.open('GET', "customers.json", true);

  xhr.onload = function() {
    console.log(this.readyState);

    let result = '';
    if (this.status === 200) {

      const customers = JSON.parse(this.responseText);
      customers.forEach((customer) => {
        result += `<ul>
        <li>Id :${customer.name} </li>
        <li>Name :${customer.name} </li>
        <li>Company :${customer.name} </li>
        <li>Phone :${customer.phone} </li>
        </ul>`
      })

      document.getElementById("customers").innerHTML = result;
    }

  }
  xhr.send();

}
