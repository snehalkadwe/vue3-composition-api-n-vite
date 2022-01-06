import { createRouter, createWebHistory } from "vue-router";

import Users from '../components/Users.vue';
import HelloWorld from '../components/HelloWorld.vue';
import MultipleVmodel from '../components/MultipleVmodel.vue';
import User from '../components/User.vue';
import ListOfUsers from '../components/ListOfUsers.vue';
import CurrentTimeExample from '../components/CurrentTimeExample.vue';
import Todos from '../components/Todo/Todos.vue';
import DraggableComponent from '../components/DragDropExample/DraggableComponent.vue';
import SharableLinkExample from '../components/CopySharableLink/SharableLinkExample.vue';

const routes = [
    {
        path: '/',
        name: 'HelloWorld',
        component: HelloWorld
    },
    {
        path: "/users",
        name: "Users",
        component: Users
    },
    {
        path: "/users/:id",
        name: "users",
        component: User,
        params: true
    },
    {
        path: '/multiple-v-model',
        name: 'MultipleVmodel',
        component: MultipleVmodel
    },
    {
        path: '/list/users',
        name: 'ListOfUsers',
        component: ListOfUsers
    },
    {
        path: '/timer',
        name: 'CurrentTimeExample',
        component: CurrentTimeExample
    },
    {
        path: '/todos',
        name: 'Todos',
        component: Todos
    },
    {
        path: '/drag-n-drop',
        name: 'DraggableComponent',
        component: DraggableComponent
    },
    {
        path: '/copy-link',
        name: 'SharableLinkExample',
        component: SharableLinkExample
    },
];

const router = createRouter({
    // history: createWebHistory(),
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router