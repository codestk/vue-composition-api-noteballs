// stores/counter.js
import { defineStore } from "pinia";

export const useNoteStore = defineStore("counter", {
  state: () => {
    return {
      notes: [
        {
          id: "id1",
          content:
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam ad aspernatur vel. Voluptatem eos aliquam qui minima, adipisci tenetur sunt. Cupiditate earum molestiae similique officia enim placeat quis! Laborum, expedita. 1",
        },
        {
          id: "id2",
          content: "    1",
        },
      ],
    };
  },
  actions: {
    addNote(newNoteContent) {
      let currentDate = new Date();
      let id = currentDate.toString();
      let note = {
        id: id,
        content: newNoteContent,
      };
      this.notes.unshift(note);
    },
    deleteNote(id) {
      this.notes = this.notes.filter((note) => {
        return note.id !== id;
      });
    },
  },
});
