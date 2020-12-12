// Напишите функцию sum, которая работает таким образом: 
// sum(a)(b) = a + b.
// Да, именно таким образом, используя двойные круглые скобки (не опечатка).
// Например:
// sum(1)(2) = 3
// sum(5)(-1) = 4
'use strict';

const sum = a => { 
  return (b) => { 
    return a + b;
  }
}

// const sum = a => { 
//   return function (b) { 
//     return a + b;
//   }
// }

// const sum = a => { 
//   const sum2 = b => { 
//     return a + b;
//   }
//  returm sum2;
// }

//анонимная функция - у которой нет имени

console.log('sum 2+3=', sum(2)(3));

console.log(sum);
console.log(sum(1));
console.log(sum(1)(2));
