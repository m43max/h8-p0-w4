var inventory = [['Sepatu Stacattu', 1500000, 10], ['Baju Zoro', 500000, 2], ['Sweater Uniklooh', 175000, 1]]

function names(arr, product){
    var stock
    var price
    if(product===inventory[0][0])      {stock = inventory[0][2]; price = inventory[0][1]}    //Sepatu Stacattu
    else if(product===inventory[1][0]) {stock = inventory[1][2]; price = inventory[1][1]}    //Baju Zoro
    else if(product===inventory[2][0]) {stock = inventory[2][2]; price = inventory[2][1]}    //Sweater Uniklooh
    var out = [[],0,0]
    for(var i=0; i<arr.length; i++){
        if(arr[i].product === product && stock - arr[i].amount>=0){
            out[0].push(arr[i].name)
            stock -= arr[i].amount    //decrease remaining stock
            out[2] += arr[i].amount    //increase number of units sold
        }
    }
    out[1] = stock    //leftOver
    out[2] *= price    //returns totalProfit (AKA revenue)
    return out
}

function countProfit(shoppers) {
    if(shoppers.length<1) return []
    var fshirt = names(shoppers, "Sepatu Stacattu")
    var fshoes = names(shoppers, "Baju Zoro")
    var fsweat = names(shoppers, "Sweater Uniklooh")
    return [
        {product: "Sepatu Stacattu",  shoppers: fshirt[0], leftOver: fshirt[1], totalProfit: fshirt[2]},
        {product: "Baju Zoro",        shoppers: fshoes[0], leftOver: fshoes[1], totalProfit: fshoes[2],},
        {product: "Sweater Uniklooh", shoppers: fsweat[0], leftOver: fsweat[1], totalProfit: fsweat[2]}
    ]
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