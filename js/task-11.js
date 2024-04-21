/*<!-- ЗАДАЧА 1 -->
    <div>
      <p class="taskTitle">ЗАДАЧА 1</p>
      <button id="alertButton">SHOW ME</button>
      <input id="alertInput" type="text" />
    </div>
    */
/*Натискання на кнопку "SHOW ME" має виводити значення з поля введення (дивіться на елементи в html-розмітці)
 */

const input = document.querySelector("#alertInput");
const output = document.querySelector("#alertButton");

output.addEventListener("click", () => {
  if (!input.value) {
    alert("Please enter a text");
  }
  console.log(input.value);
});
