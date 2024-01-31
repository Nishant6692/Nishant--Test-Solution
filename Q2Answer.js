const students = [
  { name: "Alice", score: 85 },
  { name: "Bob", score: 60 },
  { name: "Charlie", score: 92 },
  { name: "David", score: 75 },
];

function getHighScorers(arr, threshold) {
  const higherScorerNames = [];
  arr.forEach((objectInArrray, key) => {
    if (objectInArrray.score >= threshold) {
      higherScorerNames.push(objectInArrray.name);
    }
  });
  return higherScorerNames;
}
console.log(getHighScorers(students, 70));
