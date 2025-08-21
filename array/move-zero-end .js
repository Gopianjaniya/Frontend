let arr = [1, 2, 0, 3, 4, 0, 0, 5, 6]
let len = arr.length
let newarr = []
let j = 0
for (let i = 0; i < len; i++) {
    if (arr[i] != 0) {
        newarr[j++] = arr[i]
    }
}
while (j < len) {
    newarr[j++] = 0

}
for (let i = 0; i < len; i++) {
    arr[i] = newarr[i]
    console.log(arr[i]);

}