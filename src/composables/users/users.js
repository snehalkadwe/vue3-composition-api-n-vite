import {ref, onMounted, computed } from 'vue';

export default function fetchUsers () {

    const users = ref([]);
    const search = ref("");

    // get list of users
    function getUsers() {
      fetch(`https://jsonplaceholder.typicode.com/users`)
        .then((response) => response.json())
        .then((data) => (users.value = data));
    }

    // call getusers when mounted
    onMounted(() => getUsers());

    // search users
    const searchUsers = computed(() => {
      return users.value.filter((user) => {
        return (
          user.name.toLowerCase().indexOf(search.value.toLowerCase()) != -1 ||
          user.email.toLowerCase().indexOf(search.value.toLowerCase()) != -1 ||
          user.company.name.toLowerCase().indexOf(search.value.toLowerCase()) !=
            -1
        );
      });
    });
    
    return { getUsers, search, searchUsers, users };
}