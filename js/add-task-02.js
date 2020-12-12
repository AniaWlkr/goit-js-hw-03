// "Увольте" сотрудника, если он неактивен И(!) его зп 
// больше 100
'use strict';

const workers = [
    {name:'Alex', salary: 100, isActive: true },
    {name:'Rita', salary: 180, isActive: false },
    {name:'John', salary: 100, isActive: true },
    {name:'Derek', salary: 200, isActive: false }
]

const deleteWorker = arr => { 
  let deletedWorkers = [];
  // let workers = [];
  for (let i = 0; i < arr.length; i+=1) { 
    if (!(arr[i].isActive) && arr[i].salary > 100) {
      // console.table(arr[i]);
      // console.table(arr.splice(i, 1));
      deletedWorkers = [...deletedWorkers, ...arr.splice(i, 1)];
      // workers = [...arr.splice(i, 1)];
    } 
  }
  // console.table(workers);
  return deletedWorkers;
}

console.table(workers);
console.log('Удаляем работников');
console.table(deleteWorker(workers));
console.log("Оставшиеся в живых :)");
console.table(workers);