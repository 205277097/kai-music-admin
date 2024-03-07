import { createRouter, createWebHashHistory } from "vue-router";

import Layout from "../pages/Layout.vue";

// 2. 定义一些路由
// 每个路由都需要映射到一个组件。
// 我们后面再讨论嵌套路由。
const routes = [
    { 
        path: '/', 
        component: Layout,
        redirect: 'index',
        children: [
            {
                path: 'index',
                component: () => import('../pages/index/Index.vue')
            },
        ]
    },
    {
        path: '/login',
        component: () => import('../pages/login/Login.vue'),
    },
    {
        path: '/403',
        component: () => import('../pages/403.vue'),
    },
    {
        path: '/404',
        component: () => import('../pages/404.vue'),
    },
    {
        path: '/:pathMatch(.*)',
        component: () => import('../pages/404.vue'),
    },
]


// 3. 创建路由实例并传递 `routes` 配置
// 你可以在这里输入更多的配置，但我们在这里
// 暂时保持简单
// 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用hash(createWebHashHistory) 模式。
const router = createRouter({
    history: createWebHashHistory(),
    routes, // `routes: routes` 的缩写
})

export default router