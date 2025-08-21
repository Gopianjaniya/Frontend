class Solution {
    findDuplicates(arr) {
        let len = arr.length
        let newArr = []
        for (let i = 0; i < len - 1; i++) {
            for (let j = 1; j <= len - 1; j++) {
                if (arr[i] == arr[j] && i != j) {
                    newArr = newArr + arr[j] + " "
                }
                return newArr
            }
        }
        return newArr

    }
}
let arr = [2, 3, 1, 2, 3, 1];
const result = new Solution()
console.log(result.findDuplicates(arr));