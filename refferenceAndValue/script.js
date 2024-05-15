// let a = ["Sakib", "Tamim"]
// a.push("Mahmudullah")
// let b = a

// let person = { name: 'Sakib', age: 35 }
// let player = person
// player.name = "x"
// person = {}
// console.log("Person  :", person)
// console.log("Player :", player)
// console.log(b)

// copy immutably
// ==========================================================================

// let language = {
//     name: "JavaScript",
//     estd: "1995",
//     libraries: ["React", "Vue", "jQuery"]
// }

// // Immutably copy
// // let language2 = {...language}
// let language2 = _.cloneDeep(language)

// // Change / Mutation
// language.libraries.push("Angular");

// console.log(language)
// console.log(language2)

// pass by refference/value

//value
// let a = 1
// refference
let a = {
    num: 1
}
let change = (val) => {
    val.num = 5
}

change(a)
console.log(a)