function getGrades(score) {
  if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "C";
  } else {
    return "F";
  }
}

console.log(getGrades(90));
console.log(getGrades(80));
console.log(getGrades(70));
console.log(getGrades(60));
console.log(getGrades(59));
