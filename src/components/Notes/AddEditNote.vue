<template>
  <div class="card has-background-success-dark p-4 mb-4">
    <div class="field">
      <label class="label">Message</label>
      <div class="control">
        <textarea
          v-model="modelValue"
          class="textarea"
          placeholder="Add New Note"
        ></textarea>
      </div>
    </div>

    <div class="field is-grouped is-grouped-right">
      <div class="control">
        <!-- <button class="button is-link has-background-success">Update</button> -->

        <slot name="buttons"></slot>
      </div>
    </div>
  </div>
  {{ modelValue }}
</template>
<script setup>
const modelValue = defineModel("modelValue");
</script>
