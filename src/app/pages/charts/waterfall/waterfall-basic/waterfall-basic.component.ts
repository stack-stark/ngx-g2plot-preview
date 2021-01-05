import { Component, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-waterfall-basic',
  templateUrl: './waterfall-basic.component.html',
  styleUrls: ['./waterfall-basic.component.less']
})
export class WaterfallBasicComponent {

  constructor() { }

  data = [
    { type: '日用品', money: 120 },
    { type: '伙食费', money: 900 },
    { type: '交通费', money: 200 },
    { type: '水电费', money: 300 },
    { type: '房租', money: 1200 },
    { type: '商场消费', money: 1000 },
    { type: '红包收入', money: -2000 },
  ];

  options = {
    data: this.data,
    xField: 'type',
    yField: 'money',
    appendPadding: [15, 0, 0, 0],
    meta: {
      type: {
        alias: '类别',
      },
      money: {
        alias: '收支',
        formatter: (v) => `${v} 元`,
      },
    },
    label: {
      style: { fontSize: 10, fill: 'rgba(0,0,0,0.65)' },
      layout: [{ type: 'interval-adjust-position' }],
    },
    total: {
      label: '总支出',
      style: {
        fill: '#96a6a6',
      },
    },
  };

  onError(e: EventEmitter<string>) {
    console.error(e);
  }

}
