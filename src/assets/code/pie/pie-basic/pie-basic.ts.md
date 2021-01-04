```js 
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie-basic',
  templateUrl: './pie-basic.component.html',
  styleUrls: ['./pie-basic.component.less']
})
export class PieBasicComponent {

  constructor() { }

  data = [
    { type: '分类一', value: 27 },
    { type: '分类二', value: 25 },
    { type: '分类三', value: 18 },
    { type: '分类四', value: 15 },
    { type: '分类五', value: 10 },
    { type: '其他', value: 5 },
  ];

  options = {
    appendPadding: 10,
    data: this.data,
    angleField: 'value',
    colorField: 'type',
    radius: 0.9,
    label: {
      type: 'inner',
      offset: '-30%',
      content: ({ percent }) => `${(percent * 100).toFixed(0)}%`,
      style: {
        fontSize: 14,
        textAlign: 'center',
      },
    },
    interactions: [{ type: 'element-active' }],
  };

}


```