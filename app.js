const questions = document.querySelectorAll(".questions");

questions.forEach((question) => {
  const anwser = question.querySelector(".answer");
  const img = question.querySelector(".question img");

  question.addEventListener("click", () => {
    anwser.classList.toggle("active");
    img.src = anwser.classList.contains("active")
      ? "./assets/images/icon-minus.svg"
      : "./assets/images/icon-plus.svg";
  });
});
