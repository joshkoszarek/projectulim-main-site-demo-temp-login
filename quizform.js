/* 
Quiz Form Pop-up  
*/
const allQuizBtns = document.querySelectorAll(".quiz-btn");
const quizBtn = document.querySelector(".quiz-btn");
const theForm = document.querySelector(".quiz-1-form-section");
const bigQuizBtn = document.querySelector(".quiz-btn.quiz-form");
const quizContainer = document.querySelector(".quiz-form-container");
const quizFormBackground = document.querySelector(".quiz-form-background");
quizBtn.addEventListener("click", () => {
  theForm.classList.remove("hidden");
  console.log("clicked");
});

theForm.addEventListener("click", (e) => {
  console.log(e);
  if (e.target == quizFormBackground) {
    console.log("container");
    theForm.classList.add("hidden");
  } else {
  }
});
