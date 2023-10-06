// (function(){
//     let num1 = 2
//     let num2 = 4

//     function sum() {
//         return function() {
//             return num1 + num2
//         }
//     }
//     var result = sum()
//     console.dir(result)
// })()

let num1 = 2
let num2 = 4

function sum() {
    return function() {
        return num1 + num2
    }
}
var result = sum()
console.dir(result)

