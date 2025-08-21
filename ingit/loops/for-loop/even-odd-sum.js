let num = 5
let sumE = 0
let sumO = 0
for (let i = 0; i <= num; i++) {
    if (i % 2 == 0) {
        console.log(i);
        sumE += i
    }
}
console.log("The sum of given even number series =>", sumE);
for (let j = 0; j <= num; j++) {
    if (!(j % 2 == 0)) {
        console.log(j);
        sumO += j
    }
}
console.log("The sum of given odd number series =>", sumO);