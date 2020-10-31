const pre = '/dashboard/';

export default {
    path: '/dashboard',
    title: 'Dashboard',
    header: 'home',
    custom: 'i-icon-demo i-icon-demo-dashboard',
    children: [
        {
            path: `${pre}console`,
            title: '主控台'
        },
        {
            path: `${pre}monitor`,
            title: '监控页'
        },
        {
            path: `${pre}workplace`,
            title: '工作台'
        }
    ]
}
