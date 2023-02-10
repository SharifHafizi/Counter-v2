// document.getElementById("count").innerText = 5;

// let count = 0;
// console.log(count);

// let myAge = 25;
// console.log(myAge);
// let a = 7;
// let b = 8;
// let sum = a + b;
// console.log(sum);

// let myage = 25;
// let myDogageratio = 7;
// let dogage = myAge * myDogageratio;
// console.log(dogage);

// let bonusPoints = 50;
// console.log(bonusPoints);
// bonusPoints = bonusPoints + 50;
// console.log(bonusPoints);
// bonusPoints = bonusPoints - 75;
// console.log(bonusPoints);
// bonusPoints = bonusPoints + 45;
// console.log(bonusPoints);

let countEl = document.getElementById("count-el");
console.log(countEl);
let count = 0;
function increment() {
  count = count + 1; //we can write this one like this count+=1
  countEl.innerText = count;
}
let countDown = document.getElementById("count-el");
console.log(countDown);

function decrement() {
  count = count - 1;
  countDown.textContent = count;
}

let saveEl = document.getElementById("save-el");
function save() {
  let countStr = +count + " - ";
  saveEl.textContent += countStr;
  console.log(count);
  countEl.textContent = 0;
  count = 0;
}
