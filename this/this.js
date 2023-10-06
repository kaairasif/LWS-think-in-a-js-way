let printName = function (v1, v2, v3) {
    console.log(`${this.name} is ${v1}, ${v2} & ${v3}`)
}

const sakib = {
    name: "sakib",
    age: 35
}
const tamim = {
    name: "tamim",
    age: 35
}

let virtue1 = "Handsome";
let virtue2 = "All-rounder";
let virtue3 = "Best player";

let v = [virtue1, virtue2, virtue3]

let newFunc = printName.bind(sakib, virtue1, virtue2, virtue3)
let newFunc2 = printName.bind(tamim, virtue1, virtue2, virtue3)

newFunc()
newFunc2()
