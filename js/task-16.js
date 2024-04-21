
//     Завдання 13
// Коло має зникати при наведенні на нього.
// При цьому позиція сусідніх кіл має залишатися незмінною.

const grid = document.querySelector(".grid")

grid.addEventListener("mouseover", (event) => {
    const hoverEl = event.target;
    if (!hoverEl.classList.contains("gridItem")) {
        return
    }
    hoverEl.style.opacity = 0
})
grid.addEventListener("mouseout", (event) => {
    const hoverEl = event.target;
    if (!hoverEl.classList.contains("gridItem")) {
        return
    }
    hoverEl.style.opacity = 1
})