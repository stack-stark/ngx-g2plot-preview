import { Component, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-donut-basic',
  templateUrl: './donut-basic.component.html',
  styleUrls: ['./donut-basic.component.less']
})
export class DonutBasicComponent {

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
    radius: 1,
    innerRadius: 0.6,
    label: {
      type: 'inner',
      offset: '-50%',
      content: '{value}',
      style: {
        textAlign: 'center',
        fontSize: 14,
      },
    },
    interactions: [{ type: 'element-selected' }, { type: 'element-active' }],
    statistic: {
      title: false,
      content: {
        style: {
          whiteSpace: 'pre-wrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        },
        formatter: () => 'AntV\nG2Plot',
      },
    },
  };

  onError(e: EventEmitter<string>) {
    console.error(e);
  }

}
