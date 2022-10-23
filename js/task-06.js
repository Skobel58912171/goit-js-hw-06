// Напиши скрипт, который при потере фокуса на инпуте
//     (событие blur), проверяет его содержимое на
//         правильное количество введённых символов.
// Сколько символов должно быть в инпуте, указывается
// в его атрибуте data - length.
// Если введено подходящее количество символов,
//     то border инпута становится зелёным, если
// неправильное - красным.
const inputText = document.querySelector("#validation-input");
// console.log(inputText);
inputText.addEventListener("blur", (event) => {
  if (inputText.value.length == inputText.dataset.length) {
    return inputText.classList.add("valid");
  }
  return inputText.classList.add("invalid");
});
