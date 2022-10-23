// Напиши скрипт, который изменяет цвета фона элемента
//   < body > через инлайн стиль при клике на
// button.change - color и выводит значение
// цвета в span.color.
// Для генерации случайного цвета используй функцию getRandomHexColor.
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnChangeColor = document.querySelector("button");
console.log(btnChangeColor);
function onClick(event) {
  const bodyEl = document.querySelector("body");
  bodyEl.style.backgroundColor = getRandomHexColor();
  const spanText = document.querySelector(".color");
  spanText.textContent = bodyEl.style.backgroundColor;
}

btnChangeColor.addEventListener("click", onClick);
