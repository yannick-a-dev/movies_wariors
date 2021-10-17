const obj1 = {
    a: 1,
    b: 2,
    c: 3
}
const {b} = obj1
console.log(b)

const obj2 = {
    x: 10,
    v: 22,
    z: 33
}

const obj3 = {
    ...obj1,
    ...obj2
}

//console.log(obj3)