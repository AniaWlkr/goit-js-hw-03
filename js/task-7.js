// Напиши скрипт управления личным кабинетом интернет банка. 
// Есть объект account в котором необходимо реализовать методы для работы с балансом 
// и историей транзакций.

/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};
let transactionCount=0;
/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

const account = {
  // Текущий баланс счета
  balance: 0,

  // История транзакций
  transactions: [],

  /*
   * Метод создает и возвращает объект транзакции.
   * Принимает сумму и тип транзакции.
   */
  createTransaction(amount, type) {
    return {
      id: transactionCount += 1,
      type,
      amount,
    }
  },

  /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   */
  deposit(amount) {
    if (typeof amount !== 'number' || amount <= 0) { 
      console.log('Проверьте правильность введенной информации');
      return;
    }
    const transaction = this.createTransaction(amount, Transaction.DEPOSIT);
    this.transactions.push(transaction);
    this.balance += amount;
  },
  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций.
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */
  withdraw(amount) {
    if (typeof amount !== 'number' || amount <= 0) { 
      console.log('Проверьте правильность введенной информации');
      return;
    }
    if (amount > this.balance) { 
      console.log('Снятие такой суммы не возможно, недостаточно средств на счету');
      return;
    }
    const transaction = this.createTransaction(amount, Transaction.WITHDRAW);
    this.transactions.push(transaction);
    this.balance -= amount;
  },

  /*
   * Метод возвращает текущий баланс
   */
  getBalance() {
    return this.balance;
  },

  /*
   * Метод ищет и возвращает объект транзации по id
   */
  getTransactionDetails(id) {
    for (const transaction of this.transactions) { 
      if (transaction.id === id)
        return transaction;
    }
    return null;
  },

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {
    let total = 0;
    for (const transaction of this.transactions) { 
      if (transaction.type === type)
        total += transaction.amount;
    }
    return total;
  },
};

console.log('Balance:',account.getBalance());
account.deposit(500);
account.deposit(700);
console.log('Balance:',account.getBalance()); //1200
account.withdraw(1300); //error
account.withdraw(300);
console.log('Balance:',account.getBalance());//900
account.deposit(100);
console.log('Deposits:',account.getTransactionTotal('deposit')); //1300
console.log('Withdrawals:',account.getTransactionTotal('withdraw')); //300
console.log('Transaction details', account.getTransactionDetails(3));