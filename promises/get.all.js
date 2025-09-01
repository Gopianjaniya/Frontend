let p1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, "first");
    // setTimeout(reject, 1000, "reject");
})
let p2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, "2nd");
});
let p3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, "3rd");
});
let p4 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, "4th");
});
Promise.all([p1, p2, p4, p3]) // yha pe ek new promise create hoga , but esme se ek bhi reject hua to new wala bhi reject mana jayega
    .then((value) => {
        console.log(value);
        return value
    }).then((value) => {
        console.log("2nd then", value);

    }).catch((error) => {
        console.log(error, "error");
    }).finally(() => {
        console.log("finally");

    })