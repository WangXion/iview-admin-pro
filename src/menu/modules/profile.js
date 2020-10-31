const pre = '/profile/';

export default {
    path: '/profile',
    title: '详情页面',
    header: 'home',
    custom: 'i-icon-demo i-icon-demo-profile',
    children: [
        {
            path: `${pre}basic`,
            title: '基础详情页'
        },
        {
            path: `${pre}advanced`,
            title: '高级详情页'
        }
    ]
}
