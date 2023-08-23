"use strict";

//Function to create a random number.
const btn = document.querySelector(".btn");
let randomNum = () => {
  return Math.floor(Math.random() * 256);
};

//Function to create a random color.
let changeColor = () => {
  const randomInt = (min, max) =>
    Math.floor(Math.random() * (max - min + 1) + min);
  const randomColor = () =>
    `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;
  console.log(randomColor(0, 255));
  document.body.style.backgroundColor = randomColor(0, 255);
};
btn.addEventListener("click", changeColor);

const myText = document.querySelector(".textArea");
const result = document.querySelector(".textLimit");
const limit = 200;
result.textContent = 0 + "/" + limit;

//Function to set the text limit.
const textLimitCounter = function () {
  const textLength = myText.value.length;
  result.textContent = textLength + "/" + limit;
  if (textLength > limit) {
    myText.style.borderColor = "rgba(21, 192, 239, 0.885)";
    result.style.color = " rgba(21, 192, 239, 0.885)";
  } else {
    myText.style.borderColor = "#fff";
    result.style.color = "#fff";
  }
};

myText.addEventListener("input", textLimitCounter);

//Function to count only letters.
const btnLetters = document.querySelector(".btnSection1");
btnLetters.addEventListener("click", function (e) {
  e.preventDefault(); // prevents the form from auto submitting
  const textInput = document.querySelector(".textArea").value;
  console.log(textInput);
  let regex = /[^a-z]/gi;
  console.log(textInput.replace(/[^a-z]/gi, "").length);
  const span = document.querySelector(".countOfNumber");
  span.innerHTML = textInput.replace(/[^a-z]/gi, "").length;
});

//Function to count only words.
const btnWords = document.querySelector(".btnSection2");
btnWords.addEventListener("click", function (e) {
  e.preventDefault();
  const textInput = document.querySelector(".textArea").value;
  const arr_old = textInput.replace(/[0-9]/g, "");
  const arr = arr_old.replace(/[&\/\\#,+()$~%.'":*?<>{};]/g, "");
  const arr_new = arr.split(" ");
  console.log(arr_new.filter((word) => word !== "").length);
  const span = document.querySelector(".countOfWords");
  span.innerHTML = arr_new.filter((word) => word !== "").length;
});

//Function to count only sentences.
const btnSentences = document.querySelector(".btnSection3");
btnSentences.addEventListener("click", function (e) {
  e.preventDefault();
  const textInput = document.querySelector(".textArea").value;
  const stop = /[.!?]/;
  const sentence = textInput.split(stop);
  console.log(sentence.length - 1);
  const span = document.querySelector(".countOfSentences");
  span.innerHTML = sentence.length - 1;
});

// Function to count only numbers.
const btnNumbers = document.querySelector(".btnSection4");
btnNumbers.addEventListener("click", function (e) {
  e.preventDefault();
  const textInput = document.querySelector(".textArea").value;
  const numOfArr = textInput.match(/\d+/g);
  const numOutput = numOfArr.join("").length;
  const span = document.querySelector(".countOfNumbers");
  span.innerHTML = numOutput;
});

//Function to reset all values back to 0.
const resetBtn = document.querySelector(".resetBtn");
resetBtn.addEventListener("click", function (e) {
  document.querySelector(".textArea").value = 0;
  document.querySelector(".textLimit").value = 0;
  document.querySelector(".countOfNumbers").value = 0;
});
