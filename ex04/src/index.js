function main(){
    var myDecimal =0.00254;
    var mydecimalE;
    // Only change code below this line
    mydecimalE =  myDecimal.toExponential(2);
    // Only change code above this line
    
   return {
       myDecimal,
       mydecimalE
   }

}
    
console.log(main());   
module.exports = main;