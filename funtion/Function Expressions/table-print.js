const name = function(num) {
    console.log("table is = ", num);

    for (let i = 1; i <= 10; i++) {
        console.log(num, "X", i, "=", num * i);
    }
}
name(3)
console.log("-------------------------------------");
name(5);