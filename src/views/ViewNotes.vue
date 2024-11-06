<template>
  <div class="notes">
    <div class="card has-background-success-dark p-4 mb-4">
      <div class="field">
        <label class="label">Message</label>
        <div class="control">
          <textarea
            v-model="newNote"
            class="textarea"
            :disabled="newNote != ''"
            placeholder="Add New Note"
          ></textarea>
        </div>
      </div>

      <div class="field is-grouped is-grouped-right">
        <div class="control">
          <button @click="addNewNote()" class="button is-link has-background-success">
            Add New Note
          </button>
        </div>
        <!-- <div class="control">
          <button class="button is-link is-light">Cancel</button>
        </div> -->
      </div>
    </div>

    <div v-for="note in notes" :key="note.id" class="card md-4">
      <div class="card-content">
        <div class="content">
          {{ note.content }}
          <a href="#">@bulmaio</a>. <a href="#">#css</a>
          <a href="#">#responsive</a>
          <br />
          <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
        </div>
      </div>
      <footer class="card-footer">
        <!-- <a href="#" class="card-footer-item">Save</a> -->
        <a href="#" class="card-footer-item">Edit</a>
        <a href="#" class="card-footer-item">Delete</a>
      </footer>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";

/*
  imports
*/

const newNote = ref("");

/*
  notes
*/

const notes = ref([
  {
    id: "id1",
    content:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam ad aspernatur vel. Voluptatem eos aliquam qui minima, adipisci tenetur sunt. Cupiditate earum molestiae similique officia enim placeat quis! Laborum, expedita. 1",
  },
  {
    id: "id2",
    content: " Lorem ipsum dolor sit amet consectetur adipisicing elit.   ",
  },
  {
    id: "id3",
    content:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit.  officia enim placeat quis! Laborum, expedita. 3 ",
  },
  {
    id: "id4",
    content: " Lorem ipsum dolor sit amet consectetur adipisicing elit.  ",
  },
  {
    id: "id5",
    content: " Lorem  5555 gfgfgf",
  },
]);

const addNewNote = () => {
  console.log("Hello");
};
</script>
