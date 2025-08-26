 let input = document.getElementById("input");
 let text = document.querySelector(".text");
 localStorage.clear();


 function add() {
     // localStorage.clear();
     if (input.value == "") {
         alert("Please Enter task");
     } else {

         let ul = document.createElement("ul");
         ul.setAttribute("class", "ultask")
         ul.innerHTML = `${input.value}  <button onclick="remove()" id="dtlBtn">Delete</button>`;
         // storage ----------

         let task = [];
         newTask = {
             id: task.length + 1,
             task: input.value
         };
         task.push[newTask];
         let convert = JSON.stringify(newTask);
         //  set-----------
         localStorage.setItem("todo", convert);
         input.value = "";
         text.appendChild(ul);
         //  get -----------
         let getItem = localStorage.getItem("todo");
         console.log(getItem);


         //  delete button ------
         let DeleteBtn = ul.querySelector("button")
         DeleteBtn.addEventListener("click", remove)

         function remove() {
             ul.remove()
                 // localStorage.removeItem("todo");

         }

     }
 };