<template>
  <div class="mt-10 container mx-auto">
    <p class="text-center mb-5 text-indigo-700 font-medium">List of Users using composition api</p>
    <div class="flex flex-row flex-wrap">
      <div v-for="user in users" :key="user.id" class="w-1/4">
        <div class="p-5 shadow mb-4 text-left mx-3">{{ user.id }}. {{ user.name }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import fetchUsers from "../composables/users/users";

export default {
  setup() {
    const { users } = fetchUsers();
    return { users };
  },
};
</script>
