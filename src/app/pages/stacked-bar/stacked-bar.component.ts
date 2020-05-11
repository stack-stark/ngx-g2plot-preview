import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stacked-bar',
  templateUrl: './stacked-bar.component.html',
  styleUrls: ['./stacked-bar.component.less']
})
export class StackedBarComponent implements OnInit {

  constructor() { }

  data = [
    {
      地区: '华东',
      细分: '公司',
      销售额: 1454715.807999998,
    },
    {
      地区: '华东',
      细分: '消费者',
      销售额: 2287358.261999998,
    },
    {
      地区: '中南',
      细分: '公司',
      销售额: 1335665.3239999984,
    },
    {
      地区: '中南',
      细分: '消费者',
      销售额: 2057936.7620000008,
    },
    {
      地区: '东北',
      细分: '公司',
      销售额: 834842.827,
    },
    {
      地区: '东北',
      细分: '消费者',
      销售额: 1323985.6069999991,
    },
    {
      地区: '华北',
      细分: '公司',
      销售额: 804769.4689999995,
    },
    {
      地区: '华北',
      细分: '消费者',
      销售额: 1220430.5610000012,
    },
    {
      地区: '西南',
      细分: '公司',
      销售额: 469341.684,
    },
    {
      地区: '西南',
      细分: '消费者',
      销售额: 677302.8919999995,
    },
    {
      地区: '西北',
      细分: '公司',
      销售额: 253458.1840000001,
    },
    {
      地区: '西北',
      细分: '消费者',
      销售额: 458058.1039999998,
    },
  ];

  options = {
    forceFit: true,
    title: {
      visible: true,
      text: '百分比堆叠条形图',
    },
    data: this.data,
    yField: '地区',
    xField: '销售额',
    xAxis: {
      formatter: (v) => Math.round(v / 10000) + '万',
    },
    stackField: '细分',
  }

  codes = {
    codeTs: {
      title: `stacked-bar.component.ts`,
      code: `import { Component, OnInit } from '@angular/core';

      @Component({
        selector: 'app-stacked-bar',
        templateUrl: './stacked-bar.component.html',
        styleUrls: ['./stacked-bar.component.less']
      })
      export class StackedBarComponent implements OnInit {
      
        constructor() { }
      
        data = [
          {
            地区: '华东',
            细分: '公司',
            销售额: 1454715.807999998,
          },
          {
            地区: '华东',
            细分: '消费者',
            销售额: 2287358.261999998,
          },
          {
            地区: '中南',
            细分: '公司',
            销售额: 1335665.3239999984,
          },
          {
            地区: '中南',
            细分: '消费者',
            销售额: 2057936.7620000008,
          },
          {
            地区: '东北',
            细分: '公司',
            销售额: 834842.827,
          },
          {
            地区: '东北',
            细分: '消费者',
            销售额: 1323985.6069999991,
          },
          {
            地区: '华北',
            细分: '公司',
            销售额: 804769.4689999995,
          },
          {
            地区: '华北',
            细分: '消费者',
            销售额: 1220430.5610000012,
          },
          {
            地区: '西南',
            细分: '公司',
            销售额: 469341.684,
          },
          {
            地区: '西南',
            细分: '消费者',
            销售额: 677302.8919999995,
          },
          {
            地区: '西北',
            细分: '公司',
            销售额: 253458.1840000001,
          },
          {
            地区: '西北',
            细分: '消费者',
            销售额: 458058.1039999998,
          },
        ];
      
        options = {
          forceFit: true,
          title: {
            visible: true,
            text: '百分比堆叠条形图',
          },
          data: this.data,
          yField: '地区',
          xField: '销售额',
          xAxis: {
            formatter: (v) => Math.round(v / 10000) + '万',
          },
          stackField: '细分',
        }
      }
      `,
    },
    codeHtml: {
      title: `stacked-bar.component.html`,
      code: `<div starkG2plotStackedBar [options]="options" style="width: 500px;"></div>`,
    },
  }

  ngOnInit(): void {
  }

}
