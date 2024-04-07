/**
 *? Напиши клас Client який створює об'єкт
 *? з ​​властивостями login email
 *? Оголоси приватні властивості #login #email,
 *? доступ до яких зроби через геттер та сеттер login email
 */
// const client = new Client("mango", "mango@gmail.com");

class Client {
    #login;
    #email;
    constructor(login, email) {
        this.#login = login;
        this.#email = email;
    }
    get getClintData() {
        return {
            login: this.#login,
            email: this.#email,
        }
    }

    // set setClientData({ login, email }) {
    set setClientData(params) {
        const { login, email } = params
        this.#login = login;
        this.#email = email
    }

}

const client = new Client("mango", "mango@gmail.com");

client.setClientData = { login: "login1", email: "email@.com" };

console.log(client.getClintData);