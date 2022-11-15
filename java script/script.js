const welcome = () => {
  console.log("Witaj!");
};

const toggleBackground = () => {
  const body = document.body;
  const sienaText = document.querySelector(".js-siena-text");
  const NewBackground = body.classList.contains("new-background");

  body.classList.toggle("new-background");
  sienaText.innerText = NewBackground ? "" : "Pokaż";
};
const toggleImage = () => {
  const image = document.querySelector(".js-image");
  const imageButton = document.querySelector(".js-image-button");
  const imageIsActive = image.classList.contains("section__image--invisible");

  image.classList.toggle("section__image--invisible");
  imageButton.innerText = imageIsActive
    ? "Pokaż moje zdjęcie z wakacji w Sienie"
    : "Ukryj moje zdjęcie z wakacji w Sienie";
};
const init = () => {
  const themeNameButton = document.querySelector(".js-theme-name-button");
  const imageButton = document.querySelector(".js-image-button");

  themeNameButton.addEventListener("click", toggleBackground);

  imageButton.addEventListener("click", toggleImage);

  welcome();
};

init();
