``` js
import { OnInit } from '@angular/core';
import { Component, ViewChild } from '@angular/core';
import { G2plotLineDirective } from 'ngx-g2plot';

@Component({
  selector: 'app-line-basic',
  templateUrl: './line-basic.component.html',
  styleUrls: ['./line-basic.component.less']
})
export class LineBasicComponent implements OnInit {

  constructor() { }

  @ViewChild('divG2plotLine') divG2plotLine: G2plotLineDirective;

  @ViewChild('divG2plotLineAjax') divG2plotLineAjax: G2plotLineDirective;

  data = [
    { year: '1991', value: 3 },
    { year: '1992', value: 4 },
    { year: '1993', value: 3.5 },
    { year: '1994', value: 5 },
    { year: '1995', value: 4.9 },
    { year: '1996', value: 6 },
    { year: '1997', value: 7 },
    { year: '1998', value: 9 },
    { year: '1999', value: 13 },
  ];

  /**
   * 基础折线图配置
   */
  options = {
    title: {
      visible: true,
      text: '折线图',
    },
    description: {
      visible: true,
      text: '用平滑的曲线代替折线。',
    },
    data: this.data,
    xField: 'year',
    yField: 'value',
  };

  dataAjax = [];

  /**
   * 模拟加载数据图表配置
   */
  optionsAjax = {
    data: this.dataAjax,
    xField: 'year',
    yField: 'value',
    label: {},
    point: {
      size: 5,
      shape: 'diamond',
      style: {
        fill: 'white',
        stroke: '#5B8FF9',
        lineWidth: 2,
      },
    },
    tooltip: { showMarkers: false },
    state: {
      active: {
        style: {
          shadowBlur: 4,
          stroke: '#000',
          fill: 'red',
        },
      },
    },
    interactions: [{ type: 'marker-active' }],
  };

  ngOnInit(): void {
    setTimeout(() => {
      this.dataAjax = [
        { year: '1991', value: 3 },
        { year: '1992', value: 4 },
        { year: '1993', value: 3.5 },
        { year: '1994', value: 5 },
        { year: '1995', value: 4.9 },
        { year: '1996', value: 6 },
        { year: '1997', value: 7 },
        { year: '1998', value: 9 },
        { year: '1999', value: 13 },
      ]
      this.divG2plotLineAjax.changeData(this.dataAjax);
    }, 5000);
  }


  updateConfig(): void {
    const options = {
      title: {
        visible: true,
        text: 'The line chart',
      },
      description: {
        visible: true,
        text: 'Replace broken lines with smooth curves.',
      },
      xField: 'year',
      yField: 'value',
    };
    this.divG2plotLine.instance.update(options); // 使用当前实例方法 Use the current instance method
    this.divG2plotLine.instance.render(); // 使用当前实例方法 Use the current instance method
  }

  changeData(): void {
    const data = [
      { year: '1991', value: 13 },
      { year: '1992', value: 14 },
      { year: '1993', value: 13.5 },
      { year: '1994', value: 15 },
      { year: '1995', value: 14.9 },
      { year: '1996', value: 16 },
      { year: '1997', value: 17 },
      { year: '1998', value: 19 },
      { year: '1999', value: 23 },
    ];
    this.divG2plotLine.changeData(data);
  }

  destroy(): void {
    this.divG2plotLine.destroy();
  }


}

```