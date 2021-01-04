import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-column-range',
  templateUrl: './column-range.component.html',
  styleUrls: ['./column-range.component.less']
})
export class ColumnRangeComponent {

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
    data: this.data,
    xField: 'type',
    yField: 'values',
    isRange: true,
    label: {
      position: 'middle',
      layout: [{ type: 'adjust-color' }],
    },
  };

  onError(e) {
    console.log(e);
  }
  
}
