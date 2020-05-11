import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-range-bar',
  templateUrl: './range-bar.component.html',
  styleUrls: ['./range-bar.component.less']
})
export class RangeBarComponent implements OnInit {

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
    title: {
      visible: true,
      text: '区间条形图',
    },
    data: this.data,
    xField: 'values',
    yField: 'type',
  }

  codes = {
    codeTs: {
      title: `range-bar.component.ts`,
      code: `import { Component, OnInit } from '@angular/core';

      @Component({
        selector: 'app-range-bar',
        templateUrl: './range-bar.component.html',
        styleUrls: ['./range-bar.component.less']
      })
      export class RangeBarComponent implements OnInit {
      
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
          title: {
            visible: true,
            text: '区间条形图',
          },
          data: this.data,
          xField: 'values',
          yField: 'type',
        }
      }
      `,
    },
    codeHtml: {
      title: `range-bar.component.html`,
      code: `<div starkG2plotRangeBar [options]="options" style="width: 500px;"></div>`,
    },
  }

  ngOnInit(): void {
  }

}
