let arr = [12, 345, 67, 89, 80, 5, 87]
let rev = []

console.log("array is => ", arr);
console.log("Revers array is => ");


for (let i = arr.length - 1; i >= 0; i--) {

    rev[i] = arr[i];
}
for (let i = arr.length - 1; i >= 0; i--) {
    console.log(rev[i]);

}