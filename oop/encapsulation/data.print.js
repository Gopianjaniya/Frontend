class studenrName {#
    name;#
    age;#
    gender;
    infoStu(name, age, gender) {
        this.#name = name;
        this.#age = age;
        this.#gender = gender;

        return `name:${this.#name}\nage:${this.#age}\ngender:${this.#gender}`;
    }
}
const s = new studenrName();
console.log(s.infoStu("gopi", 21, "male"));