import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.less']
})
export class AboutComponent implements OnInit {

  constructor() { }

  directiveList = [
    { directive: 'starkG2plotLine', name: 'Line - 折线图', export: 'g2plotLine', document: 'https://antv-g2plot.gitee.io/zh/docs/manual/plots/line' },
    { directive: 'starkG2plotArea', name: 'Area - 面积图', export: 'g2plotArea', document: 'https://antv-g2plot.gitee.io/zh/docs/manual/plots/area' },
    { directive: 'starkG2plotStepLine', name: 'StepLine - 阶梯折图', export: 'g2plotStepLine', document: 'https://antv-g2plot.gitee.io/zh/docs/manual/plots/stepLine' },
    { directive: 'starkG2plotStackedArea', name: 'StackedArea - 堆叠面积图', export: 'g2plotStackedArea', document: 'https://antv-g2plot.gitee.io/zh/docs/manual/plots/stacked-area' },
    { directive: 'starkG2plotColumn', name: 'Column - 柱状图', export: 'g2plotColumn', document: 'https://antv-g2plot.gitee.io/zh/docs/manual/plots/column' },
    { directive: 'starkG2plotStackedColumn', name: 'StackedColumn - 堆叠柱状图', export: 'g2plotStackedColumn', document: 'https://antv-g2plot.gitee.io/zh/docs/manual/plots/stacked-column' },
    { directive: 'starkG2plotGroupedColumn', name: 'GroupedColumn - 分组柱状图', export: 'g2plotGroupedColumn', document: 'https://antv-g2plot.gitee.io/zh/docs/manual/plots/grouped-column' },
    { directive: 'starkG2plotRangeColumn', name: 'RangeColumn - 区间柱状图', export: 'g2plotRangeColumn', document: 'https://antv-g2plot.gitee.io/zh/docs/manual/plots/range-column' },
    { directive: 'starkG2plotHistogram', name: 'Histogram - 直方图', export: 'g2plotHistogram', document: 'https://antv-g2plot.gitee.io/zh/docs/manual/plots/histogram' },
    { directive: 'starkG2plotWaterfall', name: 'Waterfall - 瀑布图', export: 'g2plotWaterfall', document: 'https://antv-g2plot.gitee.io/zh/docs/manual/plots/waterfall' },
    { directive: 'starkG2plotBar', name: 'Bar - 基础条形图', export: 'g2plotBar', document: 'https://antv-g2plot.gitee.io/zh/docs/manual/plots/bar' },
    { directive: 'starkG2plotStackedBar', name: 'StackedBar - 堆叠条形图', export: 'g2plotStackedBar', document: 'https://antv-g2plot.gitee.io/zh/docs/manual/plots/stacked-bar' },
    { directive: 'starkG2plotGroupedBar', name: 'GroupedBar - 分组条形图', export: 'g2plotGroupedBar', document: 'https://antv-g2plot.gitee.io/zh/docs/manual/plots/grouped-bar' },
    { directive: 'starkG2plotRangeBar', name: 'RangeBar - 区间条形图', export: 'g2plotRangeBar', document: 'https://antv-g2plot.gitee.io/zh/docs/manual/plots/range-bar' },
    { directive: 'starkG2plotPie', name: ' Pie - 饼图', export: 'g2plotPie', document: 'https://antv-g2plot.gitee.io/zh/docs/manual/plots/pie' },
    { directive: 'starkG2plotDonut', name: 'Donut - 环图', export: 'g2plotDonut', document: 'https://antv-g2plot.gitee.io/zh/docs/manual/plots/donut' },
    { directive: 'starkG2plotRose', name: 'Rose - 玫瑰图', export: 'g2plotRose', document: 'https://antv-g2plot.gitee.io/zh/docs/manual/plots/rose' },
    { directive: 'starkG2plotStackedRose', name: 'StackedRose - 堆叠玫瑰图', export: 'g2plotStackedRose', document: 'https://antv-g2plot.gitee.io/zh/docs/manual/plots/stacked-rose' },
    { directive: 'starkG2plotGroupedRose', name: 'GroupedRose - 分组玫瑰图', export: 'g2plotGroupedRose', document: 'https://antv-g2plot.gitee.io/zh/docs/manual/plots/grouped-rose' },
    { directive: 'starkG2plotRadar', name: 'Radar - 雷达图', export: 'g2plotRadar', document: 'https://antv-g2plot.gitee.io/zh/docs/manual/plots/radar' },
    { directive: 'starkG2plotScatter', name: 'Scatter - 散点图', export: 'g2plotScatter', document: 'https://antv-g2plot.gitee.io/zh/docs/manual/plots/scatter' },
    { directive: 'starkG2plotBubble', name: 'Bubble - 气泡图', export: 'g2plotBubble', document: 'https://antv-g2plot.gitee.io/zh/docs/manual/plots/bubble' },
    { directive: 'starkG2plotHeatmap', name: 'Heatmap - 热力图', export: 'g2plotHeatmap', document: 'https://antv-g2plot.gitee.io/zh/docs/manual/plots/heatmap' },
    { directive: 'starkG2plotDensityHeatmap', name: 'DensityHeatmap - 密度热力图', export: 'g2plotDensityHeatmap', document: 'https://antv-g2plot.gitee.io/zh/docs/manual/plots/heatmap' },
    { directive: 'starkG2plotTreemap', name: 'Treemap - 矩形树图', export: 'g2plotTreemap', document: 'https://antv-g2plot.gitee.io/zh/docs/manual/plots/treemap' },
    { directive: 'starkG2plotCalendar', name: 'Calendar - 日历图', export: 'g2plotCalendar', document: 'https://antv-g2plot.gitee.io/zh/docs/manual/plots/calendar' },
    { directive: 'starkG2plotBullet', name: 'Bullet - 子弹图', export: 'g2plotBullet', document: 'https://antv-g2plot.gitee.io/zh/docs/manual/plots/bullet' },
    { directive: 'starkG2plotGauge', name: 'Gauge - 仪表盘', export: 'g2plotGauge', document: 'https://antv-g2plot.gitee.io/zh/docs/manual/plots/gauge' },
    { directive: 'starkG2plotLiquid', name: 'Liquid - 水波图', export: 'g2plotLiquid', document: 'https://antv-g2plot.gitee.io/zh/docs/manual/plots/liquid' },
    { directive: 'starkG2plotWordClord', name: 'WordClord - 词云', export: 'g2plotWordClord', document: 'https://antv-g2plot.gitee.io/zh/docs/manual/plots/word-clourd' },
  ];

  ngOnInit(): void {
  }

}
