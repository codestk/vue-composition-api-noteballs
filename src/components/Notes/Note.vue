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
      <a href="#" class="card-footer-item">Edit</a>
      <a href="#" @click.prevent="handleDeleteClicked" class="card-footer-item"
        >Delete</a
      >
    </footer>
  </div>
</template>

<script setup>
import { computed } from "vue";

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
const emit = defineEmits(["deleteClicked"]);
/*
  handleDeleteClicked
*/

const handleDeleteClicked = () => {
  emit("deleteClicked", props.note.id);
};
</script>
