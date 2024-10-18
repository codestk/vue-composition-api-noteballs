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
});
