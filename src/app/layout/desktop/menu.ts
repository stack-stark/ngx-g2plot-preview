import { Menu } from './menu.interface';

export const menuList: Array<Menu> = [
    {
        name: 'Line - 折线图',
        routerLink: null,
        open: true,
        children: [
            {
                name: 'basic - 基础折线图',
                routerLink: '/preview/line/lineBasic',
                children: null,
                nzIcon: 'line-chart',
            },
            {
                name: 'multiple - 多折线图',
                routerLink: '/preview/line/lineMultiple',
                children: null,
                nzIcon: 'line-chart',
            },
            {
                name: 'step - 阶梯折线图',
                routerLink: '/preview/line/lineStep',
                children: null,
                nzIcon: 'line-chart',
            },
        ],
        nzIcon: 'line-chart',
    },
    {
        name: 'area - 面积图',
        routerLink: null,
        open: false,
        children: [
            {
                name: 'basic - 基础面积图',
                routerLink: '/preview/areaBasic',
                children: null,
                nzIcon: 'line-chart',
            },
            {
                name: 'stacked - 堆积面积图',
                routerLink: '/preview/area/areaStacked',
                children: null,
                nzIcon: 'line-chart',
            },
            {
                name: 'percent - 百分百面积图',
                routerLink: '/preview/area/areaPercent',
                children: null,
                nzIcon: 'line-chart',
            },
        ],
        nzIcon: 'line-chart',
    },
    {
        name: 'column - 柱形图',
        routerLink: null,
        open: false,
        children: [
            {
                name: 'basic - 基础柱状图',
                routerLink: '/preview/column/columnBasic',
                children: null,
                nzIcon: 'line-chart',
            },
            {
                name: 'stacked - 堆叠柱状图',
                routerLink: '/preview/column/columnStacked',
                children: null,
                nzIcon: 'line-chart',
            },
            {
                name: 'grouped - 分组柱状图',
                routerLink: '/preview/column/columnGrouped',
                children: null,
                nzIcon: 'line-chart',
            },
            {
                name: 'percent - 百分百柱状图',
                routerLink: '/preview/column/columnPercent',
                children: null,
                nzIcon: 'line-chart',
            },
            {
                name: 'range - 区间柱状图',
                routerLink: '/preview/column/columnRange',
                children: null,
                nzIcon: 'line-chart',
            },
        ],
        nzIcon: 'line-chart',
    },
    {
        name: 'pie - 饼图',
        routerLink: null,
        open: false,
        children: [
            {
                name: 'pie - 饼图',
                routerLink: '/preview/pie/pieBasic',
                children: null,
                nzIcon: 'line-chart',
            },
            {
                name: 'donut - 环图',
                routerLink: '/preview/donut/donutBasic',
                children: null,
                nzIcon: 'line-chart',
            },
        ],
        nzIcon: 'line-chart',
    },
    {
        name: 'gauge - 仪表盘',
        routerLink: '/preview/gauge/gaugeBasic',
        children: null,
        nzIcon: 'line-chart',
    },
    {
        name: 'bar - 条形图',
        routerLink: null,
        children: [
            {
                name: 'basic - 基础条形图',
                routerLink: '/preview/bar/barBasic',
                children: null,
                nzIcon: 'line-chart',
            },
            {
                name: 'StackedBar - 堆叠条形图',
                routerLink: '/preview/bar/barStackedBar',
                children: null,
                nzIcon: 'line-chart',
            },
            {
                name: 'groupedBar - 分组条形图',
                routerLink: '/preview/bar/barGroupedBar',
                children: null,
                nzIcon: 'line-chart',
            },
            {
                name: 'percent - 百分百条形图',
                routerLink: '/preview/bar/barPercent',
                children: null,
                nzIcon: 'line-chart',
            },
            {
                name: 'rangeBar - 区间条形图',
                routerLink: '/preview/bar/barRangeBar',
                children: null,
                nzIcon: 'line-chart',
            },
        ],
        nzIcon: 'line-chart',
    },
    {
        name: 'waterfall - 瀑布图',
        routerLink: '/preview/waterfall/waterfallBasic',
        children: null,
        nzIcon: 'line-chart',
    },
    {
        name: 'scatter - 散点图',
        routerLink: '/preview/scatter/scatterBasic',
        children: null,
        nzIcon: 'line-chart',
    },

    // {
    //     name: 'dualLine - 双轴图',
    //     routerLink: '/preview/Histogram',
    //     children: [

    //     ],
    //     nzIcon: 'line-chart',
    // },

    // {
    //     name: 'Radar - 雷达图',
    //     routerLink: '/preview/Radar',
    //     children: null,
    //     nzIcon: 'line-chart',
    // },

    // {
    //     name: 'Histogram - 直方图',
    //     routerLink: '/preview/Histogram',
    //     children: null,
    //     nzIcon: 'line-chart',
    // },

    // {
    //     name: 'Donut - 环图',
    //     routerLink: '/preview/Donut',
    //     children: null,
    //     nzIcon: 'line-chart',
    // },
    // {
    //     name: 'Rose - 玫瑰图',
    //     routerLink: '/preview/Rose',
    //     children: null,
    //     nzIcon: 'line-chart',
    // },
    // {
    //     name: 'StackedRose - 堆叠玫瑰图',
    //     routerLink: '/preview/StackedRose',
    //     children: null,
    //     nzIcon: 'line-chart',
    // },
    // {
    //     name: 'GroupedRose - 分组玫瑰图',
    //     routerLink: '/preview/GroupedRose',
    //     children: null,
    //     nzIcon: 'line-chart',
    // },


    // {
    //     name: 'Bubble - 气泡图',
    //     routerLink: '/preview/Bubble',
    //     children: null,
    //     nzIcon: 'line-chart',
    // },
    // {
    //     name: 'Heatmap - 热力图',
    //     routerLink: '/preview/Heatmap',
    //     children: null,
    //     nzIcon: 'line-chart',
    // },
];
