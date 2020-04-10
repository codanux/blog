import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import { getToken } from '@/utils/auth';

const router = new VueRouter({
    scrollBehavior: () => ({x: 0, y: 0}),
    base: 'admin',
    mode: 'history',
    linkExactActiveClass: 'q-item--active',
    routes: [
        {
            path: '/',
            component: () => import('@/layouts/MainLayout.vue'),
            meta: { hidden: true, home: true },
            children: [
                { path: '/dashboard', component: () => import('@/pages/Index.vue'), name: 'dashboard', meta: { icon: 'home', title: 'Dashboard'} },
                { path: '/settings', component: () => import('@/pages/Index.vue'), name: 'settings', meta: { icon: 'settings', title: 'Setting'} },
            ]
        },
        {
            path: '/post',
            component: () => import('@/layouts/MainLayout.vue'),
            meta: { hidden: false, title: 'Post', icon: 'home' },
            children: [
                { path: '/', component: () => import('@/pages/app/post'), name: 'post', meta: { icon: 'edit', title: 'İndex' } },
                {
                    path: '/child-1', component: () => import('@/pages/app/post'), meta: { icon: 'edit', title: 'İndex 2' },
                    children: [
                        {
                            path: '/child-2', component: () => import('@/pages/app/post'), name: 'postt', meta: { icon: 'edit', title: 'İndex 3' },
                        }
                    ]
                },
                { path: ':slug', component: () => import('@/pages/app/post/show'), name: 'post.show', props: true, meta: { hidden: true } }
            ]
        },
        {
            path: '/',
            meta: { hidden: true },
            component: () => import('@/layouts/AuthLayout.vue'),
            children: [
                { path: 'login', component: () => import('@/pages/auth/Login'), name: 'login', meta: { icon: 'login' } },
                { path: 'register', component: () => import('@/pages/auth/Login'), name: 'register', meta: { icon: 'register' } },
            ]
        }
    ],
});



const whiteList = ['/login', '/register'];
// auth
router.beforeEach(async(to, from, next) => {
    const hasToken = getToken();
    if (hasToken) {
        if (to.name === 'login') {
            // if is logged in, redirect to the home page
            next({ name: 'dashboard' });
        } else {
            next();
        }
    } else {
        if (whiteList.indexOf(to.path) !== -1) {
            // white list access
            next();
        } else {
            // not login redirect
            next(`/login?redirect=${to.path}`);
        }
    }
});

export default router;
