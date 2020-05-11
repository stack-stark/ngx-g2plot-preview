import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-donut',
  templateUrl: './donut.component.html',
  styleUrls: ['./donut.component.less']
})
export class DonutComponent implements OnInit {

  constructor() { }

  data = [
    {
      type: '分类一',
      value: 27,
    },
    {
      type: '分类二',
      value: 25,
    },
    {
      type: '分类三',
      value: 18,
    },
    {
      type: '分类四',
      value: 15,
    },
    {
      type: '分类五',
      value: 10,
    },
    {
      type: '其它',
      value: 5,
    },
  ];

  options = {
    forceFit: true,
    radius: 0.8,
    data: this.data,
    angleField: 'value',
    colorField: 'type',
  }

  codes = {
    codeTs: {
      title: `donut.component.ts`,
      code: `import { Component, OnInit } from '@angular/core';

      @Component({
        selector: 'app-donut',
        templateUrl: './donut.component.html',
        styleUrls: ['./donut.component.less']
      })
      export class DonutComponent implements OnInit {
      
        constructor() { }
      
        data = [
          {
            type: '分类一',
            value: 27,
          },
          {
            type: '分类二',
            value: 25,
          },
          {
            type: '分类三',
            value: 18,
          },
          {
            type: '分类四',
            value: 15,
          },
          {
            type: '分类五',
            value: 10,
          },
          {
            type: '其它',
            value: 5,
          },
        ];
      
        options = {
          forceFit: true,
          radius: 0.8,
          data: this.data,
          angleField: 'value',
          colorField: 'type',
        }
      }
      `,
    },
    codeHtml: {
      title: `donut.component.html`,
      code: `<div starkG2plotDonut [options]="options" style="width: 500px;"></div>`,
    },
  }

  ngOnInit(): void {
  }

}
