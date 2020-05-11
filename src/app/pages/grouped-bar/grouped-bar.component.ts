import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grouped-bar',
  templateUrl: './grouped-bar.component.html',
  styleUrls: ['./grouped-bar.component.less']
})
export class GroupedBarComponent implements OnInit {

  constructor() { }

  data = [
    {
      label: 'Mon.',
      type: 'series1',
      value: 2800,
    },
    {
      label: 'Mon.',
      type: 'series2',
      value: 2260,
    },
    {
      label: 'Tues.',
      type: 'series1',
      value: 1800,
    },
    {
      label: 'Tues.',
      type: 'series2',
      value: 1300,
    },
    {
      label: 'Wed.',
      type: 'series1',
      value: 950,
    },
    {
      label: 'Wed.',
      type: 'series2',
      value: 900,
    },
    {
      label: 'Thur.',
      type: 'series1',
      value: 500,
    },
    {
      label: 'Thur.',
      type: 'series2',
      value: 390,
    },
    {
      label: 'Fri.',
      type: 'series1',
      value: 170,
    },
    {
      label: 'Fri.',
      type: 'series2',
      value: 100,
    },
  ];

  options = {
    title: {
      visible: true,
      text: '分组条形图',
    },
    data: this.data,
    xField: 'value',
    yField: 'label',
    groupField: 'type',
    label: {
      formatter: (v) => `${v}`.replace(/\d{1,3}(?=(\d{3})+$)/g, (s) => `${s},`),
    },
  };

  codes = {
    codeTs: {
      title: `grouped-bar.component.ts`,
      code: `import { Component, OnInit } from '@angular/core';

      @Component({
        selector: 'app-grouped-bar',
        templateUrl: './grouped-bar.component.html',
        styleUrls: ['./grouped-bar.component.less']
      })
      export class GroupedBarComponent implements OnInit {
      
        constructor() { }
      
        data = [
          {
            label: 'Mon.',
            type: 'series1',
            value: 2800,
          },
          {
            label: 'Mon.',
            type: 'series2',
            value: 2260,
          },
          {
            label: 'Tues.',
            type: 'series1',
            value: 1800,
          },
          {
            label: 'Tues.',
            type: 'series2',
            value: 1300,
          },
          {
            label: 'Wed.',
            type: 'series1',
            value: 950,
          },
          {
            label: 'Wed.',
            type: 'series2',
            value: 900,
          },
          {
            label: 'Thur.',
            type: 'series1',
            value: 500,
          },
          {
            label: 'Thur.',
            type: 'series2',
            value: 390,
          },
          {
            label: 'Fri.',
            type: 'series1',
            value: 170,
          },
          {
            label: 'Fri.',
            type: 'series2',
            value: 100,
          },
        ];
      
        options = {
          title: {
            visible: true,
            text: '分组条形图',
          },
          data: this.data,
          xField: 'value',
          yField: 'label',
          groupField: 'type',
        };
      }
      `,
    },
    codeHtml: {
      title: `grouped-bar.component.html`,
      code: `<div starkG2plotGroupedBar [options]="options" style="width: 500px;"></div>`,
    },
  };

  ngOnInit(): void {
  }

}
