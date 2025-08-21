let num = 10,
    i = 0,
    j = 1,
    sumE = 0,
    sumO = 0,
    result = 0;
while (i <= num || j <= num) {
    console.log(i, "+", j, "-");
    sumE = sumE - i
    sumO = sumO + j

    i += 2
    j += 2

}
result = sumE + sumO
console.log("sum is ", result);
// console.log("sum even is ", sumE);
// console.log("sum odd is ", sumO);