// class Solution {
//     reverseInGroups(arr, k) {
//         let len = arr.length;
//         let newArr = []
//         let idx = 0
//         if (k > len) {
//             for (let i = len - 1; i >= 0; i--) {
//                 newArr[idx++] = arr[i];
//             }
//         } else {
//             for (let i = k - 1; i >= 0; i--) {
//                 newArr[idx++] = arr[i];
//             }
//             for (let i = len - 1; i >= k; i--) {
//                 newArr[idx++] = arr[i];
//             }
//         }

//         return newArr;
//     }
// }
class Solution {
    reverseInGroups(arr, k) {
        let len = arr.length;
        let newArr = [];
        for (let i = 0; i < len; i += k) {
            let group = arr.slice(i, Math.min(i + k, len));
            newArr.push(...group.reverse());
        }
        return newArr;
    }
}

let arr = [1, 2, 3, 4, 5];
let k = 3;
const result = new Solution();
console.log(result.reverseInGroups(arr, k));