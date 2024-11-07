// stores/counter.js
import { defineStore } from "pinia";

export const useStoreStock = defineStore("StoreStock", {
  state: () => {
    return {
      notes: [
        {
          id: "id1",
          name: "BJC",
          P_S: "P/S (X) 0.94 0.65 0.64",
          P_B: "P/B (X) 1.20 0.85 0.84",
          content: "ราคาน่าสนใจเป็นหุ้นที่ลงมาจาก  50 แต่กำไรไม่โต   ",
          chart: "@/assets/imageBJC/bjc10years.png",
          low: "",
          high: "",
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
  },
});
