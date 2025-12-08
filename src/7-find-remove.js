/* 
Analyze the following code. Explain what happens when the function is called. Then, identify the bug and fix it.

<Your explanation goes here>
the argument passed for target is "grape" which doesnt exist in the "arr" array
indexOf will return -1 and remove the last element
you will need to add a guard clause for these situations
*/
const findAndRemove = (arr, target) => {
  const index = arr.indexOf(target);
  if(index !== -1){
  arr.splice(index, 1);
  }
  return arr;
}

const items = ["apple", "banana", "orange"];
findAndRemove(items, "grape");
console.log(items); // This should print ["apple", "banana", "orange"]
