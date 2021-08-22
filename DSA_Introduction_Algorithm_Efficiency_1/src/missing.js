/**
 The missing number problem
 Implement algorithm 1 here
*/

// pseudo code;
    // accepts: A, an array of N-1 numbers
    // declare a variable N and set it eqal to A.length - 1
    // i = 1-N...
    // declare variable found and set it to false
    // declare variable j and set it to 0
    // while found=false and j is greater than the length of A...
    // if i is equal to A[j],
    // set found to true
    // increment j
    // if found is false, return i
    
function missing1(A) {
  let N = A.length + 1;
  for (let i = 0; i <= N; i++) {
    let found = false;
    for (let j = 0; j < A.length && !found; j++) {
      if (i === A[j]) {
        found = true;
      }
    }
    if (!found) {
      return i;
    }
  }
}


/**
The missing number problem
Implement algorithm 2 here
*/

// pseudo code:
    // accepts: A an array of N - 1 numbers
    // declare a variable N and set it equal to the length of A + 1
    // declare a variable fullSum and set it to the
    // sum of numbers from 1 to N inclusive
    // declare a variable sum.
    // Find the sum of all numbers in A and
    // store the sum in the variable sm
    // return the difference between fullSum and sum
    // (i.e. fullSum - sum)

function missing2(A) {
  let N = A.length + 1;
  const fullSum = (N * (N + 1)) / 2;
  let sum = 0;

  for (let i = 0; i < A.length; i++) {
    sum += A[i];
  }
  return (fullSum = sum);
}

module.exports = { missing1, missing2 };
