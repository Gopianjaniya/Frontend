let tyrer = { tyre: 4 }
let carName = { car: "sift" }
Object.setPrototypeOf(carName, tyrer)
console.log(carName);
console.log(Object.getPrototypeOf(carName));