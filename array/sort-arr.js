let arr = [12, 34, 23, 5, 3, 2, 55]
console.log("array=>", arr);

for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
            let swap = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = swap;
        }

    }

}

for (let i = 0; i < arr.length; i++) {
    arr[i]
}
console.log("sorted array=> ", arr);