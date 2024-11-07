<template>
  <div class="tabs is-large">
    <ul>
      <li v-bind:class="{ 'is-active': isActive == 'id1' }">
        <a v-on:click="isActive = 'id1'" class="is-large">Bjc</a>
      </li>
    </ul>
  </div>
  <div class="tab-contents">
    <div class="content" v-bind:class="{ 'is-active': isActive == 'id1' }">
      <img src="@\assets\image\BJC\bjc10years.png" />

      <div class="my-2">
        <h2 class="subtitle is-1">BJC</h2>
      </div>
      low high
      <div class="my-2">
        <span class="tag is-dark is-large mr-2">low 16</span>
        <span class="tag is-danger is-large mr-2">high 30</span>

        <span class="tag is-white is-large mr-2">Lower 30 Let Buy</span>
        <span class="tag is-link is-large mr-2">Current 25</span>

        <span class="tag is-success is-large mr-2">Command = BUY</span>
      </div>
      <div class="notification is-warning my-2">
        ราคาน่าสนใจเป็นหุ้นที่ลงมาจาก 30 แต่กำไรไม่โต คู่แข่งเยอะเสี่ยงโดน Take
      </div>
      <div>P/S (X) 0.94 0.65 0.64</div>
      <div>P/B (X) 1.20 0.85 0.84</div>
      <div>Dividend Yield (%) 1.87 3.20 3.21</div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const isActive = ref("id1");
</script>
<style>
.tab-contents .content {
  display: none;
}
.tab-contents .content.is-active {
  display: block;
}
</style>
