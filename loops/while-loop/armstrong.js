let num = 151
let ori = num,
    store;
while (num > 0) {
    let d = num % 10 //last number//2
    store = store * 10 + d
    num = num / 10 //15//

}
if (ori == store) {
    console.log("1");
} else {
    console.log("2");

}
//not solve