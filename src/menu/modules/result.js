const pre = '/result/';

export default {
    path: '/result',
    title: '结果页面',
    header: 'home',
    custom: 'i-icon-demo i-icon-demo-result',
    children: [
        {
            path: `${pre}success`,
            title: '成功页'
        },
        {
            path: `${pre}fail`,
            title: '失败页'
        }
    ]
}
