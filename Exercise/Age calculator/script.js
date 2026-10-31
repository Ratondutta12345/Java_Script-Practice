const currentYear = new Date().getFullYear()

let yearOfAge = Number(prompt("Enter your Date of Year : "))

function calculateAge(yearOfAge){
    return currentYear - yearOfAge
}

console.log(calculateAge(yearOfAge))