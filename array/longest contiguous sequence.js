let arr = [1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0]
let maxcount = 0
let count = 1
for (let i = 1; i <= arr.length - 1; i++) {
    if (arr[i] == arr[i - 1]) {
        count++
    } else {
        maxcount = Math.max(maxcount, count);
        count = 1
    }
}
maxcount = Math.max(maxcount, count)
console.log(maxcount);