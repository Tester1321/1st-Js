let tmoney = document.getElementById("money");
let result = document.getElementById("result");

document.getElementById("button-addon2").onclick = function () {
  let money = parseFloat(tmoney.value);
  if (isNaN(money) || money <= 0) {
    result.innerText = "ادخل قيمة صحيحة من فضلك.";
    result.classList.add("text-danger");
    result.classList.remove("text-success");
    return;
  }
  result.classList.add("text-success");
  result.classList.remove("text-danger");
  let zakah = money * 0.025;
  tmoney.value = "";
  result.innerText = "Zakah is : " + zakah;
};

let btn1 = document.getElementById("toggle-mode");
let btn2 = document.getElementById("button-addon2");

document.getElementById("toggle-mode").onclick = function () {
  document.body.classList.toggle("bg-dark");
  if (document.body.classList.contains("bg-dark")) {
    btn1.classList.add("btn-light");
    btn1.classList.remove("btn-dark");
    btn2.classList.add("btn-light");
    btn2.classList.remove("btn-outline-secondary");
  } else {
    btn1.classList.add("btn-dark");
    btn1.classList.remove("btn-light");
    btn2.classList.add("btn-outline-secondary");
    btn2.classList.remove("btn-light");
  }
};

// document
//   .getElementById("button-addon2")
//   .addEventListener("click", function () {
//     let money = zakah;
//     let zakah = money * 0.025;
//     console.log("Zakah is: " + zakah);
//   });
