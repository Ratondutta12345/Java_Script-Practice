let range = Number(prompt("Enter the range of cheking the even odd number : "))

function calculateEvenOdd(range){
    for(let i=0;i<=range;i++){
    if(i%2===0){
        console.log(i)
    }
}
}

console.log(calculateEvenOdd(range))