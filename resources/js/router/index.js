import Vue from 'vue'
import VueRouter from 'vue-router'
import { getToken, setToken, removeToken } from '@/utils/auth';

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
            redirect: '/dashboard',
            children: [
                { path: 'dashboard', component: () => import('@/pages/Index.vue'), name: 'index', meta: { icon: 'school' } },
                { path: 'post', component: () => import('@/pages/app/post'), name: 'post', meta: { icon: 'edit' } },
                { path: 'post/:slug', component: () => import('@/pages/app/post/show'), name: 'post.show', props: true, meta: { hidden: true } }
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
        console.log(to);
        if (to.path === '/login') {
            // if is logged in, redirect to the home page
            next({ path: '/' });
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
