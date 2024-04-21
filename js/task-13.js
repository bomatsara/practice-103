const decrease = document.querySelector("#decrease")
const increase = document.querySelector("#increase")
const box = document.querySelector("#box")

decrease.addEventListener("click", onDecrease)
increase.addEventListener("click", onIncrease)

let boxWidth = parseInt(getComputedStyle(box).width)
let boxHeight = parseInt(getComputedStyle(box).height)

function onDecrease() {
    boxWidth -= 10
    boxHeight -= 10
    box.style.width = `${boxWidth}px`
    box.style.height = `${boxHeight}px`
}

function onIncrease() {
    boxHeight += 10
    boxWidth += 10
    box.style.width = `${boxWidth}px`
    box.style.height = `${boxHeight}px`
}
