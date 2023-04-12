<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div id="main">
    <RouterView />
  </div>
</template>

<style scoped>
#main{
  color: white;
  background: #1a1a1a;
  overflow-y: auto;
  height: 100vh;
}

</style>
