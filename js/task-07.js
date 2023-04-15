const fontSizeControl = document.querySelector("#font-size-control");
const textSpan = document.querySelector("#text");

fontSizeControl.addEventListener("input", (event) => {
  const fontSize = event.target.value + "px";
  textSpan.style.fontSize = fontSize;
});
