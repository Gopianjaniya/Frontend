let num = 123
let i = 0

do {
    let digit = num % 10
    digit = digit * digit
    num = num / 10
    i++
} while (i <= 3)
//not solve