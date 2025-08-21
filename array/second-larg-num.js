// // let arr = [130, 45, 800, 5909, 33, 67]
// // let arr = [10, 5, 10];
// // let arr = [10, 10, 10];
// // let arr = [17296, 9524, 28446, 12750, 422, 7888, 25584];
// let arr = [
//     9308, 10220, 7822, 18401, 12464, 25247, 30639, 10262, 14225, 6334, 12621,
//     12942, 4208, 19079, 30460, 8096, 8477, 23068, 10154, 660, 24459, 5684, 1407,
//     18941, 8404, 23824, 7432, 6729, 22908, 27569, 10133, 13974, 13050, 11592,
//     27871, 27500, 32900
// ];
// let large = 0;
// let s_large = 0;
// for (let i = 0; i <= arr.length - 1; i++) {
//     if (large < arr[i]) {
//         s_large = large;
//         large = arr[i];
//     } else if (arr[i] > s_large && arr[i] != large) {
//         s_large = arr[i];
//     } else if (arr[i] == arr[i + 1]) {
//         return -1;
//     }
// }
// // console.log("large number => ", large);

// console.log("second large => ", s_large);
class Solution {
    getSecondLargest(arr) {
        // code here
        let len = arr.length;
        let first = 0;
        let second = 0;
        for (let i = 0; i <= len - 1; i++) {
            if (first < arr[i]) {
                second = first;
                first = arr[i];
            } else if (arr[i] > second && arr[i] != first) {
                second = arr[i];
            } else if (arr[i] == arr[i + 1]) {
                return -1;
            }
        }
        return second;
    }
}
// let arr = [
//     9308, 10220, 7822, 18401, 12464, 25247, 30639, 10262, 14225, 6334, 12621,
//     12942, 4208, 19079, 30460, 8096, 8477, 23068, 10154, 660, 24459, 5684, 1407,
//     18941, 8404, 23824, 7432, 6729, 22908, 27569, 10133, 13974, 13050, 11592,
//     27871, 27500, 32900
// ];
let arr = [10, 9, 10]
const solve = new Solution()
let result = solve.getSecondLargest(arr)
console.log("Second largest number -> ", result);