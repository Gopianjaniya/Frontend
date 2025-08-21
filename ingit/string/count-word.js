let str = "this is small paregraph."
let s = str.split("")
let count = 1;
for (let i = 0; i <= str.length - 1; i++) {
    if (s[i] == " ") {
        count++
    }
}
console.log(str);
console.log(count, "word present in this paragraph");