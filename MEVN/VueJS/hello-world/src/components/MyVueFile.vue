<script setup>
defineProps({
  mycomment: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <!-- My FIle  -->
  <div class="container">
    <h3>My name is Ganesh Suni Suryawanshi</h3>
  </div>
</template>

<style scoped>

.container {
  text-align: center;
}
h3 {
    margin-top: 40px;
  color: green;
}
</style>
