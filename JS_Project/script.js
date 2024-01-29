const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const button = document.getElementById("btn");
const backBtn = document.getElementById("back");
const petDetails = document.getElementById("pet-info");
const vpButton = document.getElementById("wb");
const startButton = document.getElementById("start");
const btfButton = document.getElementById("back-to-form");
const vpContainer = document.getElementById("virtual-pet");
const container0 = document.getElementById("container-0");
const container1 = document.getElementById("container-1");
const container2 = document.getElementById("container-2");
const container3 = document.getElementById("container-3");
const form = document.getElementById("form");
const formPageButton = document.getElementById("form-page");

console.log("vp container initialized");
function addPet() {
  if (inputBox.value === "") {
    alert("You must write something!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData();
}

function show() {
  petDetails.classList.toggle("pet-detail");
}

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}

function showVirtualPet() {
  vpContainer.classList.toggle("virtual-pets");
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  showToDoList();
});
function showToDoList() {
  // Check if the required inputs in the form are filled
  if (form.checkValidity()) {
    // Update h2 in container-2 with the pet's name
    const petName = document.getElementById("pet-name").value;
    document.getElementById(
      "pet-todo-title"
    ).textContent = `${petName}'s To-Do List`;

    container1.style.display = "none";
    container2.style.display = "block";
  } else {
    // Trigger the HTML5 form validation
    form.reportValidity();
  }
}

button.addEventListener("click", addPet);

inputBox.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    if (inputBox.value === "") {
      alert("You must write somehting!");
    } else {
      let li = document.createElement("li");
      li.innerHTML = inputBox.value;
      listContainer.appendChild(li);
      let span = document.createElement("span");
      span.innerHTML = "\u00d7";
      li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
  }
});

listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      show();
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);
console.log("adding event listener for weight button");
startButton.addEventListener("click", function () {
  showToDoList();
});
vpButton.addEventListener("click", function () {
  // Check if the required inputs in the form are filled
  if (form.checkValidity()) {
    // Move to container-3 when the "wb" button is clicked
    container2.style.display = "none";
    container3.style.display = "block";
  } else {
    // Trigger the HTML5 form validation
    form.reportValidity();
  }
  // Additional logic as needed
});
backBtn.addEventListener("click", function () {
  container3.style.display = "none";
  container2.style.display = "block";
});
formPageButton.addEventListener("click", function () {
  container0.style.display = "none";
  container1.style.display = "block";
});
btfButton.addEventListener("click", function () {
  container2.style.display = "none";
  container1.style.display = "block";
});
showTask();
vpButton.addEventListener("click", function () {
  const petName = document.getElementById("pet-name").value;
  const virtualName = document.getElementById("virtual-name");
  virtualName.innerHTML = petName;
  const petOption = document.getElementById("dropdown").value;
  const petImage = document.getElementById("vp-image");
  console.log(petOption);
  switch (petOption) {
    case "dog":
      petImage.src = "images/dog.png";
      break;
    case "cat":
      petImage.src = "images/cat.png";
      break;
    case "bird":
      petImage.src = "images/bird.png";
      break;
    case "fish":
      petImage.src = "images/fish.png";
      break;
    case "snake":
      petImage.src = "images/snake.png";
      break;
    case "farret":
      petImage.src = "images/farret.png";
      break;
    case "rabbit":
      petImage.src = "images/rabbit.png";
      break;
    case "hamster":
      petImage.src = "images/hamster.png";
      break;
  }
});
