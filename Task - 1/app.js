document.addEventListener("DOMContentLoaded", function () {
  let input1 = document.querySelector("#input1");
  let input2 = document.querySelector("#input2");
  let check = document.querySelector("#check");
  let buttons = document.querySelectorAll(".operator");
  let form = document.querySelector(".result");

  // Assign VALUE Of operator
  let operator;
  buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
      if (e.target.innerHTML == "Add") {
        operator = "+";
      } else if (e.target.innerHTML == "Substract") {
        operator = "-";
      } else if (e.target.innerHTML == "Multiply") {
        operator = "*";
      } else if (e.target.innerHTML == "Divide") {
        operator = "/";
      }
    });
  });
  // Caluclate Final Result
  check.addEventListener("click", () => {
    if (!(input1.value.trim() === "" && input2.value.trim() === "")) {
      let paragraph = document.createElement("p");
      if (input2.value > input1.value && operator == "-") {
        paragraph.innerText = `Invalid operation`;
        form.appendChild(paragraph);
        return console.log();
      }
      if (input2.value == 0 && operator == "/") {
        paragraph.innerText = `Division by zero is not allowed`;
        form.appendChild(paragraph);
        return console.log();
      }
      let result;
      try {
        result = eval(`${input1.value} ${operator} ${input2.value}`);
        console.log(result);
      } catch (error) {
        console.error("Error evaluating expression:", error);

        paragraph.innerText = `${error}`;
      }

      paragraph.innerText = `${result}`;
      form.appendChild(paragraph);
    } else {
      alert("Please enter Both Input1 and Input2");
    }
  });
});
