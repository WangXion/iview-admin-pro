const pre = '/form/';

export default {
    path: '/form',
    title: '表单页面',
    header: 'home',
    custom: 'i-icon-demo i-icon-demo-form',
    children: [
        {
            path: `${pre}basic-form`,
            title: '基础表单'
        },
        {
            path: `${pre}advanced-form`,
            title: '高级表单'
        },
        {
            path: `${pre}step-form`,
            title: '分步表单'
        },
        {
            path: `${pre}detail`,
            title: '表单详情'
        }
    ]
}
