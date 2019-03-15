function checkAB(num) {
    var posa = []    //shows positions of "a" in input
    var posb = []    //shows positions of "b" in input
    for(var i=0; i<num.length; i++){
        if(num[i]==="a") posa.push(i)
        else if(num[i]==="b") posb.push(i)
    }
    if(posa.length === 0 || posb.length === 0) return false    //either "a" or "b" is not present
    //console.log(posa, posb)
    for(var i=0; i<posa.length; i++){
        for(var j=0; j<posb.length; j++){
            if(Math.abs(posa[i] - posb[j])===4) return true    //absolute distance between any "a" and any "b" is four
        }
    }
    return false
}

// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false