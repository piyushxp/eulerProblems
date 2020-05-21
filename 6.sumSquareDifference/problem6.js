// The sum of the squares of the first ten natural numbers is,

// 12+22+...+102=385
// The square of the sum of the first ten natural numbers is,

// (1+2+...+10)2=552=3025
// Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025−385=2640.

// Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.

function difference(limit) {
  function squareSum(limit) {
    var i,
      s = 1,
      e = Math.log(limit) / Math.LN10;
    // special case: limit is a power of 10
    if (e - (e << 0) === 0) {
      s = limit * (limit >> 1) + (limit >> 1);
    } else {
      for (i = 2; i <= limit; i += 1) {
        s += i;
      }
    }
    return s * s;
  }

  function sumSquare(limit) {
    var i,
      s = 1;
    for (i = 2; i <= limit; i += 1) {
      s += i * i;
    }
    return s;
  }

  return squareSum(limit) - sumSquare(limit);
}

console.log(difference(100));
