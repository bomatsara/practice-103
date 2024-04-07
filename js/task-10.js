// Завдання: Працівники у компанії
// У вас має базовий клас Employee, який є працівником компанії. У працівника є основні атрибути, такі як ім'я (name), вік (age), зарплата (salary) та методи для керування ними. Деякі працівники мають спеціальні характеристики, наприклад, менеджери можуть мати додатковий атрибут - кількість підлеглих.
// Ваше завдання – створити класи для різних типів працівників із використанням успадкування від базового класу Employee.
// Вимоги:
// TODO1
//Створіть клас Employee, який матиме атрибути name, age та salary.Також додайте методи getName(), getAge(), getSalary(), setName(name), setAge(age) та setSalary(salary) для керування цими атрибутами.
// TODO2
// Створіть підклас Manager, який успадковуватиме атрибути та методи від класу Employee. Додайте додатковий атрибут subordinates (кількість підлеглих) та метод getSubordinates() для керування ним.
// TODO3
// Створіть ще один підклас Developer, який також успадковує атрибути та методи від Employee. Додайте додатковий атрибут programmingLanguage (мова програмування), а також методи його управління.


class Employee {
    constructor(name, age, salary) {
        this.name = name;
        this.age = age
        this.salary = salary
    }
    getName() { return this.name }
    getAge() { return this.age }
    getSalary() { return this.salary }
    setName(name) { this.name = name }
    setAge(age) { this.age = age }
    setSalary(salary) { this.salary = salary }

}
class Manager extends Employee {
    constructor(name, age, salary, subordinates) {
        super(name, age, salary)
        this.subordinates = subordinates;
    }
    getSubordinates() { return this.subordinates }
    setSubordinates(subordinates) { this.subordinates = subordinates }
}
class Developer extends Employee {
    constructor(name, age, salary, programmingLanguage) {
        super(name, age, salary)
        this.programmingLanguage = programmingLanguage
    }
    getProgrammingLanguage() { return this.programmingLanguage }
    setProgrammingLanguage(language) { this.programmingLanguage = language }
}
const manager = new Manager("Іван", 50, 5000, 40);
manager.setName("Петро")
console.log(manager);

const developer = new Developer("Джон", 30, 2500, "JS")
console.log(developer);