// function to show and hide answers when questions are clicked

function showAnswer() {}

// function showAnswer() {
//   const questions = document.querySelectorAll(".question");
//   questions.forEach((question) => {
//     question.addEventListener("click", () => {
//       questions.forEach((question) => {
//         question.classList.remove("active");
//         question.nextElementSibling.style.display = "none";
//       });
//       question.classList.toggle("active");
//       const activated = document.querySelector(".active");
//       const answer = activated.nextElementSibling;
//       answer.style.display = "block";
//       activated.addEventListener("click", () => {
//         activated.classList.remove("active");
//         answer.style.display = "none";
//       });
//     });
//   });
// }

// call showAnswer function when DOM has loaded

window.addEventListener("DOMContentLoaded", () => {
  showAnswer();
});
