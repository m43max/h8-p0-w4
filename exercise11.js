function shoppingTime(memberId = "", money = 0) {
    if(memberId === ""){
        return "Mohon maaf, toko X hanya berlaku untuk member saja"
    }
    if(money < 50000){
        return "Mohon maaf, uang tidak cukup"
    }
    var out = {memberId, money, listPurchased: [], changeMoney: 0}

    var i = money
    while(i>=50000){
        if(i>=1500000){
            i -= 1500000
            out.listPurchased.push("Sepatu Stacattu")
        }
        if(i>=500000){
            i -= 500000
            out.listPurchased.push("Baju Zoro")
        }
        if(i>=250000){
            i -= 250000
            out.listPurchased.push("Baju H&N")
        }
        if(i>=175000){
            i -= 175000
            out.listPurchased.push("Sweater Uniklooh")
        }
        if(i>=50000){
            i -= 50000
            out.listPurchased.push("Casing Handphone")
        }
        break
    }
    out.changeMoney = i
    
    return out
}

// TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2475000));
//{ memberId: '1820RzKrnWn08',
// money: 2475000,
// listPurchased:
//  [ 'Sepatu Stacattu',
//    'Baju Zoro',
//    'Baju H&N',
//    'Sweater Uniklooh',
//    'Casing Handphone' ],
// changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja