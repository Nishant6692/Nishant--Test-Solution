//Q.1
const ArrayOfInterger = [-2, 5, 3, -8, 10, -4];

function sumOfPositivies(arr) {
  let PositiveValues = arr.filter((val) => {
    return Math.sign(val) === 1;
  });

  return PositiveValues.reduce((acc, val) => {
    return acc + val;
  });
}

console.log(sumOfPositivies(ArrayOfInterger));
