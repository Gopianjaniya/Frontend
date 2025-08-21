let num = 2
let sum = 0
let x = 2
for (let i = 1; i <= num; i++) {
    console.log("1 /", x, "^", i);
    sum = sum + (1 + x * x)

}
for (let j = 1; j <= num; j++) {
    x = x * x
}
console.log(x);