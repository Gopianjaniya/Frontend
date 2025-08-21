let num = 10
let a = 0,
    b = 1
console.log("Fibonacci seires =>");

console.log(a);
console.log(b);

for (let i = 2; i <= num; i++) {
    let c = a + b;
    a = b;
    b = c;

    console.log(c);
}