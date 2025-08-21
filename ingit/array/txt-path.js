class Solution {
    firstOccurence(txt, pat) {
        // code here
        let Plen = pat.length
        let Tlen = txt.length

        for (let i = 0; i <= Tlen - Plen; i++) {
            let match = true
            for (let j = 0; j < Plen; j++) {
                if (txt[i + j] != pat[j]) {
                    match = false
                    break;
                }
            }
            if (match) {
                return i
            }
        }
        return -1;

    }
}
let txt = "gopilal";
let pat = "pi";

const multi = new Solution();
console.log(multi.firstOccurence(txt, pat));