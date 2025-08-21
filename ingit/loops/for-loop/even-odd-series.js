let n = 50
console.log("Evern number series => ");

for (let i = 1; i <= n; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}
console.log("Odd number series => ");

for (let i = 1; i <= n; i++) {

    if (!(i % 2 == 0)) {
        console.log(i);
    }
}