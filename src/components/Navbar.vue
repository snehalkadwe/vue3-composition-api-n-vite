<template>
  <div class="w-full flex items-center content-center h-12 pl-4 bg-indigo-500 text-white shadow pt-0">
      <div>
          <router-link to="/" class="nav-link justify-self-center">Home</router-link>
          <router-link to="/users" class="nav-link justify-self-center">API Users</router-link>
          <router-link to="/multiple-v-model" class="nav-link justify-self-center">MultipleVmodel</router-link>
          <router-link to="/list/users" class="nav-link justify-self-center">List of Users</router-link>
          <router-link to="/timer" class="nav-link justify-self-center">Current Time Example</router-link>
          <router-link to="/todos" class="nav-link justify-self-center">Todos</router-link>
          <router-link to="/drag-n-drop" class="nav-link justify-self-center">Drag n Drop Ex</router-link>
          <router-link to="/copy-link" class="nav-link justify-self-center">Copy Sharable Link</router-link>
      </div>
  </div>
</template>

<script>
export default {
    name: "Navbar"
}
</script>

<style>
.nav-link {
    padding-right: 20px;
    font-weight: bold;
}
</style>