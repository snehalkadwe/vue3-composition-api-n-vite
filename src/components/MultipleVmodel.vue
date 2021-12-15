<template>
  <div class="mt-20">
    <custom-multiple-input
      v-model:username="username"
      v-model:email="email"
      v-model:mobile="mobile"
    />

    <div
      class="
        flex flex-col
        text-left
        w-1/3
        bg-indigo-100
        p-3
        rounded
        shadow
        mx-auto
      "
    >
      <p class="font-medium text-indigo-800 mb-3">Value Entered By you:</p>
      <div class="enterValue"><label for="username">Username : </label> {{ username }}</div>
      <div class="enterValue"><label for="email">Email : </label> {{ email }}</div>
      <div class="enterValue"><label for="mobile">Mobile : </label> {{ mobile }}</div>
    </div>
  </div>
</template>

<script>
import CustomMultipleInput from "./CustomMultipleInput.vue";
import { ref } from "vue";
export default {
  components: { CustomMultipleInput },
  setup() {
    const username = ref("");
    const email = ref("");
    const mobile = ref("");

    return { username, email, mobile };
  },
};
</script>

<style>
    .enterValue {
        padding-bottom: 5px;
        font-weight: 500;
    }
</style>