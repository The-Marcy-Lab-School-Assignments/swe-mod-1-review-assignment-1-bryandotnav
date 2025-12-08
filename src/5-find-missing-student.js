const findMissingStudent = (yesterday, today) => {
  // Your code here
  sortY = yesterday.sort();
  sortT = today.sort()
  for(i = 0; i < sortY.length; i ++) {
    for(k = 0; k < sortT.length; k++) {
      if(sortY[i]!== sortT[i]) {
        return sortY[i]
      }
    }
  }
  return `""`
}

console.log(findMissingStudent(
  ["Maya", "Reuben", "Sarah", "James"],
  ["Maya", "Sarah", "James"]
));
// "Reuben"

console.log(findMissingStudent(
  ["Alex", "Jordan"],
  ["Jordan", "Alex"]
));
// "" (no one missing)
