import BasicLayout from '@/layouts/basic-layout';

const meta = {
    auth: true
};

const pre = 'exception-';

export default {
    path: '/exception',
    name: 'exception',
    redirect: {
        name: `${pre}403`
    },
    meta,
    component: BasicLayout,
    children: [
        {
            path: '403',
            name: `${pre}403`,
            meta: {
                ...meta,
                title: '403'
            },
            component: () => import('@/pages/exception/403')
        },
        {
            path: '404',
            name: `${pre}404`,
            meta: {
                ...meta,
                title: '404'
            },
            component: () => import('@/pages/exception/404')
        },
        {
            path: '500',
            name: `${pre}500`,
            meta: {
                ...meta,
                title: '500'
            },
            component: () => import('@/pages/exception/500')
        }
    ]
};
