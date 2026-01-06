/* 
Analyze the following code. Identify the bug and fix it. Then, below, explain what the bug was using scope terminology.

<Your analysis goes here>
/* the variable was declared in the block scope, not global scope
meaning we cannot use reach the code outside of the if else statement.
*/
let discountRate;
const calculateDiscount = (price) => {
  if (price > 100) {
    discountRate = 0.1;
  } else {
    discountRate = 0.05;
  }

  const discount = price * discountRate;
  return price - discount;
}

console.log(calculateDiscount(150)); // This should print 135
