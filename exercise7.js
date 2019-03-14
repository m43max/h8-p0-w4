function urutkanAbjad(str) {
    var out = ""
    for(var i=97; i<123; i++){
        for(var j=0; j<str.length; j++){
            if(str[j].charCodeAt(0)===i || str[j].charCodeAt(0)+32===i){    //if current letter from str is a-z or A-Z
                out += str[j]
            }
        }
    }
    return out
}

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'