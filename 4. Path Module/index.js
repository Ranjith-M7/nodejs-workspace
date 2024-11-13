import path from "path";

// console.log(path.basename("c://nodejs//app.html"));
// console.log(path.basename("c://nodejs//app.js", ".js"));
// console.log(path.dirname("c:\\nodejs\\courses\\app.js"));
// console.log(path.extname("c:\\nodejs\\courses\\app.js"));
// console.log(path.join("c:", "huxn", "courses", "redux-toolkit"));

// Go up a level
// console.log(path.join("c:", "huxn", "courses", "redux-toolkit", ".."));
// console.log(path.join("c:", "huxn", "courses", "redux-toolkit", "..", ".."));

// console.log(path.normalize("courses\\redux\\store\\..//features"));

console.log(path.parse("c:\\nodejs\\app.js"));
console.log(path.parse("c:\\nodejs\\app.js").base);
console.log(path.parse("c:\\nodejs\\app.js").name);
console.log(path.parse("c:\\nodejs\\app.js").ext);
console.log(path.parse("c:\\nodejs\\app.js").dir);
console.log(path.parse("c:\\nodejs\\app.js").root);
