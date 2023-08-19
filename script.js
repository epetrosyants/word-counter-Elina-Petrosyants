"use strict";

// Implementing body background color change on the button click!
// let's generate random color.Random color is just a string,like RGB,and then with a value between 0 and 255.
// lets start with a random number generator from 0 and 255
  const colorBtn = document.querySelector(".btn");
  let randomNum = () =>{
    return Math.floor(Math.random()* 256);
  };
  let changeColor = () => {
    // //and now we use this to create a random color.
    const randomInt = (min,max) => Math.floor(Math.random()*(max-min + 1)+min);
    const randomColor = () => `rgb(${randomInt(0,255)},${randomInt(0,255)},${randomInt(0,255)})`;
    console.log(randomColor(0,255));
       //Set the background  color of the page to the generated color.
   document.body.style.backgroundColor = randomColor(0,255);
};
   colorBtn.addEventListener("click", changeColor );

//Impletementing Smooth Scrolling
  document.querySelector(".nav-links").addEventListener("click",function(e){
  console.log(e.target);
  e.preventDefault();
  //Matching strategy
  if(e.target.classList.contains("nav-link")){
    console.log("LINK");
    const id = e.target.getAttribute("href") //the href attribute now on the element that we click and that is e.target.
    console.log(id); //this prints id #section-1
    const element = document.getElementById(id);
    element.scrollIntoView({behavior: "smooth"});
  }
  });

 // Section1//

//FUNCTION TO COUNT NUMBER OF LETTERS
const countChars = function(str){
  let counter = 0;
  for(let i= 0; i < str.length; i++){
     if (str[i] !== " " && !Number.isInteger(parseInt(str[i]))){
        counter += 1;
      }
      if(str[i] !== "," ){
        counter++
      }
    }
   return counter;
  }

const myForm = document.getElementById("myForm")
myForm.addEventListener("submit",function(e){
  e.preventDefault();// prevents the form from autosubmitting
  // console.log("submitted");
  const textinput = document.getElementById("letters").value
  // console.log(textinput); 
  // console.log(countChars(textinput));
  alert(countChars(textinput));
  })

//section2 
//Implementing text count limit.
 const myText = document.getElementById("my-text");
 const result = document.getElementById("result");
 const limit = 200;
 result.textContent = 0 + "/" + limit;

 const textLimitCounter1 = function(){
  const textLength = myText.value.length;
  console.log(textLength);
  result.textContent = textLength + "/" + limit;
 if(textLength > limit){
  myText.style.borderColor ="rgba(21, 192, 239, 0.885)";
  result.style.color = " rgba(21, 192, 239, 0.885)";
 }else{
  myText.style.borderColor = " rgb(242, 162, 162)";
  result.style.color = "rgb(242, 162, 162)";
 }

}

myText.addEventListener("input", textLimitCounter1);



//FUNCTION TO COUNT THE NUMBER OF WORDS
const countWords = function(str) {
const arr = str.split(" ");
return arr.filter(word => word !== '').length;
// return str.trim().split(/\S+/).length;
}

//Implementing the click on the button and showing the result of the function call on the browser.
const button = document.getElementById("btn");
button.addEventListener("click", (e) => {
const textarea = document.getElementById("my-text");
const wordCount = countWords(textarea.value);
console.log(wordCount);
const span = document.getElementById("words");
span.innerHTML = wordCount;
  }
);

// function newFunction(){
// const element = document.getElementById("myForm1");
// element.reset();
// }

//Section3//

//Implementing text limit.
const myTextS3 = document.getElementById("myText");
const limitNumOfLetters= document.getElementById("limitNumOfLetters");
const limitofLetters = 200;
limitNumOfLetters.textContent = 0 + "/" + limit;

myTextS3.addEventListener("input", function(){
 const textLength = myTextS3.value.length;
 console.log(textLength);
 limitNumOfLetters.textContent = textLength + "/" + limit;
if(textLength > limit){
 myTextS3.style.borderColor ="rgba(21, 192, 239, 0.885)";
 limitNumOfLetters.style.color = " rgba(21, 192, 239, 0.885)";
}else{
 myTextS3.style.borderColor = " rgb(242, 162, 162)";
 limitNumOfLetters.style.color = "rgb(242, 162, 162)";
}

});


// A function which counts the number of sentences in the text.
const countSentences = text => {
  return text.split(/[.?!]/g).filter(Boolean).length;
};

const buttonCountSentences = document.getElementById("btnS3");
buttonCountSentences.addEventListener("click", (e) => {
const textarea = document.getElementById("myText");
const sentencesCount = countSentences(textarea.value);
console.log(sentencesCount);
const span = document.getElementById("sentences");
span.innerHTML = sentencesCount;
  }
);

//Modal Window//
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const openModalWindow = document.getElementById("show-modal");



const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};


openModalWindow.addEventListener("click" ,openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//Section 4//

//Implementing text limit.
const myTextS4 = document.getElementById("myText1");
const limitOfLetters= document.getElementById("limitOfLetters");
const limitLetters = 200;
limitOfLetters.textContent = 0 + "/" + limit;

const textLimitCounter = function(){
  const textLength = myTextS4.value.length;
  console.log(textLength);
  limitOfLetters.textContent = textLength + "/" + limit;
 if(textLength > limit){
  myTextS4.style.borderColor ="rgba(21, 192, 239, 0.885)";
  limitOfLetters.style.color = " rgba(21, 192, 239, 0.885)";
 }else{
  myTextS4.style.borderColor = " rgb(242, 162, 162)";
  limitOfLetters.style.color = "rgb(242, 162, 162)";
 }
 };

myTextS4.addEventListener("input", textLimitCounter)


//Function to count characters including white spaces.
const countCharacters = text => {
  return text.split("").filter(Boolean).length;
};

const buttonCountCharacters = document.getElementById("btnS4");
buttonCountCharacters.addEventListener("click", (e) => {
const textarea = document.getElementById("myText1");
const charactersCount = countCharacters(textarea.value);
console.log(charactersCount);
const span = document.getElementById("characters");
span.innerHTML = charactersCount;
  }
);