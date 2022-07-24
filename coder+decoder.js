
'use strict'

function Encrypt(str) {
    var Encrypted = ' '
    for (var i = 0; i < str.length; i++) {
        var char = str.charCodeAt(i)
        console.log(char);
        char = char + i
        Encrypted+=String.fromCharCode(char)
        console.log(char);
    }
    return Encrypted
}
console.log( Encrypt('hello world') )

function Decrypt(str) {
    var DEcrypted = ' '
    for (var i = 0; i < str.length; i++) {
        var char = str.charCodeAt(i)
        console.log(char);
        char = char - i
        DEcrypted+=String.fromCharCode(char)
        console.log(char);
    }
    return DEcrypted
}
console.log( Decrypt('hfnos%}vzun') );

//functions work seperatly not in nest config EX: Decrypt( Encrypt('hello world'))






