const welcome = () => {
  console.log("Witaj!");
};

const toggleBackground = () => {
  const body = document.body;
  body.classList.toggle("new-background");
};

const nextStep = (step = 0) => {
  const image = document.querySelector(".js-image");
  const imageButton = document.querySelector(".js-image-button");
  switch (step) {
    case 0:
      image.src = "/assets/S.Polo.jpg";
      imageButton.textContent = "Ukryj zdjęcie";
      break;
    case 1:
      image.src = "/assets/20220911_122826.jpg";
      imageButton.textContent = "Pokaż zdjęcie";
      image.classList.add("section__image--invisible");
      break;
    case 2:
      imageButton.textContent = "Pokaż następne zdjęcie";
      image.classList.remove("section__image--invisible");
      break;
  }
};
const init = () => {
  const themeNameButton = document.querySelector(".js-theme-name-button");
  const imageButton = document.querySelector(".js-image-button");
  let counter = 0;
  themeNameButton.addEventListener("click", toggleBackground);

  imageButton.addEventListener("click", () => {
    nextStep(counter);
    counter >= 2 ? (counter = 0) : counter++;
  });

  welcome();
};
init();
