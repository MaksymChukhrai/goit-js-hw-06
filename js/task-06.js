const inputText = document.getElementById("validation-input");
inputText.addEventListener("blur", addBorderColor);
const dataLength = inputText.getAttribute("data-length");

function addBorderColor(event) {
  const valueLength = event.target.value.trim().length;
  if (Number(dataLength) === valueLength) {
    inputText.classList.add("valid");
    inputText.classList.remove("invalid");
  } else {
    inputText.classList.add("invalid");
    inputText.classList.remove("valid");
  }
}

// У завданні 6 бордер повинен набувати зеленого кольору, коли кількість введених символів дорівнює значенням атрибуту (ЦЕ ЧИСЛО) data-length (а не більше або менше).
