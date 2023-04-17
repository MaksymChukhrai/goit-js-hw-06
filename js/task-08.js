const loginForm = document.querySelector("form.login-form");

loginForm.addEventListener("submit", (event) => {
  // добавляем обработчик события submit
  event.preventDefault(); // отменяем отправку формы по умолчанию

  const email = loginForm.elements.email.value; // получаем значение поля email
  const password = loginForm.elements.password.value; // получаем значение поля password

  if (email === "" || password === "") {
    // проверяем, что поля не пустые
    alert("Заповніть всі поля форми"); // выводим сообщение, если поля не заполнены
  } else {
    const formData = {}; // создаем пустой объект для сбора данных формы
    for (let field of loginForm.elements) {
      if (field.type !== "submit") {
        // игнорируем кнопку отправки формы
        formData[field.name] = field.value; // добавляем в объект свойство с именем поля и его значение
      }
    }
    console.log(formData); // выводим объект с данными в консоль
    loginForm.reset(); // очищаем значения полей формы
  }
});
