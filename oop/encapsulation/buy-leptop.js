class laptop {#
    brand;#
    ramGb;#
    price;
    setDetails(brand, ramGb, price) {
        this.#brand = brand;
        this.#ramGb = ramGb;
        this.#price = price;
    }
    getBreand() {
        return `Brand -> ${this.#brand}`;
    }

    getramGb() {
        return `ramGb -> ${this.#ramGb} GB`;
    }
    getprice() {
        return `Price -> ${this.#price}`;
    }
}
const myLaptop = new laptop();
myLaptop.setDetails("dell", 16, 40000);
console.log(myLaptop.getBreand());
console.log(myLaptop.getramGb());
console.log(myLaptop.getprice());