import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grouped-column',
  templateUrl: './grouped-column.component.html',
  styleUrls: ['./grouped-column.component.less']
})
export class GroupedColumnComponent implements OnInit {

  constructor() { }

  data = [
    {
      name: 'London',
      月份: 'Jan.',
      月均降雨量: 18.9,
    },
    {
      name: 'London',
      月份: 'Feb.',
      月均降雨量: 28.8,
    },
    {
      name: 'London',
      月份: 'Mar.',
      月均降雨量: 39.3,
    },
    {
      name: 'London',
      月份: 'Apr.',
      月均降雨量: 81.4,
    },
    {
      name: 'London',
      月份: 'May',
      月均降雨量: 47,
    },
    {
      name: 'London',
      月份: 'Jun.',
      月均降雨量: 20.3,
    },
    {
      name: 'London',
      月份: 'Jul.',
      月均降雨量: 24,
    },
    {
      name: 'London',
      月份: 'Aug.',
      月均降雨量: 35.6,
    },
    {
      name: 'Berlin',
      月份: 'Jan.',
      月均降雨量: 12.4,
    },
    {
      name: 'Berlin',
      月份: 'Feb.',
      月均降雨量: 23.2,
    },
    {
      name: 'Berlin',
      月份: 'Mar.',
      月均降雨量: 34.5,
    },
    {
      name: 'Berlin',
      月份: 'Apr.',
      月均降雨量: 99.7,
    },
    {
      name: 'Berlin',
      月份: 'May',
      月均降雨量: 52.6,
    },
    {
      name: 'Berlin',
      月份: 'Jun.',
      月均降雨量: 35.5,
    },
    {
      name: 'Berlin',
      月份: 'Jul.',
      月均降雨量: 37.4,
    },
    {
      name: 'Berlin',
      月份: 'Aug.',
      月均降雨量: 42.4,
    },
  ];

  options = {
    title: {
      visible: true,
      text: '分组柱状图',
    },
    forceFit: true,
    data: this.data,
    xField: '月份',
    yField: '月均降雨量',
    yAxis: {
      min: 0,
    },
    label: {
      visible: true,
    },
    groupField: 'name',
  };

  codes = {
    codeTs: {
      title: `grouped-column.component.ts`,
      code: `import { Component, OnInit } from '@angular/core';

      @Component({
        selector: 'app-grouped-column',
        templateUrl: './grouped-column.component.html',
        styleUrls: ['./grouped-column.component.less']
      })
      export class GroupedColumnComponent implements OnInit {
      
        constructor() { }
      
         data = [
          {
            name: 'London',
            月份: 'Jan.',
            月均降雨量: 18.9,
          },
          {
            name: 'London',
            月份: 'Feb.',
            月均降雨量: 28.8,
          },
          {
            name: 'London',
            月份: 'Mar.',
            月均降雨量: 39.3,
          },
          {
            name: 'London',
            月份: 'Apr.',
            月均降雨量: 81.4,
          },
          {
            name: 'London',
            月份: 'May',
            月均降雨量: 47,
          },
          {
            name: 'London',
            月份: 'Jun.',
            月均降雨量: 20.3,
          },
          {
            name: 'London',
            月份: 'Jul.',
            月均降雨量: 24,
          },
          {
            name: 'London',
            月份: 'Aug.',
            月均降雨量: 35.6,
          },
          {
            name: 'Berlin',
            月份: 'Jan.',
            月均降雨量: 12.4,
          },
          {
            name: 'Berlin',
            月份: 'Feb.',
            月均降雨量: 23.2,
          },
          {
            name: 'Berlin',
            月份: 'Mar.',
            月均降雨量: 34.5,
          },
          {
            name: 'Berlin',
            月份: 'Apr.',
            月均降雨量: 99.7,
          },
          {
            name: 'Berlin',
            月份: 'May',
            月均降雨量: 52.6,
          },
          {
            name: 'Berlin',
            月份: 'Jun.',
            月均降雨量: 35.5,
          },
          {
            name: 'Berlin',
            月份: 'Jul.',
            月均降雨量: 37.4,
          },
          {
            name: 'Berlin',
            月份: 'Aug.',
            月均降雨量: 42.4,
          },
        ];
      
        options = {
          title: {
            visible: true,
            text: '分组柱状图',
          },
          forceFit: true,
          data: this.data,
          xField: '月份',
          yField: '月均降雨量',
          yAxis: {
            min: 0,
          },
          label: {
            visible: true,
          },
          groupField: 'name',
        };
      }
      `,
    },
    codeHtml: {
      title: `grouped-column.component.html`,
      code: `<div starkG2plotGroupedColumn [options]="options" style="width: 500px;"></div>`,
    },
  }

  ngOnInit(): void {
  }

}
