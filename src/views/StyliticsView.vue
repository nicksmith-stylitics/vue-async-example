<script setup>
import { defineAsyncComponent } from 'vue'
const AsyncStylitics = defineAsyncComponent(() =>
  import('../components/Stylitics.vue')
)
// import Stylitics from '../components/Stylitics.vue';
</script>

<template>
  <div class="stylitics">
    <h1>This is an Stylitics page</h1>
    <AsyncStylitics />
    <div id="stylitics-widget-container"></div>

  </div>
</template>

<style>
@media (min-width: 1024px) {
  .stylitics {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
