//Задача № 1
"use strict";
let a;
let b;
let c;
function solveEquation(a, b, c) {
  let arr = [];
  a = 1;
  b = 1;
  c = 1;
  let discriminant = b * b - 4 * a * c;
  console.log(discriminant);
  if (discriminant < 0) {
    console.log(arr);
  }  else if (discriminant == 0) {
    let squareRoot = -b / (2 * a);
    arr.push(squareRoot);
    console.log(arr);
  }  else if (discriminant > 0) {
    let squareRoot1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    let squareRoot2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    arr.push(squareRoot1);
    arr.push(squareRoot2);   
    console.log(arr);
  }
  return arr;
}
  solveEquation(a, b, c);



//Задача № 2

let percent = 10;
let contribution = 0;
let amount = 50000;
let countMonths = 12;

function calculateTotalMortgage(percent, contribution, amount, countMonths) {  
  if (isNaN(percent) || isNaN(contribution) || isNaN(amount) || isNaN(countMonths)) {
    let theEnd = "Неверно введено значение. Проверьте данные!"; 
    console.log(theEnd);
  }  else {
    let contiNue = "Посчитаем.";  
    console.log(contiNue);
  }

  let percentPerMonth = percent / 100 / 12;
  console.log(percentPerMonth);
  let amountBody = amount - contribution;
  let root = Math.pow((1 + percentPerMonth), countMonths);
  console.log(root);
  let paymentPerMonth = amountBody * (percentPerMonth + (percentPerMonth / (root - 1)));
  console.log(paymentPerMonth);   
  let summAll = paymentPerMonth * countMonths;
  console.log(summAll);
  console.log(summAll.toFixed(2));
  if (isNaN(summAll)) {
    console.log("Проверьте корректность введенных данных!");
  }  else {
  return summAll;
  }
}
calculateTotalMortgage(percent, contribution, amount, countMonths);