let p = new Promise((resolve, reject) => {
    console.log("pending");
    setTimeout(() => {
        console.log("success");
        resolve(true)

    }, 4000);
});
let p2 = new Promise((resolve, reject) => {
    console.log("pending");
    setTimeout(() => {


        reject(new Error("Error"));
    }, 4000);
});
// ------------------- catch error -
// p.then((value) => {
//     console.log(value);
// })

// p2.catch((error) => {
//     console.log("Error occured");
// });


// ------------------- catch error2 -
p2.catch((value) => {
    console.log(value);
}, (error) => {
    console.log("Error");


});
console.log(p);