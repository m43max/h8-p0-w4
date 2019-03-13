function changeMe(arr) {
    var people = {}
    for(var i=0; i<arr.length; i++){
        var entry = i+1 + ". " + arr[i][0] + " " + arr[i][1]
        console.log(entry)

        people[i] = {}
        people[i].firstName = arr[i][0]
        people[i].lastName = arr[i][1]
        people[i].gender = arr[i][2]
        if(arr[i][3]>2019 || arr[i][3]===undefined){
            people[i].age = "Invalid Birth Year"
        }
        else people[i].age = arr[i][3]
        
        console.log(people[i])
    }
}

// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]);
// 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 37 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""