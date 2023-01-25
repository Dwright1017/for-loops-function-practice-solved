
// EXERCISE 14
// The balance is supposed to equal the difference of all deposits and all withdrawals.
// Check every bank account balance and return the array of bank accounts with a wrong balance
// Array example: bankAccounts in /data/data.js
// getClientsWithWrongBalance(bankAccounts) => [{ name: 'Name1', balance: 32, ... }, { name: 'Name2', balance: 3523, ... }]

function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

export function getClientsWithWrongBalance(array) {
  // Your code goes here...
  const WrongBalance = [];
  for (let person of array) {
    if (person.deposits && person.withdrawals) {
      let difference = 0;
      let sumdeposits = 0;
      let sumwithdrawals = 0;
      for (let i = 0; i < person.deposits.length; i++) {
      sumdeposits += person.deposits[i];
      }

      for (let j = 0; j < person.withdrawals.length; j++) {
      sumwithdrawals += person.withdrawals[j];
      }

      difference = sumdeposits - sumwithdrawals;

      if (difference !== person.balance) {
        WrongBalance.push(person);
      } else {
        null;
      }
    }
  }
  return WrongBalance;
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-14"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
