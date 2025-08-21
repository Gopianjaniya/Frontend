let n = 5
for (let i = 1; i <= n; i++) {
    let line = ""
    for (let j = 1; j <= n - i; j++) {
        line = line + " "
    }
    for (let k = 1; k <= i; k++) {
        line = line + "*"
    }
    console.log(line)
}