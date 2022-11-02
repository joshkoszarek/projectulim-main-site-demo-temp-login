/* 
-------
Faq 
--------
*/

const toggleMe = document.getElementsByClassName("content-container");

for (i = 0; i < toggleMe.length; i++) {
  toggleMe[i].addEventListener("click", function () {
    this.classList.toggle("active");
  });
}

/* 
-----------
Features Description Accordian
----------
*/

const featureClick = document.getElementsByClassName("feature-container");

for (i = 0; i < featureClick.length; i++) {
  featureClick[i].addEventListener("click", function () {
    this.classList.toggle("active");
  });
}

/*
Sign in Menu Button 
*/

const threeBars = document.querySelector(".three-bars");
const dropDown = document.querySelector(".drop-down-menu");
threeBars.addEventListener("click", () => {
  dropDown.classList.toggle("active");
});

/*
Course Drop down Menu 
*/

const courseBtn = document.querySelector(".course-btn");
const courseContainer = document.querySelector(".floating-course-container");

courseBtn.addEventListener("click", () => {
  courseContainer.classList.toggle("active");
});
/* 
Quiz Form Pop-up  

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
*/
/*
One login sequence loop 
*/

const profilePic = document.querySelector(".profile-pic");
const loggedInMenu = document.querySelector(".drop-down-menu.login");
const loginBtn = document.querySelector("#login-button");
const menuIcon = document.querySelector(".menu-icon");
const signOutBtn = document.querySelector(".sign-out-standard");
const signupBtn = document.querySelector("#sign-in-press");
const theLogin = document.querySelector(".login");
//const loginStatus = sessionStorage.getItem("loginStatus");
//const loggedOut = sessionStorage.getItem("loggedOut");
const bigSignIn = document.getElementById("big-sign-up");
const bigLogin = document.getElementById("big-login");
const bigBtnContainer = document.querySelector(".sign-in-option-big-btns");

profilePic.addEventListener("click", () => {
  console.log("hi");
  loggedInMenu.classList.toggle("opened");
});
/*
if (loginStatus) {
  profilePic.classList.toggle("logged-in");
  loggedInMenu.classList.toggle("logged-in");
  menuIcon.classList.toggle("logged-in");
  loggedInMenu.classList.toggle("opened");
  bigSignIn.classList.toggle("active");
  bigLogin.classList.toggle("active");
  ///bigBtnContainer.classList.toggle("active");
}
if (loggedOut) {
  profilePic.classList.toggle("logged-in");
  loggedInMenu.classList.toggle("logged-in");
  menuIcon.classList.toggle("logged-in");
  loggedInMenu.classList.toggle("opened");
  bigSignIn.classList.toggle("active");
  bigLogin.classList.toggle("active");
  ///bigBtnContainer.classList.toggle("active");
}

/*
loginBtn.addEventListener("click", () => {
  console.log("hello");
  profilePic.classList.toggle("logged-in");
  loggedInMenu.classList.toggle("logged-in");
  menuIcon.classList.toggle("logged-in");
  loggedInMenu.classList.toggle("opened");
});

*/
/*
signOutBtn.addEventListener("click", () => {
  console.log("hi");
  sessionStorage.removeItem("loginStatus");
  sessionStorage.clear;
  //localStorage.setItem("loggedOut", "out");
  profilePic.classList.toggle("logged-in");
  loggedInMenu.classList.toggle("logged-in");
  menuIcon.classList.toggle("logged-in");
  loggedInMenu.classList.toggle("opened");
  bigSignIn.classList.toggle("active");
  bigLogin.classList.toggle("active");
});

/*
signOutBtn.addEventListener("click", () => {
  profilePic.classList.toggle("logged-in");
  loggedInMenu.classList.toggle("logged-in");
  menuIcon.classList.toggle("logged-in");
  localStorage.removeItem("loginStatus");
});
*/
/*
loginBtn.addEventListener("click", () => {
  console.log("clicked");
  sessionStorage.removeItem("loggedOut");
  sessionStorage.setItem("loginStatus", "in");
});
*/
