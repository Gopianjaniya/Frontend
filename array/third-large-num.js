let arr = [10, 3, 5, 6, 20];
let large = [0];
let s_large = [0];
let t_large = [0];
for (let i = 0; i <= arr.length - 1; i++) {
    if (large < arr[i]) { //1,2,3,4
        t_large = s_large //0,0,0,5,6
        s_large = large //0,0,5,6,10
        large = arr[i] //0,10,10,20
    } else if (s_large < arr[i] && arr[i] != large) {
        t_large = s_large
        s_large = arr[i]
    } else if (t_large < arr[i] && s_large != arr[i] && large != arr[i]) {
        t_large = arr[i];
    }
}
console.log("large number => ", large);
console.log("second large number => ", s_large);
console.log("third large number => ", t_large);