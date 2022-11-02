/* 
Degree Roadmap Pop-Up 
*/
/*
const allQuizBtns = document.querySelectorAll(".quiz-btn");
const quizBtn = document.querySelector(".quiz-btn");
const theForm = document.querySelector(".quiz-1-form-section");
const bigQuizBtn = document.querySelector(".quiz-btn.quiz-form");
const quizContainer = document.querySelector(".quiz-form-container");
const quizFormBackground = document.querySelector(".quiz-form-background");
*/
const roadmapBtn = document.querySelector(".roadmap-btn-background");
const roadmapForm = document.querySelector(".degree-roadmap-section");
const degreeBackground = document.querySelector(".degree-roadmap-background");

roadmapBtn.addEventListener("click", () => {
  roadmapForm.classList.remove("hidden");
  console.log("clicked");
});

roadmapForm.addEventListener("click", (e) => {
  console.log(e);
  if (e.target == degreeBackground) {
    console.log("container");
    roadmapForm.classList.add("hidden");
  } else {
  }
});
