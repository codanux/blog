import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
    scrollBehavior: () => ({x: 0, y: 0}),
    base: 'admin',
    linkExactActiveClass: 'q-item--active',
    routes: [
        {
            path: '/',
            component: () => import('@/layouts/MainLayout.vue'),
            meta: { hidden: false },
            children: [
                { path: 'dashboard', component: () => import('@/pages/Index.vue'), name: 'index', meta: { icon: 'school' } },
                { path: 'post', component: () => import('@/pages/app/post'), name: 'post', meta: { icon: 'edit' } },
                { path: 'post/:slug', component: () => import('@/pages/app/post/show'), name: 'post.show', props: true, meta: { hidden: true } }
            ]
        },
        {
            path: '/auth',
            meta: { hidden: true },
            component: () => import('@/layouts/AuthLayout.vue'),
            children: [
                { path: 'login', component: () => import('@/pages/auth/Login'), name: 'login', meta: { icon: 'login' } },
                { path: 'register', component: () => import('@/pages/auth/Login'), name: 'register', meta: { icon: 'register' } }
            ]
        }
    ],
});

export default router;
