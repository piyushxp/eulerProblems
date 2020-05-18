// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

// Find the largest palindrome made from the product of two 3-digit numbers.

function largestPalindromeProduct(digit) {
  // We'll initialize "result" with a value, as we'll be using it later on
  var result = 0;
  var a;
  var b;
  if (digit == 2) {
    a = 99;
    b = 99;
  } else {
    a = 999;
    b = 999;
  }

  for (var i = 1; i <= a; i++) {
    for (var y = 1; y <= b; y++) {
      var calc = i * y;
      var calcString = calc.toString();
      var calcStringReverse = calcString.split('').reverse().join('');
      // This is the fundamental change necessary to get it working as intended
      if (calcString === calcStringReverse && calc > result) {
        result = calc;
      }
    }
  }
  return result;
}

console.log(largestPalindromeProduct(9009));
