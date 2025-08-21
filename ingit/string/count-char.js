let str = "my name is gopilal anjaniya."
let len = str.length
let s = str.split("")
let count = 0
for (let i = 0; i <= len - 1; i++) {
    if (
        s[i] != " " &&
        s[i] !== "." &&
        s[i] != "?" &&
        s[i] != "," &&
        s[i] != "-" &&
        s[i] != "_"
    ) {
        count++;
    }
}
console.log(str);
console.log(count, "Character present in this paragraph");