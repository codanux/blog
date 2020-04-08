import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
    scrollBehavior: () => ({x: 0, y: 0}),
    base: 'admin',
    routes: [
        {
            path: '/',
            component: () => import('@/layouts/MainLayout.vue'),
            children: [
                { path: 'dashboard', component: () => import('@/pages/Index.vue'), name: 'index', icon: 'school' },
                { path: 'post', component: () => import('@/pages/Post.vue'), name: 'post', icon: 'edit' }
            ]
        },
        {
            path: '/auth',
            component: () => import('@/layouts/AuthLayout.vue'),
            children: [
                { path: 'login', component: () => import('@/pages/auth/Login.vue'), name: 'login', icon: 'school' },
                { path: 'register', component: () => import('@/pages/Post.vue'), name: 'register', icon: 'edit' }
            ]
        }
    ],
});

export default router;
