// function to show and hide answers when questions are clicked

function showAnswer() {
  const questions = document.querySelectorAll("p.question");
  questions.forEach((question) => {
    question.addEventListener("click", () => {
      question.classList.toggle = "active";
      console.log(question.classList);
      const answer = question.nextElementSibling;
      answer.style.display = "block";
    });
  });
}

//   const hamburgerButton = document.querySelector("#hamburger");
//   hamburgerButton.addEventListener("click", () => {
//     const subMenuButtons = document.querySelectorAll("header ul li");
//     hamburgerButton.classList.toggle("activeHamburger");
//     const activatedHamburger = document.querySelector(".activeHamburger");
//     if (activatedHamburger === null) {
//       subMenuButtons.forEach((subMenu) => {
//         subMenu.style.display = "none";
//         subMenu.style.zIndex = "1";
//       });
//       hamburgerButton.style.color = "#f5f5f5";
//     } else {
//       subMenuButtons.forEach((subMenu) => {
//         subMenu.style.display = "block";
//         subMenu.style.zIndex = "1";
//         subMenu.style.paddingTop = "15px";
//       });
//       hamburgerButton.style.color = "#ff9b51";
//     }
//   });
// }

// call showAnswer function when DOM has loaded

window.addEventListener("DOMContentLoaded", () => {
  showAnswer();
});
