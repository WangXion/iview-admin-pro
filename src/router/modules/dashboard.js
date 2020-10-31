import BasicLayout from '@/layouts/basic-layout';

const meta = {
    auth: true
};

const pre = 'dashboard-';

export default {
    path: '/dashboard',
    name: 'dashboard',
    redirect: {
        name: `${pre}console`
    },
    meta,
    component: BasicLayout,
    children: [
        {
            path: 'console',
            name: `${pre}console`,
            meta: {
                ...meta,
                title: '主控台',
                closable: false
            },
            component: () => import('@/pages/dashboard/console')
        },
        {
            path: 'monitor',
            name: `${pre}monitor`,
            meta: {
                ...meta,
                title: '监控页'
            },
            component: () => import('@/pages/dashboard/monitor')
        },
        {
            path: 'workplace',
            name: `${pre}workplace`,
            meta: {
                ...meta,
                title: '工作台'
            },
            component: () => import('@/pages/dashboard/workplace')
        }
    ]
};
