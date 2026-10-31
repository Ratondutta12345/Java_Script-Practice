
// map() is used when you want to create a new array by changing every element of the original array.
// let numbers = [5, 10, 15, 20]

// let double = numbers.map(function(number){
//     return number*2
// })

// console.log(double)


// filter() is used when you want to select specific elements from an array based on a condition.
// let numbers = [5, 12, 18, 7, 25, 30, 9]

// let greaterNumber = numbers.filter(function(num) {
//     if(num > 10){
//         return num
//     }
// })

// console.log(greaterNumber)


// find() is used when you want to find the first element that matches a condition.
let numbers = [18,20,22]

let same = numbers.find(function(num){
    return num === 18
})

console.log(same)