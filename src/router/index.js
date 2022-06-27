import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'default',
        component: ()=>import('../views/DefaultView.vue')
    },
    {
        path: '/webcam',
        name: 'webcam',
        component: ()=>import('../views/WebcamView.vue')
    },
]

const router = createRouter({
    base:'/',
    history: createWebHistory('/'),
    routes
})

export default router