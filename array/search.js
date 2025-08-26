class Solution {
    search(arr, x) {
        // code here
        let count = 0;
        // let index = 0;
        for (let i of arr) {
            if (i == x) {
                return count;
            }
            count++;
        }
        return -1;
    }
}
let arr = [10, 8, 30, 4, 5];
let x = 5;
const result = new Solution();
console.log(result.search(arr, x));