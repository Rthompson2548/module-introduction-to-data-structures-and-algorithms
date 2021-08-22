/**
 The cable problem
 Implement algorithm 1 here
*/

// accepts:
// currentLength - an integer between 1 and 1,000,000,000
// requireLength - an integer between 1 and 1,000,000,000
// saleLength - an integer between 1 and 1,000,000,000

// declare a variable named count and set it equal to 0
// declare a variable named i and set it equal to currentLength
// while i is less than requiredLength do
// Add saleLength to i
// increment count
// return count

function cable1(currentLength, requireLength, saleLength) {
  let count = 0;
  for (let i = currentLength; i < requireLength; i += saleLength) {
    count += 1;
  }
  return count;
}

/**
 The cable problem
 Implement algorithm 2 here
*/

// accepts: currentLength - an integer between 1 and 1,000,000,000
// requireLength - an integer between 1 and 1,000,000,000
// saleLength - an integer between 1 and 1,000,000,000

// declare a variable named distance, assign it to the difference betwen requiredLength and currentlength
// declare a variable named total,
// Divide distance by saleLength and round up to the nearest integer, assign this value to total
// return total

function cable2(currentLength, requireLength, saleLength) {
  let distance = requireLength - currentLength;
  let total = Math.ceil(distance / saleLength);

  return total;
}
