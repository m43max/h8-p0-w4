function cariMedian(arr) {
    var min = arr[0]
    var max = arr[0]
    var sorted = []
    for(var i=1; i<arr.length; i++){
        if(arr[i]<min) min = arr[i]
        if(arr[i]>max) max = arr[i]
    }
    for(var j=min; j<=max; j++){
        for(var i=0; i<arr.length; i++){
            if(arr[i]===j){
                sorted.push(arr[i])
            }
        }
    }    //end of sorting
    if(sorted.length%2===0){
        return (sorted[sorted.length/2-1]+sorted[sorted.length/2])/2
    }
    else{
        return sorted[sorted.length/2-0.5]
    }
}

// TEST CASES  //Remove sorting to get expected results
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 7
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5