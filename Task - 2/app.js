let url = "https://jsonplaceholder.typicode.com/users";
let button = document.querySelector(".fetchData");
let table = document.querySelector(".table");

function fetchData() {
  fetch(url)
    .then((res) => {
      console.log(res);
      res.json().then((data) => {
        inputData(data);
        console.log(data);
      });
    })
    .catch((error) => {
      console.log("error - ", error);
    });
}
button.addEventListener("click", fetchData);

// "id": 1,
//         "name": "Leanne Graham",
//         "username": "Bret",
//         "email": "Sincere@april.biz",
//         "address": {
//             "street": "Kulas Light",
//             "suite": "Apt. 556",
//             "city": "Gwenborough",
//             "zipcode": "92998-3874",
//             "geo": {
//                 "lat": "-37.3159",
//                 "lng": "81.1496"
//             }
//         },
//         "phone": "1-770-736-8031 x56442",
//         "website": "hildegard.org",
//         "company": {
//             "name": "Romaguera-Crona",
//             "catchPhrase": "Multi-layered client-server neural-net",
//             "bs": "harness real-time e-markets"
//         }

function inputData(data) {
  let tableHead = document.createElement("thead");

  let tableHeadRow = document.createElement("tr");

  let id = document.createElement("th");
  id.innerText = "ID";
  tableHeadRow.appendChild(id);
  let name = document.createElement("th");
  name.innerText = "Name";
  tableHeadRow.appendChild(name);
  let username = document.createElement("th");
  username.innerText = "UserName";
  tableHeadRow.appendChild(username);
  let email = document.createElement("th");
  email.innerText = "Email";
  tableHeadRow.appendChild(email);
  let address = document.createElement("th");
  address.innerText = "Address";
  tableHeadRow.appendChild(address);
  let phone = document.createElement("th");
  phone.innerText = "Phone";
  tableHeadRow.appendChild(phone);
  let website = document.createElement("th");
  website.innerText = "Website";
  tableHeadRow.appendChild(website);
  let company = document.createElement("th");
  company.innerText = "Company";
  tableHeadRow.appendChild(company);

  tableHead.appendChild(tableHeadRow);
  table.appendChild(tableHead);

  let tableBody = document.createElement("tbody");

  data.forEach((element) => {
    let tableHeadRow = document.createElement("tr");

    let id = document.createElement("th");
    id.innerText = `${element.id}`;
    tableHeadRow.appendChild(id);
    let name = document.createElement("th");
    name.innerText = `${element.name}`;
    tableHeadRow.appendChild(name);
    let username = document.createElement("th");
    username.innerText = `${element.username}`;
    tableHeadRow.appendChild(username);
    let email = document.createElement("th");
    email.innerText = `${element.email}`;
    tableHeadRow.appendChild(email);

    let address = document.createElement("th");
    address.innerText = `Address : Street - ${element.address.street}, Suite - ${element.address.suit}, City - ${element.address.city},Zipcode - ${element.address.zipcode},Geography : Lat - ${element.address.geo.lat} Lng - ${element.address.geo.lng}`;
    tableHeadRow.appendChild(address);

    let phone = document.createElement("th");
    phone.innerText = `${element.phone}`;
    tableHeadRow.appendChild(phone);
    let website = document.createElement("th");
    website.innerText = `${element.website}`;
    tableHeadRow.appendChild(website);

    let company = document.createElement("th");
    company.innerText = `Company Name:${element.company.name}, CatchPhrase:${element.company.catchPhrase}, BS :${element.company.bs}`;
    tableHeadRow.appendChild(company);

    tableBody.appendChild(tableHeadRow);
    table.appendChild(tableBody);

    // let tableValues = document.createElement("p");
    // tableValues.innerText = `${element.name}`;
    // contentData.appendChild(tableValues);
  });
}
