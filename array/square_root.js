class Solution {
    floorSqrt(n) {
        if (n === 0 || n === 1) return n;
        let low = 1;
        let high = n;
        let result = 0;
        while (low <= high) {
            let mid = Math.floor((low + high) / 2);
            if (mid * mid === n) return mid;
            if (mid * mid < n) {
                low = mid + 1;
                result = mid;
            } else {
                high = mid - 1;
            }
        }
        return result;
    }
}
let n = 8;
const result = new Solution();
console.log(result.floorSqrt(n));