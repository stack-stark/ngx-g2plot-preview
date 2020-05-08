import { Menu } from './menu.interface';

export const menuList: Array<Menu> = [
    {
        name: 'Bar - 基础条形图',
        routerLink: '/preview/bar',
        children: null,
        nzIcon: 'info-circle',
    },
    {
        name: 'Line - 折线图',
        routerLink: '/index/common-components/ngx-gallery',
        children: null,
        nzIcon: 'picture',
    },
    {
        name: '状态管理器',
        routerLink: '/index/common-components/ngrx',
        children: null,
        nzIcon: 'database',
    },
];
