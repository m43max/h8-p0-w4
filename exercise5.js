function ubahHuruf(kata) {
    var out = ""
    for(var i=0; i<kata.length; i++){
        var a = (kata.charCodeAt(i)-96)%26+97    //becomes next letter in alphabet using ascii code, z will loop to a        
        out += String.fromCharCode(a)    //turns ascii code to back character
    }
    return out
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu