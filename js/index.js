// function to show and hide answers when questions are clicked

function showAnswer() {
  const questions = document.querySelectorAll(".question");
  questions.forEach((question) => {
    question.addEventListener("click", () => {
      question.classList.toggle("active");
      const activated = document.querySelector(".active");
      if (activated !== null) {
        const answer = activated.nextElementSibling;
        answer.style.display = "block";
        console.log(activated);
      }
    });
  });
}

// call showAnswer function when DOM has loaded

window.addEventListener("DOMContentLoaded", () => {
  showAnswer();
});
