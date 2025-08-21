class Solution {
    NonRepeatingCharacter(str) {
        let len = str.length;
        let newStr = str.split("");
        let charRepeat = "";
        let charNoRepeat = "";
        for (let i = 0; i < len; i++) {
            for (let j = 0; j < len; j++) {
                if (newStr[i] == newStr[j] && i != j) {
                    charRepeat = newStr[i];
                    break
                }
            }
            if (newStr[i] != charRepeat) {
                charNoRepeat = newStr[i];
                break
            }
        }
        if (charNoRepeat) {
            return charNoRepeat
        } else {
            return -1
        }
        return charNoRepeat;
    }
}
let str = "aabbccw";
const result = new Solution();
let finalVal = result.NonRepeatingCharacter(str);
console.log(finalVal);