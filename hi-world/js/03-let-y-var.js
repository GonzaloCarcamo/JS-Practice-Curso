'use strict'

//Example VAR

var number = 40;
console.log(number) //debe ser 40

if (true){
    var number = 50; 
    console.log(number) //debe ser 50
}
    
console.log(number) //debe ser 50

//Example LET

var text = 'texto uno';
console.log(number) //'texto uno'

if (true){
    let number = 'texto dos'; 
    console.log(number) //'texto dos'
}
    
console.log(number) //debe 'texto uno'