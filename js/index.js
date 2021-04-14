// function to show and hide answers when questions are clicked

function showAnswer() {
  const questions = document.querySelectorAll(".question");
  questions.forEach((question) => {
    question.addEventListener("click", () => {
      const activated = document.querySelector(".active");
      let isActive = false;
      if (question === activated) {
        isActive = true;
      }
      questions.forEach((question) => {
        question.classList.remove("active");
        question.nextElementSibling.style.display = "none";
      });
      if (!isActive) {
        question.classList.add("active");
        question.nextElementSibling.style.display = "block";
      }
    });
  });
}

// call showAnswer function when DOM has loaded

window.addEventListener("DOMContentLoaded", () => {
  showAnswer();
});
