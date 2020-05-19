// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

function smallestMult(n) {
  // setup state
  let inc = 2;
  let step = 2;
  let smallestNum = 2;
  //LEt's  loop over all numbers until we find the right one.
  while (smallestNum <= Number.MAX_SAFE_INTEGER) {
    // start from our step value
    for (let i = 2; i <= n; i++) {
      // check if its divisible
      const divisible = smallestNum % i === 0;
      // if it is not divisible, skip to the next number
      if (!divisible) {
        break;
      }
      // if it is divisible, increase our step to be our next num
      if (i === inc) {
        step = smallestNum;
        // increase our global incrementer by 1
        inc++;
      }
      // check if i is equal to our last digit
      if (i === n) {
        // if it is, congrats! We have our smallestNum
        return smallestNum;
      }
    }
    smallestNum += step;
  }
}
smallestMult(20);
