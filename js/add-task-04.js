// 1)Напишите ф-цию которая будет создавать массив машин(оъектов).
// 2)Как только длина массива достигает 5 - масив очищается а обьекты 
// передаються в глобальный массив всех машин.
// 3)Добавте несколько методов: скидка на машину, добавление года к названию.

'use strict';

let garage = [];

// const car = () => { 
//   let i = 0;

//   const add = () => { 
//     i += 1;
//     console.log(i);
//   }
//   return { add };
// }

// const foo = car(); // return object (function) add
// console.log('foo :>> ', foo);
// const next = car(); // another copy and another 'i' inside 

// foo.add(5);
// next.add(1)
// foo.add(3);

const car = () => {
  const cars = [];

  const addCar = car => {
    cars.push(car);
    if (cars.length === 5) { 
      garage = [...garage, ...cars.splice(0)]; //splice returns deleted items and clears 'cars'
    }
  }

  const showCars = () => console.log('cars :>> ', cars);

  return addCar;
}

const audi = car(); //return function (object)
audi.addCar({
  name: 'Audi',
  model: 'Q7',
})
audi.showCars();
console.log('garage :>> ', garage);

//объект с функциями всегда с одними и теми же значениями
// а функция с функциями используется как шаблон (прототип)
