let arr = [12, 23, 45, 12, 34, 12, 12]
let count = 0
let num = 12
arr.forEach((ele) => {
    if (ele == num) {
        count++
    }
})
console.log(num, "is repeated", count, "times");