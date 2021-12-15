<script setup>
import { ref } from "vue";

defineProps({
  msg: String,
});

const count = ref(0);
const msg = ref("Click on button to increment the counter")
</script>

<template >
  <div class="mt-20">
    <h1>{{ msg }}</h1>
    <button type="button" class="w-1/3 bg-indigo-700 font-bold rounded-md border text-white h-10"  @click="count++">count is: {{ count }}</button>
  </div>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
