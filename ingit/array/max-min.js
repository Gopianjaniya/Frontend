class Solution {
    getMinMax(arr) {
        // code here

        let max = arr[0];
        let min = arr[0];
        let len = arr.length;
        let store = "";
        for (let i = 0; i < len; i++) {
            if (max < arr[i]) {
                max = arr[i];
            }
            if (min > arr[i]) {
                min = arr[i];

            }
        }


        return [min, max];
    }
}
let arr = [28004, 23544, 32504, 29493, 17013, 17850, 18952, 12089, 5126, 10353];

const result = new Solution();
console.log(result.getMinMax(arr));