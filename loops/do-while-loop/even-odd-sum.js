let num = 10
let sumE = 0
let sumO = 0
let i = 1
do {
    if (i % 2 == 0) {
        console.log("Even num => ", i);
        sumE = sumE + i
        i++;
    } else {
        console.log("Odd num => ", i);
        sumO = sumO + i;

        i++;
    }
} while (i <= num)
console.log("The sum of Even num => ", sumE);
console.log("The sum of Odd num => ", sumO);