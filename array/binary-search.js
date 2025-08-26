class Solution {
    binarysearch(arr, k) {
        // Code Here
        let low = 0;
        let high = arr.length - 1;
        let result = -1;

        while (low <= high) {
            let mid = Math.floor((low + high) / 2);
            if (arr[mid] < k) {
                low = mid + 1;
            } else if (arr[mid] > k) {
                high = mid - 1;
            } else {
                result = mid;
                high = mid - 1;
            }

        }
        return result;
    }
}
let arr = [1, 1, 1, 2, 2, 3, 3, 3, 3, 3, 3, 4, 4, 4, 5, 5, 5];
let k = 1;
const result = new Solution();
console.log(result.binarysearch(arr, k));