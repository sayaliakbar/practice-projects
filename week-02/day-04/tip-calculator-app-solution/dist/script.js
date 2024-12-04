let tips = document.querySelectorAll(".tip");
let isFirstSelection = true;
let selectedTip;
let tip = 0;

tips.forEach((tip) => {
  tip.addEventListener("click", select);
});

function select(event) {
  if (!isFirstSelection) {
    // Reset styles for previously selected rating
    selectedTip.classList.remove("bg-primary-cyan", "text-black");
  }

  // Update selected rating and apply styles
  selectedTip = event.target;
  if (event.target.nodeName != "INPUT") {
    selectedTip.classList.add("bg-primary-cyan", "text-black");

    let number = selectedTip.textContent.match(/\d+/)[0];
    tip = number / 100;
    tip *= bill.value;
  }

  // Mark as no longer the first selection
  isFirstSelection = false;
}

const bill = document.getElementById("bill");
const people = document.getElementById("people");
const error = document.getElementById("error");
const tipAmount = document.getElementById("tipAmount");
const totalAmount = document.getElementById("totalAmount");

bill.addEventListener("input", output);
people.addEventListener("input", output);

function reset() {
  bill.value = "";
  people.value = "";
  tipAmount.innerText = "$0.00";
  totalAmount.innerText = "$0.00";
  select();
}

function output() {
  if (people.value == 0) {
    error.classList.remove("hidden");
    people.classList.add("border-red-600");
  }
  if (people.value === "") {
    error.classList.add("hidden");
    people.classList.remove("border-red-600");
    tipAmount.innerText = "$0.00";
    totalAmount.innerText = "$0.00";
  }

  // When both values are empty
  if (bill.value === "" && people.value === "") {
    tipAmount.innerText = "$0.00";
    totalAmount.innerText = "$0.00";
  }
  // When both values are 0
  if (bill.value == 0 && people.value == 0) {
    tipAmount.innerText = "$0.00";
    totalAmount.innerText = "$0.00";
  }
  // When both values are greater then 1
  if (bill.value > 0 && people.value > 0) {
    let totalBill = parseInt(bill.value, 10) + tip;
    let tipam = tip / people.value;
    let billam = totalBill / people.value;
    tipAmount.innerText = tipam.toFixed(2);
    totalAmount.innerText = billam.toFixed(2);
    console.log(tip);
  }
  //When bill value is empty or 0
  if (bill.value === "" || bill.value == 0) {
    tipAmount.innerText = "$0.00";
    totalAmount.innerText = "$0.00";
  }
}
