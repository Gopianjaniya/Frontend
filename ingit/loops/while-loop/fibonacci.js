let a = 0;
let b = 1;
let i = 0;
let num = 5;
console.log(a);
console.log(b);
while (i <= num) {
    let c = a + b;
    a = b;
    b = c;
    console.log(c);
    i++;
}