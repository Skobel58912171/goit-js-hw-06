// Счетчик состоит из спана и кнопок, которые, при клике, должны увеличивать и уменьшать его значение на единицу.
// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.
let counterValue = 0;

const btnDecrement = document.querySelector('[data-action="decrement"]');
const btnIncrement = document.querySelector('[data-action="increment"]');

function onClickDecrement(event) {
  counterValue -= 1;
  document.getElementById("value").textContent = counterValue;
}
function onClickIncrement(event) {
  counterValue += 1;
  document.getElementById("value").textContent = counterValue;
}
btnDecrement.addEventListener("click", onClickDecrement);
btnIncrement.addEventListener("click", onClickIncrement);
