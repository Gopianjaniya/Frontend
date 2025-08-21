let arr = [12, 33, 56, 34, 78, 29, 35]
    //  <--------------for-even number ------------->
console.log("Even number is => ");
arr.forEach((ele) => {
    if (ele % 2 == 0) {
        console.log(ele);

    }

});
//  <--------------for-odd number ------------->
console.log("Odd number is => ");
arr.forEach((ele) => {
    if (ele % 2 != 0) {
        console.log(ele);
    }
})