// function to show and hide answers when questions are clicked

function showAnswer() {
  const questions = document.querySelectorAll(".question");
  questions.forEach((question) => {
    question.addEventListener("click", () => {
      let activated = document.querySelector(".active");
      if (activated === null) {
        questions.forEach((question) => {
          question.classList.remove = "active";
        });
        question.classList.add = "active";
        activated = document.querySelector(".active");
        activated.style.fontWeight = "700";
        const answer = question.nextElementSibling;
        answer.style.display = "block";
      } else {
        question.classList.remove = "active";
        const answer = question.nextElementSibling;
        answer.style.display = "none";
      }
    });
  });
}
//   question.classList.toggle = "active";
//   console.log(question.classList);
//   const answer = question.nextElementSibling;
//   answer.style.display = "block";

// call showAnswer function when DOM has loaded

window.addEventListener("DOMContentLoaded", () => {
  showAnswer();
});
