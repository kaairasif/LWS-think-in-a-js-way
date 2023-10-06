// Usage of curry functions
// ==============================================================


function discount(disc) {
    return (price) => {
        return price - price * disc
    }
}

let tenPercentDiscount = discount(0.1) // partial application 
let tweentyPercentDiscount = discount(0.2)
let fiftyPercentDiscount = discount(0.5)

let customer1D = tenPercentDiscount(600)
let customer2D = tenPercentDiscount(700)
let customer3D = tenPercentDiscount(800)
let customer4D = tweentyPercentDiscount(1200)

let customer5D = fiftyPercentDiscount(5000)


console.log(customer1D)
console.log(customer2D)
console.log(customer3D)
console.log(customer4D)


console.log(customer5D)



// Manual curry converter
// ==============================================================

// function curry(func) {
//     return function curried(...args) {
//         if( args.length >= func.length ) {
//            return func.apply(this, args)     
//         } else {
//             return function (...args2) {
//                 return curried.apply(this, args.concat(args2))
//             }
//         }
//     }
// }

// function sum(a, b, c) {
//     return a + b + c
// }

// let curriedSum = curry(sum)

// console.log(curriedSum(1, 2, 3))
// console.log(curriedSum(1) (2, 3))
// console.log(curriedSum(1 ,2)(3))
// console.log(curriedSum(1)(2)(3))



// Lodash curry converter
// ==============================================================

// function sum(a, b, c) {
//     return a + b + c
// }

// let curriedSum = _.curry(sum)

// console.log(curriedSum(1, 2, 3))
// console.log(curriedSum(1) (2, 3))
// console.log(curriedSum(1 ,2)(3))
// console.log(curriedSum(1)(2)(3))


// Usage of curry function : Log functionalities
// ==============================================================

// function log(date, importance, message){
//     console.log(`${date.getHours()}hr : ${date.getMinutes()}min : ${date.getSeconds() }sec :${importance} : ${message}`)
// }

// let curriedLog = _.curry(log)

// curriedLog(new Date(), 'DEBUG', 'Some debug')
// curriedLog(new Date())('DEBUG')('Some debug')



// let logNow = curriedLog(new Date())

// logNow("Info", "Info message")

// logNow("Some other log", "Some other Info message")