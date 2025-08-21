class Solution {
    findDuplicates(arr) {
        // code here
        let len = arr.length;
        let newArr = [];
        let idx = 0;
        for (let i = 0; i < len; i++) {
            for (let j = i + 1; j < len; j++) {
                if (arr[i] == arr[j] && i != j) {
                    //  newArr.push(arr[j]);
                    newArr[idx++] = arr[j];

                    break;
                }
            }
        }

        return newArr



    }
}
let arr = [1, 1, 2, 2];
const find = new Solution();
console.log(find.findDuplicates(arr));