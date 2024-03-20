
//An ugly number is a positive integer whose prime factors are limited to 2, 3, and 5.

//Given an integer n, return true if n is an ugly number.

const num = 274;
const isUgly = num => {
   while(num !== 1){
      if(num % 2 === 0){
         num /= 2;
      } else if(num % 3 === 0) {
         num /= 3;
      } else if(num % 5 === 0) {
            num /= 5;
      } else {
         return false;
      };
   };
   return true;
};
console.log(isUgly(num));
console.log(isUgly(60));
console.log(isUgly(140));