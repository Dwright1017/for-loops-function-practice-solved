// EXERCISE 11
// Return an array of withdrawal sums of each bank account
// Array example: bankAccounts in /data/data.js
// getAllWithdrawals(bankAccounts) => [3432, 43242.34, 23432]

export function getAllWithdrawals(array) {
  // Your code goes here...
  const withdrawalSums = [];

  for (let person of array) {
    let sum = 0;
    if (person.withdrawals) {
      for (let withdrawal of person.withdrawals) {
        sum += withdrawal
      }
    }

    withdrawalSums.push(sum);
  }
  return withdrawalSums;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-11"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
