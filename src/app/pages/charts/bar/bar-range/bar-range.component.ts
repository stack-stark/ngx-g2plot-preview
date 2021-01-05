import { Component, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-bar-range',
  templateUrl: './bar-range.component.html',
  styleUrls: ['./bar-range.component.less']
})
export class BarRangeComponent {

  constructor() { }

  data = [
    { type: '分类一', values: [76, 100] },
    { type: '分类二', values: [56, 108] },
    { type: '分类三', values: [38, 129] },
    { type: '分类四', values: [58, 155] },
    { type: '分类五', values: [45, 120] },
    { type: '分类六', values: [23, 99] },
    { type: '分类七', values: [18, 56] },
    { type: '分类八', values: [18, 34] },
  ];

  options = {
    data: this.data.reverse(),
    xField: 'values',
    yField: 'type',
    isRange: true,
    label: {
      position: 'middle',
      layout: [{ type: 'adjust-color' }],
    },
  };

  onError(e: EventEmitter<string>) {
    console.error(e);
  }

}
