function rotata(arr, d) {
    let n = arr.length
    let nArr = []
    let j = 0

    for (let i = d; i <= n; i++) {
        nArr[j++] = arr[i]
        let f = arr[0]
        arr[n] = f

    }
    for (let i = 0; i < n; i++) {
        arr[i] = nArr[i]
    }

}
let arr = [1, 2, 3, 4, 5, 6]
let d = 2
rotata(arr, d)
console.log(arr.join(" "));