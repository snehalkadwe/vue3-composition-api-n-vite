<template>
  <div>
    <p class="mt-10 ">Information of User</p>
    <div class="flex flex-col w-1/2 mx-auto p-5 mt-5 text-left border shadow-lg border-blue-200">
      <div class="flex row user-info">
        <label for="name">Name : </label>
        <p>{{ user.name }}</p>
      </div>
      <div class="flex row user-info">
        <label for="name">Username : </label>
        <p>{{ user.username }}</p>
      </div>
      <div class="flex row user-info">
        <label for="name">Email : </label>
        <p>{{ user.email }}</p>
      </div>
      <div class="flex row user-info">
        <label for="name">Phone : </label>
        <p>{{ user.phone }}</p>
      </div>
      <div class="flex row user-info">
        <label for="name">Website : </label>
        <p>{{ user.website }}</p>
      </div>
      <div class="flex row user-info">
        <label for="name">Company Info : </label>
        <p>{{ user.company }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { useRoute } from "vue-router";
import { ref, onMounted } from "vue";
export default {
  setup() {
    const route = useRoute();
    const id = route.params.id;
    const user = ref({});
    onMounted(() => getUser());
    const getUser = () => {
      fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((response) => response.json())
        .then((data) => (user.value = data));
    };
    return { user };
  },
};
</script>

<style>
.user-info {
  margin:10px;
}

.user-info p {
  padding-left: 20px;
  
}
</style>