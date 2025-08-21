let computer = {
    cpu: 15,
};
let lenovo = { screen: "HD", __proto__: computer };
let tomHardware = {};
console.log(`lenovo `, lenovo);
console.log(`lenovo `, lenovo.__proto__);