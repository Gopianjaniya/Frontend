class bank {#
    amount = 0;

    checkBal() {
        return `Available Balance ${this.#amount}`;
    }
    depositBal(deposit) {
        this.#amount = this.#amount + deposit;
        return `Deposit success ${deposit}\nTotal Balance is ${this.#amount}`;
    }
    withdrowBal(withdrow) {
        this.#amount = this.#amount - withdrow;
        if (this.#amount < 0) {
            this.#amount = this.#amount + withdrow;
            return `Insufficient Balance [${withdrow}]`;
        } else {
            return `Withdrow success ${withdrow}\nTotal amount is ${this.#amount}`;
        }
    }
}
const b = new bank();
console.log(b.checkBal());
console.log("------------------------------------------");
console.log(b.depositBal(600));
console.log("------------------------------------------");
console.log(b.depositBal(600));
console.log("------------------------------------------");
console.log(b.withdrowBal(1000));
console.log(b.checkBal());

console.log("------------------------------------------");
console.log(b.depositBal(600));
console.log("------------------------------------------");
console.log(b.withdrowBal(900));
console.log(b.checkBal());

console.log("------------------------------------------");
console.log(b.depositBal(600));
console.log("------------------------------------------");
console.log(b.withdrowBal(400));
console.log(b.checkBal());

console.log("------------------------------------------");

console.log(b.withdrowBal(4000));

console.log(b.checkBal());