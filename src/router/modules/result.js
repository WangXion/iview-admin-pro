import BasicLayout from '@/layouts/basic-layout';

const meta = {
    auth: true
};

const pre = 'result-';

export default {
    path: '/result',
    name: 'result',
    redirect: {
        name: `${pre}success`
    },
    meta,
    component: BasicLayout,
    children: [
        {
            path: 'success',
            name: `${pre}success`,
            meta: {
                ...meta,
                title: '成功页'
            },
            component: () => import('@/pages/result/success')
        },
        {
            path: 'fail',
            name: `${pre}fail`,
            meta: {
                ...meta,
                title: '失败页'
            },
            component: () => import('@/pages/result/fail')
        }
    ]
};
