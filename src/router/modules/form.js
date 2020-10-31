import BasicLayout from '@/layouts/basic-layout';

const meta = {
    auth: true
};

const pre = 'form-';

export default {
    path: '/form',
    name: 'form',
    redirect: {
        name: `${pre}basic-form`
    },
    meta,
    component: BasicLayout,
    children: [
        {
            path: 'basic-form',
            name: `${pre}basic-form`,
            meta: {
                ...meta,
                title: '基础表单'
            },
            component: () => import('@/pages/form/basic-form')
        },
        {
            path: 'advanced-form',
            name: `${pre}advanced-form`,
            meta: {
                ...meta,
                title: '高级表单'
            },
            component: () => import('@/pages/form/advanced-form')
        },
        {
            path: 'step-form',
            name: `${pre}step-form`,
            meta: {
                ...meta,
                title: '分步表单'
            },
            component: () => import('@/pages/form/step-form')
        },
        {
            path: 'detail',
            name: `${pre}detail`,
            meta: {
                ...meta,
                title: '表单详情'
            },
            component: () => import('@/pages/form/detail')
        }
    ]
};
