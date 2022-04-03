function main(){
    
    var myDecimalE = 2.54e-3;
    var  myDecimal = myDecimalE;

    return {
        myDecimal,
        myDecimalE
}
}
    
console.log(main());
module.exports = main;