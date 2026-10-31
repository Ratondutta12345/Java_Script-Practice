let products = [
    {
        name : "Laptop",
        price : 20000,
        model : "Asus"
    },
    {
        name : "Mobile",
        price : 15000,
        model : "Realme"
    },
    {
        name : "T.V.",
        price : 25000,
        model : "Samsung"
    },
    {
        name : "Refrigaretor",
        price : 30000,
        model : "Samsung"
    }
]

products.forEach(function(n){
    console.log(n.name)
})

products.filter(function(p){
    if(p.price>15000){
        console.log(`${p.price} : ${p.name}`)
    }
})