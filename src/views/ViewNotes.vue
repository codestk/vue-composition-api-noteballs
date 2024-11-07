<template>
  <div class="notes">
    <AddEditNote v-model="newNote">
      <template #buttons>
        <button
          :disabled="newNote == ''"
          class="button is-link has-background-success"
        >
          Add New Note
        </button>
        {{ newNote }}
      </template>
    </AddEditNote>

    <Note v-for="note in storeNote.notes" :key="note.id" :note="note"></Note>
    <!-- @delete-clicked="deleteNote" -->
  </div>
</template>
<script setup>
/*
  imports
*/
import { ref } from "vue";
import Note from "@/components/Notes/Note.vue";

import { useNoteStore } from "@/stores/storeNote";
import AddEditNote from "@/components/Notes/AddEditNote.vue";

const newNote = ref("0ttttt00");
const newNoteRef = ref(null);
/*
    Store
*/
const storeNote = useNoteStore();

// const addNewNote = () => {
//   storeNote.addNote(newNote.value);
//   //notes.value.unshift(note);
//   newNote.value = "";
//   newNoteRef.value.focus();
// };

/*

*/

// const deleteNote = (idToDelete) => {
//   notes.value = notes.value.filter((note) => {
//     return note.id !== idToDelete;
//   });
// };
</script>
