const employee = {
    empName: "gopi",
    calTax() {
        return `tax 10%`;
    },
};
const car = {
    carName: "shift",
    // calTax() {
    //     return `tax 20% `
    // }
};
car.__proto__ = employee;

console.log(car.carName);
console.log(car.empName);
console.log(car.calTax());