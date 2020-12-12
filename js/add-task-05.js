// - Вывести массив имён учёных/изобретателей
// - Вывести массив тех кто родился в 19-ом веке
// - Вывести массив тех, кто прожил больше 50-ти лет
// - Найти того, кто работал с радиацией и добавить ей свойство "замужем", 
// в значение запистаь имя мужа
// - Вывести фамилии тех, в чьём имени есть буква "е"
// - Получить массив объектов отсортированный по имени (по алфавиту).
// - Найти сумму лет жизни всех учёных

'use strict';

const inventors = [{
    first: 'Albert',
    last: 'Einstein',
    year: 1879,
    passed: 1955
  },
  {
    first: 'Isaac',
    last: 'Newton',
    year: 1643,
    passed: 1727
  },
  {
    first: 'Galileo',
    last: 'Galilei',
    year: 1564,
    passed: 1642
  },
  {
    first: 'Marie',
    last: 'Curie',
    year: 1867,
    passed: 1934
  },
  {
    first: 'Johannes',
    last: 'Kepler',
    year: 1571,
    passed: 1630
  },
  {
    first: 'Nicolaus',
    last: 'Copernicus',
    year: 1473,
    passed: 1543
  },
  {
    first: 'Max',
    last: 'Planck',
    year: 1858,
    passed: 1947
  },
  {
    first: 'Katherine',
    last: 'Blodgett',
    year: 1898,
    passed: 1979
  },
  {
    first: 'Ada',
    last: 'Lovelace',
    year: 1815,
    passed: 1852
  },
  {
    first: 'Sarah E.',
    last: 'Goode',
    year: 1855,
    passed: 1905
  },
  {
    first: 'Lise',
    last: 'Meitner',
    year: 1878,
    passed: 1968
  },
  {
    first: 'Hanna',
    last: 'Hammarström',
    year: 1829,
    passed: 1909
  }
];
// Вывести массив имён учёных/изобретателей
const logArray = (arr) => { 
  let nameArr = [];
  // let name = '';
  for (const item of arr) {
    // name += `${item.first} ${item.last} \n`; //записывает все имена в одну строку с переносом
     name = `${item.first} ${item.last}`;
    nameArr.push(name); 
  }
  // return name;
  return nameArr;
}

// console.log(logArray(inventors));

// Вывести массив тех кто родился в 19-ом веке
const berthDate = (arr) => {
  let newArr = [];
  // console.table(arr);
  for (const item of arr) { 
    if (item.year <= 1900)
      newArr.push(item);
  }
  return newArr;
}
 
// console.table(berthDate(inventors));

// Вывести массив тех, кто прожил больше 50-ти лет
const aged = function (arr) { 
   let agedArr = [];
  for (const item of arr) { 
    if (item.passed - item.year > 50){
      // console.log(item);
      item.age = item.passed - item.year; 
      agedArr.push(item);
    }
  }
  return agedArr;
}

// console.table(aged(inventors));

// Вывести фамилии тех, в чьём имени есть буква "е"
const letterCheck = function (arr, letter) { 
   let letterArr = [];
  for (const item of arr) { 
    if (item.first.includes(letter)){
      // console.log(item);
     
      letterArr.push(item);
    }
  }
  return letterArr;
}

// console.table(letterCheck(inventors, 'e'));

// - Получить массив объектов отсортированный по имени (по алфавиту).
const sortArr = function (arr) { 
  let sortedArr = [...arr];
  for (let i = sortedArr.length - 1; i > 0; i -= 1) { 
    let wasSwap = false;
    for (let j = 0; j < i; j += 1) { 
      if (sortedArr[j].first > sortedArr[j + 1].first) {
        [sortedArr[j], sortedArr[j + 1]] = [sortedArr[j + 1], sortedArr[j]];
        wasSwap = true;
      }
    }
    if (!wasSwap) break;
  }
  return sortedArr;
}

// console.table(sortArr(inventors));

// - Найти сумму лет жизни всех учёных

const yearsCount = arr => { 
   let yearsTotal=0;
  for (const item of arr) { 
    yearsTotal += item.passed - item.year;
  }
  return yearsTotal;
}

console.log('Total :>> ', yearsCount(inventors));