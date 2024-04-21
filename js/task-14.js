/*
/*
Завдання 3
Кнопка "Приховати" ховає текст і замінює назву кнопки на
"Розкрити", при повторному натисканні текст знову стає доступним
і кнопка набуває початкового вигляду.

    <!-- ЗАДАЧА 3 -->
    <div>
      <p class="taskTitle">ЗАДАЧА 3</p>
      <input id="passwordInput" type="text" />
      <button id="passwordButton">Приховати</button>
        </div>
*/
const input = document.querySelector("#passwordInput");
const output = document.querySelector("#passwordButton");

output.addEventListener("click", onHidden);
function onHidden() {
  if (input.type === "text") {
    input.setAttribute("type", "password");
    output.textContent = "Розкрити";
  } else {
    input.setAttribute("type", "text");
    output.textContent = "Приховати";
  }
}
