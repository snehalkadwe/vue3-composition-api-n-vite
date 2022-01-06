<template>
    <div class="mt-10">
        <h3 class="text-blue-800 font-bold">Draggable Example</h3>
        <div class="flex mt-4">
            <draggable class="dragArea list-group w-full" :users="users" @change="log">
                <transition-group>
                    <div
                        class="w-1/2 mx-auto list-group-item font-bold bg-indigo-200 m-1 p-3 rounded-md text-center text-indigo-900"
                        v-for="user in users"
                        :key="user.name"
                    >{{ user.name }}</div>
                </transition-group>
            </draggable>
        </div>
    </div>
</template>

<script>
import { VueDraggableNext } from 'vue-draggable-next'
import fetchUsers from "../../composables/users/users";

export default {
    name: "DraggableComponent",
    components: {
        draggable: VueDraggableNext,
    },
    setup() {
        const { users } = fetchUsers();
        function log(e) {
            console.log('hi', e)
        }
        return { users, log };
    },
}
</script>

<style>
</style>