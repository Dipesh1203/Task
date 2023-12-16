let url = "https://jsonplaceholder.typicode.com/users";
let button = document.querySelector(".fetchData");

function fetchData() {
  fetch(url)
    .then((res) => {
      console.log(res);
      res.json().then((data) => {
        console.log(data);
      });
    })
    .catch((error) => {
      console.log("error - ", error);
    });
}
button: onclick = fetchData;

function inputData(data) {
  // for(let i of )
}
