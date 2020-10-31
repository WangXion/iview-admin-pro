// 菜单，侧边栏
import dashboard from './modules/dashboard';
import form from './modules/form';
import list from './modules/list';
import search from './modules/search';
import profile from './modules/profile';
import result from './modules/result';
import exception from './modules/exception';
import setting from './modules/setting';
import editor from './modules/editor';
import tool from './modules/tool';

// 系统
import log from './modules/log';

export default [
    dashboard,
    form,
    list,
    search,
    profile,
    result,
    exception,
    setting,
    editor,
    tool,
    {
        path: '/i18n',
        title: '$t:menu.i18n',
        header: 'home',
        custom: 'i-icon-demo i-icon-demo-i18n'
    },
    log
];
