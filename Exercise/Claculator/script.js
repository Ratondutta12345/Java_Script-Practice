let a = Number(prompt("Enter The value of A : "))
let b = Number(prompt("Enter The value of B : "))
let operator = prompt("Enter The Operator : ")

function calculator(a,b,operator){
    if(operator === '+'){
        return a+b
    }else if(operator === '-'){
        return a-b
    }else if(operator === '*'){
        return a*b
    }else if(operator === '/'){
        return a/b
    }else{
        console.log("Enter Valid Operator.")
    }
}

console.log(calculator(a,b,operator))