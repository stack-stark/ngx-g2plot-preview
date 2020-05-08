import { Menu } from './menu.interface';

export const menuList: Array<Menu> = [
    {
        name: 'Bar - 基础条形图',
        routerLink: '/preview/bar',
        children: null,
        nzIcon: 'line-chart',
    },
    {
        name: 'Line - 折线图',
        routerLink: '/preview/line',
        children: null,
        nzIcon: 'line-chart',
    },
    {
        name: 'Area - 面积图',
        routerLink: '/preview/line',
        children: null,
        nzIcon: 'line-chart',
    },
    {
        name: 'StepLine - 阶梯折图',
        routerLink: '/preview/line',
        children: null,
        nzIcon: 'line-chart',
    },
    {
        name: 'StackedArea - 堆叠面积图',
        routerLink: '/preview/line',
        children: null,
        nzIcon: 'line-chart',
    },
    {
        name: 'Column - 柱状图',
        routerLink: '/preview/line',
        children: null,
        nzIcon: 'line-chart',
    },
    {
        name: 'StackedColumn - 堆叠柱状图',
        routerLink: '/preview/line',
        children: null,
        nzIcon: 'line-chart',
    },
];
