import BasicLayout from '@/layouts/basic-layout';

const meta = {
    auth: true
};

const pre = 'editor-';

export default {
    path: '/editor',
    name: 'editor',
    redirect: {
        name: `${pre}quill`
    },
    meta,
    component: BasicLayout,
    children: [
        {
            path: 'quill',
            name: `${pre}quill`,
            meta: {
                ...meta,
                title: 'Quill'
            },
            component: () => import('@/pages/editor/quill')
        },
        {
            path: 'simpleMDE',
            name: `${pre}simpleMDE`,
            meta: {
                ...meta,
                title: 'simpleMDE'
            },
            component: () => import('@/pages/editor/simpleMDE')
        }
    ]
};
