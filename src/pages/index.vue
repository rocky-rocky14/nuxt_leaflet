<template>
  <div>
    <h1>Home Page</h1>
    <p>Welcome to the home page</p>
    <v-btn @click="click">クリック</v-btn>
  </div>
</template>
<script setup lang="ts">
const click = () => {
  alert("クリックされました");
};
</script>
