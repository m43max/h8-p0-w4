function highestScore (students) {
    var filter = []
    for(var i=0; i<students.length; i++){
        var flag = 0
        for(var j=0; j<filter.length; j++){
            if(students[i].class===filter[j].class){
                flag = 1
                if(students[i].score>filter[j].score){    //score has to be higher than existing top score in class
                    filter[j] = students[i]
                }
            }
        }
        if(flag===0) filter.push (students[i])
    
    }
    var out = {}
    for(var i=0; i<filter.length; i++){
        out[filter[i].class] = {name: filter[i].name, score: filter[i].score}
    }
    return out
}

// TEST CASE
console.log(highestScore([
{
    name: 'Dimitri',
    score: 90,
    class: 'foxes'
},
{
    name: 'Alexei',
    score: 85,
    class: 'wolves'
},
{
    name: 'Sergei',
    score: 74,
    class: 'foxes'
},
{
    name: 'Anastasia',
    score: 78,
    class: 'wolves'
}]));
// {
//   foxes: { name: 'Dimitri', score: 90 },
//   wolves: { name: 'Alexei', score: 85 }
// }


console.log(highestScore([
{
    name: 'Alexander',
    score: 100,
    class: 'foxes'
},
{
    name: 'Alisa',
    score: 76,
    class: 'wolves'
},
{
    name: 'Vladimir',
    score: 92,
    class: 'foxes'
},
{
    name: 'Albert',
    score: 71,
    class: 'wolves'
},
{
    name: 'Viktor',
    score: 80,
    class: 'tigers'
}]));
// {
//   foxes: { name: 'Alexander', score: 100 },
//   wolves: { name: 'Alisa', score: 76 },
//   tigers: { name: 'Viktor', score: 80 }
// }

console.log(highestScore([])); //{}