function digitPerkalianMinimum(angka) {
    var digits = String(angka).length+1    //because all numbers have themself and 1 as factors
    for(var i=1; i<=angka; i++){
        if(angka%i===0){
            var factorpair = String(i).length + String(angka/i).length
            if(factorpair<digits){
                digits = factorpair
            }
        }
    }
    return digits
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2