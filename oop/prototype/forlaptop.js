let model = { model: "Dell" }
let price = { price: 50000 }
let ram = { ram: 16 }
console.log(model);

Object.setPrototypeOf(model, price);
console.log(Object.getPrototypeOf(model));

Object.setPrototypeOf(model, ram);
console.log(Object.getPrototypeOf(model));