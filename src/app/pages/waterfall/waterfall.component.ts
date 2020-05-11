import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-waterfall',
  templateUrl: './waterfall.component.html',
  styleUrls: ['./waterfall.component.less']
})
export class WaterfallComponent implements OnInit {

  constructor() { }

  data = [
    { type: '日用品', money: 120 },
    { type: '伙食费', money: 900 },
    { type: '交通费', money: 200 },
    { type: '水电费', money: 300 },
    { type: '房租', money: 1200 },
    { type: '商场消费', money: 1000 },
    { type: '应酬红包', money: -2000 },
  ];

  options = {
    title: {
      visible: true,
      text: '每月收支情况（瀑布图）',
    },
    forceFit: true,
    data: this.data,
    padding: 'auto',
    xField: 'type',
    yField: 'money',
    meta: {
      type: {
        alias: '类别',
      },
      money: {
        alias: '金额',
      },
    },
    waterfallSize: 400
  };
  
  codes = {
    codeTs: {
      title: `waterfall.component.ts`,
      code: `import { Component, OnInit } from '@angular/core';

      @Component({
        selector: 'app-waterfall',
        templateUrl: './waterfall.component.html',
        styleUrls: ['./waterfall.component.less']
      })
      export class WaterfallComponent implements OnInit {
      
        constructor() { }
      
        data = [
          { type: '日用品', money: 120 },
          { type: '伙食费', money: 900 },
          { type: '交通费', money: 200 },
          { type: '水电费', money: 300 },
          { type: '房租', money: 1200 },
          { type: '商场消费', money: 1000 },
          { type: '应酬红包', money: -2000 },
        ];
      
        options = {
          title: {
            visible: true,
            text: '每月收支情况（瀑布图）',
          },
          forceFit: true,
          data: this.data,
          padding: 'auto',
          xField: 'type',
          yField: 'money',
          meta: {
            type: {
              alias: '类别',
            },
            money: {
              alias: '金额',
            },
          },
          waterfallSize: 400
        };
      }
      `,
    },
    codeHtml: {
      title: `waterfall.component.html`,
      code: `<div starkG2plotWaterfall [options]="options" style="width: 500px;"></div>`,
    },
  }

  ngOnInit(): void {
  }

}
