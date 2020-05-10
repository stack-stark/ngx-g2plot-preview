import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stacked-area',
  templateUrl: './stacked-area.component.html',
  styleUrls: ['./stacked-area.component.less']
})
export class StackedAreaComponent implements OnInit {

  constructor() { }


  data = [
    { country: 'Asia', year: '1750', value: 502, },
    { country: 'Asia', year: '1800', value: 635, },
    { country: 'Europe', year: '1750', value: 163, },
    { country: 'Europe', year: '1800', value: 203, },
  ];

  options = {
    title: {
      visible: true,
      text: '百分比堆叠面积图',
    },
    data: this.data,
    meta: {
      year: {
        alias: '年份',
        range: [0, 1],
      },
      value: {
        alias: '数量',
        formatter: (v) => `${v}个`
      }
    },
    xField: 'year',
    yField: 'value',
    stackField: 'country',
  };

  codes = {
    codeTs: {
      title: `stacked-area.component.ts`,
      code: `
      import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stacked-area',
  templateUrl: './stacked-area.component.html',
  styleUrls: ['./stacked-area.component.less']
})
export class StackedAreaComponent implements OnInit {

  constructor() { }


  data = [
    { country: 'Asia', year: '1750', value: 502, },
    { country: 'Asia', year: '1800', value: 635, },
    { country: 'Europe', year: '1750', value: 163, },
    { country: 'Europe', year: '1800', value: 203, },
  ];

  options = {
    title: {
      visible: true,
      text: '百分比堆叠面积图',
    },
    data: this.data,
    meta: {
      year: {
        alias: '年份',
        range: [0, 1],
      },
      value: {
        alias: '数量',
        formatter: (v) => v个
      }
    },
    xField: 'year',
    yField: 'value',
    stackField: 'country',
  };
}
`,
    },
codeHtml: {
  title: `stacked-area.component.html`,
    code: `<div starkG2plotStackedArea [options]="options" style="width: 500px;"></div>`,
    },
  }

ngOnInit(): void {
}
}
