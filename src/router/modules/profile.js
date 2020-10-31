import BasicLayout from '@/layouts/basic-layout';

const meta = {
    auth: true
};

const pre = 'profile-';

export default {
    path: '/profile',
    name: 'profile',
    redirect: {
        name: `${pre}basic`
    },
    meta,
    component: BasicLayout,
    children: [
        {
            path: 'basic',
            name: `${pre}basic`,
            meta: {
                ...meta,
                title: '基础详情页'
            },
            component: () => import('@/pages/profile/basic')
        },
        {
            path: 'advanced',
            name: `${pre}advanced`,
            meta: {
                ...meta,
                title: '高级详情页'
            },
            component: () => import('@/pages/profile/advanced')
        }
    ]
};
