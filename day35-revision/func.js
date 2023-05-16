
const f = (x, y) => x + y
const g = f.bind(null, 10)

console.info(f, typeof(f))
console.info(g, typeof(g))

console.info(f(10, 7))
console.info(g(7))
