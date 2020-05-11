import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rose',
  templateUrl: './rose.component.html',
  styleUrls: ['./rose.component.less']
})
export class RoseComponent implements OnInit {

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
    data: this.data,
    radiusField: 'value',
    categoryField: 'type',
    colorField: 'type',
    label: {
      visible: true,
      type: 'outer',
      formatter: (text) => text,
    },
  }

  codes = {
    codeTs: {
      title: `rose.component.ts`,
      code: `import { Component, OnInit } from '@angular/core';

      @Component({
        selector: 'app-rose',
        templateUrl: './rose.component.html',
        styleUrls: ['./rose.component.less']
      })
      export class RoseComponent implements OnInit {
      
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
          data: this.data,
          radiusField: 'value',
          categoryField: 'type',
          colorField: 'type',
          label: {
            visible: true,
            type: 'outer',
            formatter: (text) => text,
          },
        }
      }
      `,
    },
    codeHtml: {
      title: `rose.component.html`,
      code: `<div starkG2plotRose [options]="options" style="width: 500px;"></div>`,
    },
  }
  
  ngOnInit(): void {
  }

}
