// Реализуйте функцию applyTransactions(wallet) и типы Transaction, 
// Wallet. Wallet содержит список транзакций в виде массива элементов типа 
// Transaction и числовой баланс. Transaction содержит метод apply, который принимает 
// баланс и возвращает новый баланс.
// Функция applyTransactions(wallet) должна принимать аргумент типа Wallet и возвращать 
// баланс после применения всего списка транзакций. 
// В случае ошибки в одной из транзакций должно вернуться изначальный баланс, 
// и не продолжать применять транзакции.

type Transaction = {
  apply: (amount: number) => number
}

type Wallet = {
  transactions: Array<Transaction>,
  balance: number
}

const applyTransactions = (wallet: Wallet) => {
  let mybalance = wallet.balance;

  for (const value of wallet.transactions) {
    try {
          mybalance = value.apply(mybalance);
      } catch (error) {
          return wallet.balance;
    }
  }

  return mybalance;
}

const wallet: Wallet = {
  balance: 100,
  transactions: [
    {
      apply: (amount: number) => amount + 10,
    },
    {
      apply: (amount: number) => amount - 20,
    },
    {
      apply: (amount: number) => amount + 30,
    },
  ],
};

console.log(applyTransactions(wallet))

// const wallet2: Wallet = {
//   balance: 10,
//   transactions: [
//     {
//       apply: (amount: number) => amount + 10,
//     },
//     {
//       apply: () => {
//         throw new Error('Error');
//       },
//     },
//     {
//       apply: (amount: number) => amount + 30,
//     },
//   ],
// };


// const wallet: Wallet = {
//   transactions: [
//     {
//       apply: (amount) => amount + 1,
//     },
//   ],
//   balance: 0
// }