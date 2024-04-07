//TODO:=============================================
/**
 *? Напиши клас Notes який управляє колекцією нотаток у
 *? властивості items.
 *? Нотатка - це об'єкт із властивостями text і priority.
 *? Додай класу статичний метод Priopity,
 *? який буде повертати об'єкт із пріоритетами.
 *? Додай методи addNote(note), removeNote(text)
 *? updatePriority(text, newPriority)
 */
class Notes {
    static Priority() {
        return {
            HIGHT: "hight",
            LOW: "low",
        };
    }
    constructor() {
        this.items = []
    }
    addNote(note) {
        this.items.push(note)
    }
    removeNote(text) {
        const index = this.items.findIndex((item) => item.text == "Note1")
        if (index === -1) return
        this.items.splice(index, 1)
    }

    updatePriority(text, newPriority) {
        const index = this.items.findIndex((item) => item.text == text)
        if (index === -1) return
        this.items[index].priority = newPriority;
    }
}


const note1 = new Notes();
note1.addNote({ text: "Note1", priority: Notes.Priority().LOW });
note1.addNote({ text: "Note2", priority: Notes.Priority().LOW });

note1.removeNote("Note1")

note1.updatePriority("Note2", Notes.Priority().HIGHT)

console.log(note1);
