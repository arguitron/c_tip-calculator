let billInput = document.getElementById("bill-input");
let tipInput = document.getElementById("tip-input");
let peopleInput = document.getElementById("people-input");
let tipAmount = document.getElementById("tip-amount");
let totalAmount = document.getElementById("total-amount");
let resetBtn = document.getElementById("reset-btn");
let tips = document.querySelectorAll(".input__tip__tip");

const getTip = () => {
  let tip = (
    (parseFloat(billInput.value) * (parseInt(tipInput.value) / 100)) /
    parseInt(peopleInput.value)
  ).toFixed(2);
  let total = (
    (parseFloat(billInput.value) * (1 + parseInt(tipInput.value) / 100)) /
    parseInt(peopleInput.value)
  ).toFixed(2);
  return [tip, total];
};

const printTip = () => {
  if (billInput.value && tipInput.value && peopleInput.value) {
    tipAmount.innerHTML = "$" + getTip()[0];
    totalAmount.innerHTML = "$" + getTip()[1];
    resetBtn.classList.remove("btn-reset-blocked");
    resetBtn.classList.add("btn-reset");
  } else {
    tipAmount.innerHTML = "$0.00";
    totalAmount.innerHTML = "$0.00";
  }
};

for (let i = 0; i < tips.length; i++) {
  tips[i].addEventListener("click", () => {
    tipInput.value = tips[i].innerText.slice(0, -1);
    printTip();
  });
}

let inputs = [billInput, tipInput, peopleInput];
for (let i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener("keyup", () => {
    printTip();
  });
}

resetBtn.addEventListener("click", () => {
  billInput.value = "";
  tipInput.value = "";
  peopleInput.value = "";
  tipAmount.innerHTML = "$0.00";
  totalAmount.innerHTML = "$0.00";
  resetBtn.classList.remove("btn-reset");
  resetBtn.classList.add("btn-reset-blocked");
});
