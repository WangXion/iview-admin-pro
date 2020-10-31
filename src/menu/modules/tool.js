const pre = '/tool/';

export default {
    path: '/tool',
    title: '工具',
    header: 'home',
    custom: 'i-icon-demo i-icon-demo-tool',
    children: [
        {
            path: `${pre}page-cache`,
            title: '页面缓存',
            children: [
                {
                    path: `${pre}page-cache/on`,
                    title: '开启缓存'
                },
                {
                    path: `${pre}page-cache/off`,
                    title: '关闭缓存'
                },
                {
                    path: `${pre}page-cache/params/1`,
                    title: '带参路由缓存1'
                },
                {
                    path: `${pre}page-cache/params/2`,
                    title: '带参路由缓存2'
                }
            ]
        },
        {
            path: `${pre}log`,
            title: '日志',
            children: [
                {
                    path: `${pre}log/record`,
                    title: '日志记录'
                },
                {
                    path: `${pre}log/error`,
                    title: '错误捕捉'
                },
                {
                    path: `${pre}log/ajax`,
                    title: 'Ajax 错误'
                },
                {
                    path: `${pre}log/console`,
                    title: '控制台日志'
                }
            ]
        }
    ]
}
