
// EXERCISE 20
// Return and array of 2 arrays
// (1 - an array of names that contain "a" in name, 2 - an array of names that don't have 'a' in name)
// separateNamesWithAFromRest(["jon", "alice", "andrew", "mark", "jimmy"]) -> [["alice", "andrew", "mark"], ["jon", "jimmy"]]

export function separateNamesWithAFromRest(array) {
  // Your code goes here...
  var withA = [];
  var withoutA = [];
  
  for (let person of array) {
    const name = person.name;
    let letters = name.split('');
    let hasA = false;
    for (let i=0; i<letters.length; i++) {
      if (letters[i] == 'a') {
        hasA = true;
      } 
    }
    if (hasA == true) {
      withA.push(person.name);
    } else {
      withoutA.push(person.name);
    }
  }
}


// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-20"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
