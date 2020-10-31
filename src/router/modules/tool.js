import BasicLayout from '@/layouts/basic-layout';

const meta = {
    auth: true
};

const pre = 'tool-';

export default {
    path: '/tool',
    name: 'tool',
    redirect: {
        name: `${pre}page-cache-on`
    },
    meta,
    component: BasicLayout,
    children: [
        {
            path: 'page-cache/on',
            name: `${pre}page-cache-on`,
            meta: {
                ...meta,
                cache: true,
                title: '开启缓存'
            },
            component: () => import('@/pages/tool/page-cache/on')
        },
        {
            path: 'page-cache/off',
            name: `${pre}page-cache-off`,
            meta: {
                ...meta,
                cache: false,
                title: '关闭缓存'
            },
            component: () => import('@/pages/tool/page-cache/off')
        },
        {
            path: 'page-cache/params/:id',
            name: `${pre}page-cache-params`,
            meta: {
                ...meta,
                cache: true,
                title: '带参路由缓存'
            },
            props: true,
            component: () => import('@/pages/tool/page-cache/params')
        },
        {
            path: 'log/record',
            name: `${pre}record`,
            meta: {
                ...meta,
                title: '日志记录'
            },
            component: () => import('@/pages/tool/log/record')
        },
        {
            path: 'log/error',
            name: `${pre}error`,
            meta: {
                ...meta,
                title: '错误捕捉'
            },
            component: () => import('@/pages/tool/log/error')
        },
        {
            path: 'log/ajax',
            name: `${pre}ajax`,
            meta: {
                ...meta,
                title: 'Ajax 错误'
            },
            component: () => import('@/pages/tool/log/ajax')
        },
        {
            path: 'log/console',
            name: `${pre}console`,
            meta: {
                ...meta,
                title: '控制台日志'
            },
            component: () => import('@/pages/tool/log/console')
        }
    ]
};
