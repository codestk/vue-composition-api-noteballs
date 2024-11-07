<template>
  <div class="card md-4">
    <div class="card-content">
      <div class="content">
        {{ note.content }}
        <div class="has-text-right has-text-grey-light">
          <small> {{ charactersLength }} </small>
        </div>
      </div>
    </div>
    <footer class="card-footer">
      <!-- <a href="#" class="card-footer-item">Save</a> -->
      <RouterLink :to="`/editNote/${note.id}`" href="#" class="card-footer-item"
        >Edit</RouterLink
      >
      <a href="#" @click.prevent="handleDeleteClicked" class="card-footer-item"
        >Delete</a
      >
    </footer>
  </div>
</template>

<script setup>
import { useNoteStore } from "@/stores/storeNote.js";
import { computed } from "vue";
useNoteStore;
const storeNote = useNoteStore();

const charactersLength = computed(() => {
  let description = props.note.content.length > 1 ? "characters" : "character";
  return `${props.note.content.length} ${description}`;
});

const props = defineProps({
  note: {
    type: Object,
    require: true,
  },
});

/*
  Emit
*/

/*
  handleDeleteClicked
*/

const handleDeleteClicked = () => {
  //emit("deleteClicked", props.note.id);
  storeNote.deleteNote(props.note.id);
};
</script>
