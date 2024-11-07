<template>
  <div id="js-grid" class="grid is-col-min-8">
    <div
      v-for="i in 5"
      class="cell py-1 px-1 has-background-primary has-text-primary-invert has-radius-normal"
    >
      <div class="card">
        <div class="card-content">
          <div class="content">
            <h1>BJC</h1>
            <span class="tag is-dark is-large py-1 px-1">low 16</span>
            <span class="tag is-danger is-large py-1 px-1">high 30</span>

            <span class="tag is-white is-large py-1 px-1"
              >Lower 30 Let Buy</span
            >
            <span class="tag is-link is-large py-1 px-1">Current 25</span>

            <span class="tag is-success is-large py-1 px-1">Command = BUY</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>
<style></style>
