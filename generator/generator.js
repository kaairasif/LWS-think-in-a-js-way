// Generator syntax
// ======================================================

// function * generator() {
//     yield 1
//     yield 2
//     return "I am finished";
//     yield 3
//     yield 50
// }

// let iterator = generator()

// console.log(iterator.next())
// console.log("Hi1")
// console.log(iterator.next())
// console.log("Hi2")
// console.log(iterator.next())
// console.log("Hi3")
// console.log(iterator.next())
// console.log("Hi4")
// console.log(iterator.next())



// Example 1 - Make Object Iterable - Using iterator
// ======================================================
let object = {
    value1: 1,
    value2: 2,
    value3: 3,
    value4: 4,
}

//console.log(Object.entries(object)) // [ ['value1', 1], ['value2', 2], ['value3', 3], ['value4', 4] ]

// Object.prototype[Symbol.iterator] = function() {
//     const entries = Object.entries(this)
//     let count = entries.length
//     let index = 0

//     return {
//         next() {
//             if(count > 0) {
//                 let result = { done: false, value: entries[index][1] }
//                 count--
//                 index++
//                 return result
//             } else {
//                 return { done: true}
//             }
//         }
//     }
// }

// for (let el of object) {
//     console.log(el)
// }

// console.log([...object])


// Example 1 - Make Object Iterable - Using generator
// ======================================================


// function * generator(obj) {
//     const entries = Object.entries(obj)
//     for(let element of entries) {
//         yield element[1]
//     }
//     return "Test"
// }

// const iterator = generator(object)
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())

// console.log([...iterator])

// for (let el of iterator) {
//     console.dir(el)
// }


// Example 2 - Range function - Using generator
// ======================================================

// function * range(start, end, step) {
//     let current = start
//     while(current <= end ) {
//         yield current
//         console.log("Did you execute?")
//         current += step
//     }
//     return "OK"
// }

// let iterator = range(1, 50, 3)

// console.log(iterator.next())
// console.log(iterator.next())

// for(let el of iterator) {
//     console.log(el)
// }



// Example 3 - Generator Control Flow
// ======================================================

// function * generator(a, b) {
//     let k = yield a + b
//     let m = yield a + b + k

//     yield a + b + k + m
// }

// let gen = generator(10, 20)

// console.log(gen.next())
// console.log(gen.next(50))
// console.log(gen.next(100))



// Example 4 - Async/Await Higher level of Abstraction to Generators
// =========================================================================
const takeOrder = (customer) => {
    return new Promise((resolve) => {
        setTimeout(()=> {
            resolve(`take order for ${customer}`)
           }, 1000)
    })   
}

const processOrder = (customer) => {
    return new Promise((resolve) => {
        setTimeout(()=> {
            resolve(`order processed for ${customer}`)       
           }, 1000)
    })
}

const completeOrder = (customer) => {
    return new Promise((resolve) => {
        setTimeout(()=> {
            resolve(`completed order for ${customer}`)   
           }, 1000)
    }) 
}

async function * solution(customer) {
    yield await takeOrder(customer)
    yield await processOrder(customer)
    yield await completeOrder(customer)
}

let gen = solution("Rahim")
const promises = [gen.next(), gen.next(), gen.next()]

// ( async function() {
//     for await ( let el of promises) {
//         console.log(el)
//     }
// })();

 async function genLoop() {
    for await ( let el of promises) {
        console.log(el.value)
    }
};

genLoop()



// gen.next().then(({value}) => console.log(value))
// gen.next().then(({value}) => console.log(value))
// gen.next().then(({value}) => console.log(value))


// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())

// const arr = [80, 50, 40, 60, 4, 200, -1, -80, 700]

// function maxNumber(arr) {
//     // let m
//     // for(let i=0; i < arr.length; i++) {
//     //     m = arr[i] > arr[i+1] ? arr[i] : null
//     // }
//     // return m
//     let maxNum = Math.max(...arr)
//     let minNum = Math.min(...arr)
//     return { maxNum, minNum }

//     // return arr.reduce((p, v) => {
//     //     return ( p > v ? p : v );
//     //   });
// }

// console.log(maxNumber(arr))













