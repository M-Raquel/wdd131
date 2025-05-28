 arrays.js
const steps = ["one", "two", "three"];

const listTemplate(step) {
  return `<li>${step}</li>`; //the html string made from step
};
const stepsHtml = steps.map(listTemplate);// use map to convert the list from strings to HTML
document.querySelector("#myList").innerHTML = stepsHtml.join();// set the innerHTML

const grades = ['A', 'B', 'A'];

function convertGrades(grade) {
  let score = 0;
  if (grade === 'A') {
    score = 4;
  }
  else if (grade === 'B') {
    score = 3;
  }
  return score;
};

const scores = grades.map(convertGrades); // convert the grades to scores

const pointsTotal = scores.reduce(function (total, score) {
  return total + score;
});
const gpa = pointsTotal / scores.length; // calculate the GPA

