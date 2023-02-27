'use strict';

function BinarioADecimal(num) {
   let result=0;
   let i=0;
   let  j=num.length-1;
   

   for(i=0;i<num.length; i++){//i 1   1<=3
      result = result +  num[i]*Math.pow(2,j);
      j--;
   }
   console.log(result)
   return result;
}

function DecimalABinario(num) {
      var arr = [];
      for (var i = 0; num > 0; i++){
         arr[i] = num %2;
         num = Math.floor(num/2);
      };
     
      return arr.reverse().join('');
}

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
