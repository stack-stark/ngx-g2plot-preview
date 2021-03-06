import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-radar',
  templateUrl: './radar.component.html',
  styleUrls: ['./radar.component.less']
})
export class RadarComponent {

  constructor() { }

  data = [
    { name: 'G2', star: 10178 },
    { name: 'G6', star: 7077 },
    { name: 'F2', star: 7345 },
    { name: 'L7', star: 2029 },
    { name: 'X6', star: 298 },
    { name: 'AVA', star: 806 },
  ];
  options = {
    data: this.data.map((d) => ({ ...d, star: Math.log(d.star) })),
    xField: 'name',
    yField: 'star',
    meta: {
      star: {
        alias: 'star 数量',
        min: 0,
        nice: true,
        formatter: (v) => Number(v).toFixed(2),
      },
    },
    xAxis: {
      tickLine: null,
    },
    yAxis: {
      label: false,
      grid: {
        alternateColor: 'rgba(0, 0, 0, 0.04)',
      },
    },
    // 开启辅助点
    point: {
      size: 2,
    },
    area: {},
  };


}
