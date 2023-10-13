import {
    createRouter,
    createWebHistory
} from 'vue-router'
import client from './client'
import auth from './auth'
const routes = [...client, ...auth]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})
export default router