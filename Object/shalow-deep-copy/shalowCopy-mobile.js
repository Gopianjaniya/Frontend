let mobile = {
    Name: "OPPO A53",
    model: "new-Model",
    Ram_Rom: "8 128 GB",
};
console.log("---Before---");

console.log(mobile);
let newMobile = {...mobile, price: "34,000", gurante: "1 year" };
console.log("---After---");
console.log(newMobile);