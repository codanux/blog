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
                { path: 'post', component: () => import('@/pages/app/post'), name: 'post', icon: 'edit' },
                { path: 'post/:slug', component: () => import('@/pages/app/post/show'), name: 'post.show', props: true, menu: false }
            ]
        },
        {
            path: '/auth', menu: false,
            component: () => import('@/layouts/AuthLayout.vue'),
            children: [
                { path: 'login', component: () => import('@/pages/auth/Login'), name: 'login', icon: 'login' },
                { path: 'register', component: () => import('@/pages/auth/Login'), name: 'register', icon: 'register' }
            ]
        }
    ],
});

export default router;
