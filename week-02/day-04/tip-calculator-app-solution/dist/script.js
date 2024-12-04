let tips = document.querySelectorAll(".tip");
let isFirstSelection = true;
let selectedTip;

tips.forEach((tip) => {
  tip.addEventListener("click", select);
});

function select(event) {
  if (!isFirstSelection) {
    // Reset styles for previously selected rating
    selectedTip.classList.remove("bg-primary-cyan", "text-black");
  }

  // Update selected rating and apply styles
  selectedTip = event.currentTarget;
  if (event.target.nodeName != "INPUT") {
    selectedTip.classList.add("bg-primary-cyan", "text-black");
  }

  // Mark as no longer the first selection
  isFirstSelection = false;
}

// function handleSubmit() {
//   let people = document.getElementById("people");

//   if (!people.innerHTML) {
//     error.classList.remove("hidden");
//     people.classList.add("border-red-600");
//   } else {
//     error.classList.add("hidden");
//     people.classList.remove("border-red-600");
//   }
// }
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
}

function output() {
  if (people.value === "" || people.value === 0) {
    error.classList.remove("hidden");
  } else {
    if (bill.value === "") {
      tipAmount.innerHTML = "$0.00";
    } else {
      tipAmount.innerHTML = bill.value / people.value;
    }
    error.classList.add("hidden");
    console.log(bill.value / people.value);
  }
}
