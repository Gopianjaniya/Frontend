let input = document.getElementById("input");
let addBtn = document.getElementById("addBtn");
let text = document.querySelector(".text");
let all = document.getElementById("allBtn");
let complete = document.getElementById("completeBtn");
let pending = document.getElementById("pendingBtn");

addBtn.addEventListener("click", (event) => {
    if (input.value == "") {
        alert("Please Enter task");
    } else {
        let ul = document.createElement("ul");
        ul.innerHTML = input.value;

        //  delete button ------
        let dltBtn = document.createElement("button");
        dltBtn.innerText = "Delete";

        ul.appendChild(dltBtn);
        text.appendChild(ul);

        input.value = "";
        saveData();
    }
});

// save data ---------
function saveData() {
    localStorage.setItem("Data", text.innerHTML);
}

// get data ---------
function getData() {
    text.innerHTML = localStorage.getItem("Data");
}
text.addEventListener("click", (event) => {
    if (event.target.tagName === "BUTTON") {
        event.target.parentElement.remove();
        saveData();
    } else if (event.target.tagName === "UL") {
        event.target.classList.toggle("completed");
        saveData();
    }
});

//  for all data-----
all.addEventListener("click", (event) => {
    getData();
});
//  for complete data --------
complete.addEventListener("click", (event) => {
    let item = text.getElementsByTagName("ul");
    // console.log(item);
    for (let i = 0; i < item.length; i++) {
        if (item[i].classList.contains("completed")) {
            item[i].style.display = "block";
        } else {
            item[i].style.display = "none";
        }
    }
});

//  for pending data
pending.addEventListener("click", (event) => {
    let item = text.getElementsByTagName("ul");
    for (let i = 0; i < item.length; i++) {
        if (item[i].classList.contains("completed")) {
            item[i].style.display = "none";
        } else {
            item[i].style.display = "block";
        }
    }
});