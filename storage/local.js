let student1 = { id: 1, name: "gopi", age: 22 };
let stu1 = JSON.stringify(student1);
localStorage.setItem("studentinfo1", stu1);

let student2 = { id: 2, name: "amna", age: 55 };
let stu2 = JSON.stringify(student2);
localStorage.setItem("studentinfo2", stu2);

let student3 = { id: 3, name: "dipyu", age: 66 };
let stu3 = JSON.stringify(student3);
localStorage.setItem("studentinfo3", stu3);

// localStorage.clear();

let student1Get = localStorage.getItem("studentinfo1");
console.log(student1Get);
let student2Get = localStorage.getItem("studentinfo2");
console.log(student2Get);
let student3Get = localStorage.getItem("studentinfo3");
console.log(student3Get);