let user = {
    name: "Gopi",
    id: 101
}
console.log("---Before---");
console.log(user);

Object.assign(user, { gender: "Male", age: 34 })
console.log("---After---");

console.log(user);