let i = 1,
    num = 6,
    sum = 1
while (i <= num) {
    sum = sum * i
    console.log(i, "*");
    i++
}

console.log("factorial of ", num, " is =>", sum);