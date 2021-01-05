import { Component, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-bullet-basic',
  templateUrl: './bullet-basic.component.html',
  styleUrls: ['./bullet-basic.component.less']
})
export class BulletBasicComponent {

  constructor() { }

  data = [
    {
      title: '满意度',
      ranges: [40, 70, 100],
      measures: [80],
      target: 85,
    },
  ];

  options = {
    data: this.data,
    measureField: 'measures',
    rangeField: 'ranges',
    targetField: 'target',
    xField: 'title',
    color: {
      range: ['#FFbcb8', '#FFe0b0', '#bfeec8'],
      measure: '#1890ff',
      target: '#39a3f4',
    },
    xAxis: {
      line: null,
    },
    yAxis: false,
    label: {
      target: true,
    },
    // 自定义 legend
    legend: {
      custom: true,
      position: 'bottom',
      items: [
        {
          value: '差',
          name: '差',
          marker: { symbol: 'square', style: { fill: '#FFbcb8', r: 5 } },
        },
        {
          value: '良',
          name: '良',
          marker: { symbol: 'square', style: { fill: '#FFe0b0', r: 5 } },
        },
        {
          value: '优',
          name: '优',
          marker: { symbol: 'square', style: { fill: '#bfeec8', r: 5 } },
        },
        {
          value: '实际值',
          name: '实际值',
          marker: { symbol: 'square', style: { fill: '#1890ff', r: 5 } },
        },
        {
          value: '目标值',
          name: '目标值',
          marker: { symbol: 'line', style: { stroke: '#39a3f4', r: 5 } },
        },
      ],
    },
  };

  onError(e: EventEmitter<string>) {
    console.error(e);
  }
}
