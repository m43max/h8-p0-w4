function cariModus(arr) {
    var group = [[arr[0]]]
    for(var i=1; i<arr.length; i++){
        var flag = 0
        for(var j=0; j<group.length; j++){
            if(arr[i]===group[j][0]){
                flag = 1
                group[j].push(arr[i])    //adds the identical number to the subarray in newarr containing the same number
            }
        }
        if(flag===0){
            group[group.length]=[arr[i]]
        }
    }
    var freq = 1
    var modus
    for(var i=0; i<group.length; i++){
        if(group[i].length>freq){
            freq = group[i].length
            modus = group[i][0]
        }
    }
    if(group.length<=1 || freq===1){
        return -1
    }
    return modus
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1