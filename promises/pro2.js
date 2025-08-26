console.log("first step");
let promises = new Promise((resolve, reject) => {
    // alert("hello")
    resolve(55)
})
setTimeout(() => {
    console.log("in promise");
}, 3000);
console.log(promises);