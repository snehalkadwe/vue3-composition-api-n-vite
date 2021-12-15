<template>
  <div>
    <p class="text-center w-full mb-3 mt-20">{{ msg }}</p>
    <Search v-model="search" />
    <div
      v-show="searchUsers.length == 0"
      class="
        my-3
        border border-red-600
        text-red-50
        w-1/2
        mx-auto
        p-3
        rounded
        bg-red-500
      "
    >
      No User found
    </div>
    <div
      v-for="user in searchUsers"
      :key="user.id"
      class="
        w-1/2
        mx-auto
        border border-gray-200
        bg-white-100
        text-left
        pl-5
        my-3
        shadow-md
        rounded
      "
    >
      <router-link :to="{ name: 'users', params: { id: user.id } }">
        <ul class="my-4 list-outside">
          <li>{{ user.id }}. User: {{ user.name }}</li>
          <li>Email: {{ user.email }}</li>
          <li>
            Address: {{ user.address.street }} {{ user.address.suite }}
            {{ user.address.city }}
          </li>
          <li>Company: {{ user.company.name }}</li>
        </ul>
      </router-link>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import Search from "./Search.vue";
import fetchUsers from "../composables/users/users";

export default {
  components: {
    Search,
  },
  setup() {
    const msg = ref("");
    
    // get list of users from compsition api 
    const { searchUsers, search } = fetchUsers();
    
    return { msg, search, searchUsers };
  },
};
</script>