let num = [23, 44, 772, 34, 98, 10]
let max = num[0]
let min = num[0]
console.log("Array => ", num);

for (let i = 0; i <= num.length; i++) {
    if (max < num[i + 1]) {
        max = num[i + 1]
    }
}
for (let i = 0; i <= num.length; i++) {
    if (min > num[i + 1]) {
        min = num[i + 1];
    }
}

console.log("Maximun element is => ", max);
console.log("Minimum  element is => ", min);