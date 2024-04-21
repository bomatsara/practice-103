/*
Завдання 2
Після натискання кнопки "SWAP ME" здійснюється обмін вмістом між двома інпутами.
Ви можете натиснути на неї кілька разів або вручну змінити вміст інпутів.
*/

document.addEventListener('DOMContentLoaded', (event) => {
    const swapBtn = document.querySelector('#swapButton');
    const leftSwapInput = document.querySelector('#leftSwapInput');
    const rightSwapInput = document.querySelector('#rightSwapInput');

    swapBtn.addEventListener('click', event => {
        const leftSwapInputValue = leftSwapInput.value;
        const rightSwapInputValue = rightSwapInput.value;

        leftSwapInput.value = rightSwapInputValue;
        rightSwapInput.value = leftSwapInputValue;
    });
})