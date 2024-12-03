let ratings = document.querySelectorAll(".rating");

for (const rating of ratings) {
  rating.addEventListener("click", select);
}
let selected = true;
let grip;

function handleSubmit(event) {
  if (!grip) {
    let error = document.getElementById("error");
    error.classList.remove("hidden");
    error.classList.add("flex");
  } else {
    let rateDisp = document.getElementById("ratingPage");
    let thankDisp = document.getElementById("thankYouPage");
    rateDisp.classList.add("hidden");
    thankDisp.classList.add("flex");
    thankDisp.classList.remove("hidden");
    let ratingText = document.getElementById("ratingText");
    ratingText.innerHTML = `You selected ${grip.innerHTML} out of 5`;
  }
}

function select(event) {
  if (!selected) {
    grip.classList.remove("bg-white");
    grip.classList.remove("text-black");
    grip = document.getElementById(event.target.id);
    grip.classList.add("bg-white");
    grip.classList.add("text-black");
  } else {
    grip = document.getElementById(event.target.id);
    grip.classList.add("bg-white");
    grip.classList.add("text-black");
    selected = false;
  }
}
