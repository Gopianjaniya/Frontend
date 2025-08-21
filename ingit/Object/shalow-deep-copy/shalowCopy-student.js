let student = { Name: "goggy", age: 12, gender: "male" }
console.log("---Before---");
console.log(student);
let newStudents = {...student, roll_No: 101, grade: "A" }
console.log("---After---");
console.log(newStudents);