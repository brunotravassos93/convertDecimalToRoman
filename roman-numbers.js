function convertToRoman(num) {
   // Números romanos e seus respectivos valores em base decimal   
   var romanToNum = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1
   };
   var roman = "";
   
   // Loop onde o número inserido será processado e convertido para Romano.
   for (var key in romanToNum) {
      console.log(`${key}: ${romanToNum[key]}`)
      while (num >= romanToNum[key]) {
         roman += key;
         num -= romanToNum[key];
      }
   }
   
   return roman;
}


// Digite o número que deseja converter dentro dos parênteses da função converToRoman logo abixo.
console.log(`O número digitado em base decimal é equivalente a ${convertToRoman(1233)} em números romanos.`);