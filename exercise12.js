var inventory = [['Sepatu Stacattu', 1500000, 10], ['Baju Zoro', 500000, 2], ['Sweater Uniklooh', 175000, 1]]

function names(arr, product){
    var stock
    var price
    if(product===inventory[0][0]) {stock = inventory[0][2]; price = inventory[0][1]}
    else if(product===inventory[1][0]) {stock = inventory[1][2]; price = inventory[1][1]}
    else if(product===inventory[2][0]) {stock = inventory[2][2]; price = inventory[2][1]}

    var out = [[],0,0]
    for(var i=0; i<arr.length; i++){
        if(arr[i].product === product && stock - arr[i].amount>=0){
            out[0].push(arr[i].name)
            stock -= arr[i].amount
            out[2] += arr[i].amount    //number of units sold
        }
    }
    out[1] = stock    //leftOver
    out[2] *= price    //totalProfit (AKA revenue)
    return out
}

function countProfit(shoppers) {
    if(shoppers.length<1) return []
    var shoes = {
        product: "Sepatu Stacattu",
        shoppers: names(shoppers, "Sepatu Stacattu")[0],
        leftOver: names(shoppers, "Sepatu Stacattu")[1],
        totalProfit: names(shoppers, "Sepatu Stacattu")[2]
    }
    var shirt = {
        product: "Baju Zoro",
        shoppers: names(shoppers, "Baju Zoro")[0],
        leftOver: names(shoppers, "Baju Zoro")[1],
        totalProfit: names(shoppers, "Baju Zoro")[2]
    }
    var sweater = {
        product: "Sweater Uniklooh",
        shoppers: names(shoppers, "Sweater Uniklooh")[0],
        leftOver: names(shoppers, "Sweater Uniklooh")[1],
        totalProfit: names(shoppers, "Sweater Uniklooh")[2]
    }    
    return [shoes, shirt, sweater]
}

// TEST CASES
console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 2}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 2}]));
//[ { product: 'Sepatu Stacattu',
//   shoppers: [ 'Windi', 'Vanessa' ],
//   leftOver: 5,
//   totalProfit: 7500000 },
// { product: 'Baju Zoro',
//   shoppers: [],
//   leftOver: 2,
//   totalProfit: 0 },
// { product: 'Sweater Uniklooh',
//   shoppers: [],
//   leftOver: 1,
//   totalProfit: 0 } ]

console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 8}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 1}, {name: 'Devi', product: 'Baju Zoro', amount: 1}, {name: 'Lisa', product: 'Baju Zoro', amount: 1}]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [ 'Windi' ],
//     leftOver: 2,
//     totalProfit: 12000000 },
//   { product: 'Baju Zoro',
//     shoppers: [ 'Devi', 'Lisa' ],
//     leftOver: 0,
//     totalProfit: 1000000 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [ 'Rani' ],
//     leftOver: 0,
//     totalProfit: 175000 } ]
console.log(countProfit([{name: 'Windi', product: 'Sepatu Naiki', amount: 5}]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [],
//     leftOver: 10,
//     totalProfit: 0 },
//   { product: 'Baju Zoro',
//     shoppers: [],
//     leftOver: 2,
//     totalProfit: 0 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [],
//     leftOver: 1,
//     totalProfit: 0 } ]
console.log(countProfit([])); //[]