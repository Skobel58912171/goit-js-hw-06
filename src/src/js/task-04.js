// Счетчик состоит из спана и кнопок, которые, при клике, должны увеличивать и уменьшать его значение на единицу.
// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.
const counterRef = document.querySelectorAll("#counter");
console.log(counterRef);
const newCounterRef = counterRef.split(" ");
console.log(newCounterRef);
const btnDecrement = document.querySelector(".decrement");
console.log(btnDecrement);
let counterValue = 0;
