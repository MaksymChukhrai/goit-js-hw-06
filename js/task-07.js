const fontSizeControl = document.querySelector("#font-size-control");
const textSpan = document.querySelector("#text");

fontSizeControl.value = fontSizeControl.getAttribute("min");
const fontSize = fontSizeControl.value + "px";
textSpan.style.fontSize = fontSize;

fontSizeControl.addEventListener("input", (event) => {
  const fontSize = event.target.value + "px";
  textSpan.style.fontSize = fontSize;
});
