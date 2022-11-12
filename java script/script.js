const welcome = () => {
  console.log("Witaj!");
};
const toggleBackground = () => {
  const body = document.body;
  const themeName = document.querySelector(".js-theme-name");
  const bodyIsDark = body.classList.contains("dark");

  body.classList.toggle("dark");
  themeName.innerText = bodyIsDark ? "inne" : "poprzednie";
};
const toggleImage = () => {
  const image = document.querySelector(".js-image");
  const imageButton = document.querySelector(".js-image-button");
  const imageIsActive = image.classList.contains("section__image--invisible");

  image.classList.toggle("section__image--invisible");
  imageButton.innerText = imageIsActive ? "Pokaż zdjęcie" : "Ukryj zdjęcie";
};
const init = () => {
  const themeNameButton = document.querySelector(".js-theme-name-button");
  const imageButton = document.querySelector(".js-image-button");

  themeNameButton.addEventListener("click", toggleBackground);

  imageButton.addEventListener("click", toggleImage);

  welcome();
};

init();
