let arr = [2233, 34, 44, 56, 74, 364]
let great = 0
arr.forEach((ele) => {
    if (great < ele) {
        great = ele
    }

})
console.log(great);