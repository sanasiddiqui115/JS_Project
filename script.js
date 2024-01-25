const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const button = document.getElementById("btn");
const petDetails = document.getElementById("pet-info");
const weightButton = document.getElementById("wb");
const vpContainer = document.getElementById("virtual-pet");
console.log("vp container initialized");
function addPet(){
    if(inputBox.value === ''){
        alert("You must write something!");  
    }
    else{
        let li =document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value == "";
    saveData();
}

function show(){
    petDetails.classList.toggle('pet-detail');
}

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}

function showVirtualPet(){
    vpContainer.classList.toggle('virtual-pets');
}
button.addEventListener("click", addPet)
inputBox.addEventListener("keyup", function(event){
    if(event.key === "Enter"){
        if(inputBox.value === ''){
            alert("You must write somehting!");  
        }
        else{
            let li =document.createElement("li");
            li.innerHTML = inputBox.value;
            listContainer.appendChild(li);
            let span = document.createElement("span");
            span.innerHTML = "\u00d7";
            li.appendChild(span);
        }
        inputBox.value = "";
        saveData();
    }
})

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        show();        
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);
console.log("adding event listener for weight button");

weightButton.addEventListener("click", showVirtualPet);

showTask();