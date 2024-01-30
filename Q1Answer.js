//Q.1
const ArrayOfInterger = [-2, 5, 3,-8, 10, -4];

function sumOfPositivies(arr) {
  let PositiveValues = arr.filter((val) =>  Math.sign(val) === 1);

  return PositiveValues.reduce((total, val) =>  total + val);
}

console.log(sumOfPositivies(ArrayOfInterger));
