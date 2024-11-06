<template>
  <div class="notes">
    <div class="card has-background-success-dark p-4 mb-4">
      <div class="field">
        <label class="label">Message</label>
        <div class="control">
          <textarea
            v-model="newNote"
            ref="newNoteRef"
            class="textarea"
            placeholder="Add New Note"
          ></textarea>
        </div>
      </div>

      <div class="field is-grouped is-grouped-right">
        <div class="control">
          <button
            @click="addNewNote()"
            :disabled="newNote == ''"
            class="button is-link has-background-success"
          >
            Add New Note
          </button>
        </div>
      </div>
    </div>

    <Note
      v-for="note in storeNote.notes"
      :key="note.id"
      :note="note"
      @delete-clicked="deleteNote"
    ></Note>
  </div>
</template>
<script setup>
/*
  imports
*/
import { ref } from "vue";
import Note from "@/components/Notes/Note.vue";
import { useNoteStore } from "@/stores/storeNote";

const newNote = ref("0000");

/*
    Store
*/
const storeNote = useNoteStore();

const addNewNote = () => {
  let currentDate = new Date();
  let id = currentDate.toString();

  let note = {
    id: id,
    content: newNote.value,
  };

  notes.value.unshift(note);

  newNote.value = "";
  newNoteRef.value.focus();
};

/*

*/

const deleteNote = idToDelete => {
  notes.value = notes.value.filter(note => {
    return note.id !== idToDelete;
  });
};
</script>
