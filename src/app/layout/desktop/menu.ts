import { Menu } from './menu.interface';

export const menuList: Array<Menu> = [
    {
        name: 'Bar - 基础条形图',
        routerLink: '/preview/Bar',
        children: null,
        nzIcon: 'line-chart',
    },
    {
        name: 'Line - 折线图',
        routerLink: '/preview/Line',
        children: null,
        nzIcon: 'line-chart',
    },
    {
        name: 'Area - 面积图',
        routerLink: '/preview/Area',
        children: null,
        nzIcon: 'line-chart',
    },
    {
        name: 'StepLine - 阶梯折图',
        routerLink: '/preview/StepLine',
        children: null,
        nzIcon: 'line-chart',
    },
    {
        name: 'StackedArea - 堆叠面积图',
        routerLink: '/preview/StackedArea',
        children: null,
        nzIcon: 'line-chart',
    },
    {
        name: 'Column - 柱状图',
        routerLink: '/preview/Column',
        children: null,
        nzIcon: 'line-chart',
    },
    {
        name: 'StackedColumn - 堆叠柱状图',
        routerLink: '/preview/StackedColumn',
        children: null,
        nzIcon: 'line-chart',
    },
    {
        name: 'GroupedColumn - 分组柱状',
        routerLink: '/preview/GroupedColumn',
        children: null,
        nzIcon: 'line-chart',
    },
    {
        name: 'RangeColumn - 区间柱状图',
        routerLink: '/preview/RangeColumn',
        children: null,
        nzIcon: 'line-chart',
    },
];
