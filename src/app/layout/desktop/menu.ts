import { Menu } from './menu.interface';

export const menuList: Array<Menu> = [
    // {
    //     name: 'About - 关于',
    //     routerLink: '/preview/About',
    //     children: null,
    //     nzIcon: 'bulb',
    // },
    {
        name: 'Line - 折线图',
        routerLink: null,
        open: true,
        children: [
            {
                name: 'Line - 基础折线图',
                routerLink: '/preview/line/line-basic',
                children: null,
                nzIcon: 'line-chart',
            },
            {
                name: 'Line - 多折线图',
                routerLink: '/preview/Line',
                children: null,
                nzIcon: 'line-chart',
            },
            {
                name: 'Line - 阶梯折线图',
                routerLink: '/preview/Line',
                children: null,
                nzIcon: 'line-chart',
            },
        ],
        nzIcon: 'line-chart',
    },
    {
        name: 'Area - 面积图',
        routerLink: '/preview/Area',
        open: true,
        children: [
            {
                name: 'Area - 基础面积图',
                routerLink: '/preview/Area',
                children: null,
                nzIcon: 'line-chart',
            },
            {
                name: 'Area - 堆积面积图',
                routerLink: '/preview/Area',
                children: null,
                nzIcon: 'line-chart',
            },
            {
                name: 'Area - 百分百面积图',
                routerLink: '/preview/Area',
                children: null,
                nzIcon: 'line-chart',
            },
        ],
        nzIcon: 'line-chart',
    },
    {
        name: 'Bar - 柱形图',
        routerLink: '/preview/Bar',
        open: true,
        children: [
            {
                name: 'Bar - 基础柱状图',
                routerLink: '/preview/Bar',
                children: null,
                nzIcon: 'line-chart',
            },
            {
                name: 'Bar - 堆叠柱状图',
                routerLink: '/preview/Bar',
                children: null,
                nzIcon: 'line-chart',
            },
            {
                name: 'Bar - 分组柱状图',
                routerLink: '/preview/Bar',
                children: null,
                nzIcon: 'line-chart',
            },
            {
                name: 'Bar - 百分百柱状图',
                routerLink: '/preview/Bar',
                children: null,
                nzIcon: 'line-chart',
            },
            {
                name: 'Bar - 区间柱状图',
                routerLink: '/preview/Bar',
                children: null,
                nzIcon: 'line-chart',
            },
        ],
        nzIcon: 'line-chart',
    },

    {
        name: 'Pie - 饼图',
        routerLink: '/preview/Pie',
        open: true,
        children: [
            {
                name: 'Pie - 饼图',
                routerLink: '/preview/Pie',
                children: null,
                nzIcon: 'line-chart',
            },
            {
                name: 'Pie - 环图',
                routerLink: '/preview/Pie',
                children: null,
                nzIcon: 'line-chart',
            },
        ],
        nzIcon: 'line-chart',
    },


    {
        name: 'Bar - 仪表盘',
        routerLink: '/preview/Bar',
        children: [
            {
                name: 'Bar - 仪表盘',
                routerLink: '/preview/Bar',
                children: null,
                nzIcon: 'line-chart',
            }
        ],
        nzIcon: 'line-chart',
    },

    {
        name: 'Bar - 条形图',
        routerLink: '/preview/Bar',
        children: [
            {
                name: 'StackedBar - 基础条形图',
                routerLink: '/preview/StackedBar',
                children: null,
                nzIcon: 'line-chart',
            },
            {
                name: 'StackedBar - 堆叠条形图',
                routerLink: '/preview/StackedBar',
                children: null,
                nzIcon: 'line-chart',
            },
            {
                name: 'GroupedBar - 分组条形图',
                routerLink: '/preview/GroupedBar',
                children: null,
                nzIcon: 'line-chart',
            },
            {
                name: 'RangeBar - 百分百条形图',
                routerLink: '/preview/RangeBar',
                children: null,
                nzIcon: 'line-chart',
            },
            {
                name: 'RangeBar - 区间条形图',
                routerLink: '/preview/RangeBar',
                children: null,
                nzIcon: 'line-chart',
            },
        ],
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
        name: 'Waterfall - 瀑布图',
        routerLink: '/preview/Waterfall',
        children: [
            {
                name: 'Waterfall - 瀑布图',
                routerLink: '/preview/Waterfall',
                children: null,
                nzIcon: 'line-chart',
            },
        ],
        nzIcon: 'line-chart',
    },
    {
        name: 'Scatter - 散点图',
        routerLink: '/preview/Scatter',
        children: null,
        nzIcon: 'line-chart',
    },

    {
        name: 'Histogram - 双轴图',
        routerLink: '/preview/Histogram',
        children: null,
        nzIcon: 'line-chart',
    },

    {
        name: 'Radar - 雷达图',
        routerLink: '/preview/Radar',
        children: null,
        nzIcon: 'line-chart',
    },

    {
        name: 'Histogram - 直方图',
        routerLink: '/preview/Histogram',
        children: null,
        nzIcon: 'line-chart',
    },

    {
        name: 'Donut - 环图',
        routerLink: '/preview/Donut',
        children: null,
        nzIcon: 'line-chart',
    },
    {
        name: 'Rose - 玫瑰图',
        routerLink: '/preview/Rose',
        children: null,
        nzIcon: 'line-chart',
    },
    {
        name: 'StackedRose - 堆叠玫瑰图',
        routerLink: '/preview/StackedRose',
        children: null,
        nzIcon: 'line-chart',
    },
    {
        name: 'GroupedRose - 分组玫瑰图',
        routerLink: '/preview/GroupedRose',
        children: null,
        nzIcon: 'line-chart',
    },


    {
        name: 'Bubble - 气泡图',
        routerLink: '/preview/Bubble',
        children: null,
        nzIcon: 'line-chart',
    },
    {
        name: 'Heatmap - 热力图',
        routerLink: '/preview/Heatmap',
        children: null,
        nzIcon: 'line-chart',
    },
];
