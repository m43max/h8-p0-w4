//rute = ['A', 'B', 'C', 'D', 'E', 'F']

function naikAngkot(arrPenumpang) {
    if(arrPenumpang.length<1) return []
    var trips = []
    for(var i=0; i<arrPenumpang.length; i++){
        trips[i] = {penumpang: arrPenumpang[i][0], naikDari: arrPenumpang[i][1], tujuan: arrPenumpang[i][2], bayar: 0}
        trips[i].bayar = Math.abs(arrPenumpang[i][1].charCodeAt(0)-arrPenumpang[i][2].charCodeAt(0))*2000    //absolute of difference between char code of origin to char code of destination * 2000
    }
    return trips
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]