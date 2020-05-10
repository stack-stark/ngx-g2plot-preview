import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-range-column',
  templateUrl: './range-column.component.html',
  styleUrls: ['./range-column.component.less']
})
export class RangeColumnComponent implements OnInit {

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
      text: '区间柱状图',
    },
    data: this.data,
    xField: 'type',
    yField: 'values',
  };

  codes = {
    codeTs: {
      title: `line.component.ts`,
      code: `import { Component, OnInit } from '@angular/core';

      @Component({
        selector: 'app-range-column',
        templateUrl: './range-column.component.html',
        styleUrls: ['./range-column.component.less']
      })
      export class RangeColumnComponent implements OnInit {
      
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
            text: '区间柱状图',
          },
          data: this.data,
          xField: 'type',
          yField: 'values',
        };
      }
      `,
    },
    codeHtml: {
      title: `line.component.html`,
      code: `<div starkG2plotLine [options]="options" style="width: 500px;"></div>`,
    },
  }

  ngOnInit(): void {
  }

}
