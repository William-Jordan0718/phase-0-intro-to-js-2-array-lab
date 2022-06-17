const cats = ["Milo", "Otis", "Garfield"]

console.log(cats)

function destructivelyAppendCat(name) {
    cats.push(name)
}
console.log(cats)

function destructivelyPrependCat(name) {
    cats.unshift(name)
}
console.log(cats)

function destructivelyRemoveLastCat() {
    cats.pop(-1)
}
console.log(cats)

function destructivelyRemoveFirstCat() {
    cats.shift(0)
}
console.log(cats)

function appendCat(name) {
    return [...cats, name]
}
console.log(cats)

function prependCat(name) {
    return [name, ...cats]
}
console.log(cats)

function removeLastCat() {
    return cats.slice(0, -1)
}
console.log(cats)

function removeFirstCat() {
    return cats.slice(1)
}
console.log(cats)