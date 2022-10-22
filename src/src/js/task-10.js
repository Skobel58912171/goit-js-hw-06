// Напиши скрипт создания и очистки коллекции элементов.
// Пользователь вводит количество элементов в input и нажимает
//  кнопку Создать, после чего рендерится коллекция.При нажатии
//   на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает один параметр
//   - число.Функция создает столько < div >, сколько указано в amount
//    и добавляет их в div#boxes.
// Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше предыдущего
// на 10px.
// Все элементы должены иметь случайный цвет фона в формате HEX.
// Используй готовую функцию getRandomHexColor для получения цвета.

// Создай функцию destroyBoxes(), которая очищает содержимое div#boxes,
//   тем самым удаляя все созданные элементы.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const inputNumber = document.querySelector("input");
const btnCreate = document.querySelector("[data-create]");
const btnDestroy = document.querySelector("[data-destroy]");
const boxContainer = document.querySelector("#boxes");
// console.log(inputNumber);
// console.log(btnCreate);
// console.log(btnDestroy);
// console.log(boxContainer);
let totalNumberInput = 0;
inputNumber.addEventListener(
  "input",
  (event) => (totalNumberInput = event.currentTarget.value)
);
// console.log(totalNumberInput);

function createBoxes(amount) {
  amount = totalNumberInput;

  for (let i = 1; i <= amount; i += 1) {
    const markup = document.createElement("div");

    markup.style.width = `${30 + (i - 1) * 10}px`;
    markup.style.height = `${30 + (i - 1) * 10}px`;
    markup.style.backgroundColor = getRandomHexColor();
    boxContainer.append(markup);
  }
}

function destroyBoxes() {
  const markup = boxContainer
    .querySelectorAll("div")
    .forEach((Element) => Element.remove());
}

btnCreate.addEventListener("click", createBoxes);
btnDestroy.addEventListener("click", destroyBoxes);
