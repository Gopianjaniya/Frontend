 class Solution {
     multiplyStrings(s1, s2) {
         // code here
         let multi = 0;
         multi = s1 * s2;
         multi = Math.floor(multi / 10)

         if (multi == 0 || multi == -0) {
             return 0;
         }
         return multi;
     }
 }

 let s1 = "-84634736";
 let s2 = "900201";
 const multi = new Solution();
 console.log(multi.multiplyStrings(s1, s2));