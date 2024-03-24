// Створіть об'єкт calculator із трьома методами
// read(a, b) - приймає два аргументи та зберігає їх
// як властивості об'єкта
// sum() повертає суму збережених значень
// multiply() перемножує збережені значення та повертає результат

const calculator = {
    read(a, b) {
        this.a = a;
        this.b = b;
    },
    sum() {
        return this.a + this.b;
    },
    multiply() {
        return this.a * this.b
    }
}
calculator.read(5, 2)
console.log(calculator.sum());
console.log(calculator.multiply());
console.log(calculator);