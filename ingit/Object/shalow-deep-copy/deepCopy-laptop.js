let laptop = { laptop: "Hp", Screen: "Full-HD", Ram: "16GB" }
console.log("-----Before----");
console.log(laptop);

Object.assign(laptop, { price: 55000 })
console.log("-----After---");

console.log(laptop);