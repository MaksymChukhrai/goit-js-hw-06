const counter = {
  value: 0,
  increment() {
    //  console.log ('increment ->this', this);
    this.value += 1;
  },

  decrement() {
    // console.log ('decrement ->this', this);
    this.value -= 1;
  },
};

const incrementBtn = document.querySelector('[data-action="increment"]');
const decrementBtn = document.querySelector('[data-action="decrement"]');

const valueEl = document.querySelector("#value");

incrementBtn.addEventListener("click", function () {
  counter.increment();
  console.log(counter);
  valueEl.textContent = counter.value;
});

decrementBtn.addEventListener("click", function () {
  counter.decrement();
  console.log(counter);
  valueEl.textContent = counter.value;
});
