import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stacked-rose',
  templateUrl: './stacked-rose.component.html',
  styleUrls: ['./stacked-rose.component.less']
})
export class StackedRoseComponent implements OnInit {

  constructor() { }

  data = [
    {
      type: '分类一',
      value: 27,
      user: '用户一',
    },
    {
      type: '分类二',
      value: 25,
      user: '用户一',
    },
    {
      type: '分类三',
      value: 18,
      user: '用户一',
    },
    {
      type: '分类四',
      value: 15,
      user: '用户一',
    },
    {
      type: '分类五',
      value: 10,
      user: '用户一',
    },
    {
      type: '其它',
      value: 5,
      user: '用户一',
    },
    {
      type: '分类一',
      value: 7,
      user: '用户二',
    },
    {
      type: '分类二',
      value: 5,
      user: '用户二',
    },
    {
      type: '分类三',
      value: 38,
      user: '用户二',
    },
    {
      type: '分类四',
      value: 5,
      user: '用户二',
    },
    {
      type: '分类五',
      value: 20,
      user: '用户二',
    },
    {
      type: '其它',
      value: 15,
      user: '用户二',
    },
  ];

  options = {
    data: this.data,
    radiusField: 'value',
    categoryField: 'type',
    stackField: 'user',
    label: {
      visible: true,
      type: 'inner',
    },
  };

  codes = {
    codeTs: {
      title: `stacked-rose.component.ts`,
      code: `import { Component, OnInit } from '@angular/core';

      @Component({
        selector: 'app-stacked-rose',
        templateUrl: './stacked-rose.component.html',
        styleUrls: ['./stacked-rose.component.less']
      })
      export class StackedRoseComponent implements OnInit {
      
        constructor() { }
      
        data = [
          {
            type: '分类一',
            value: 27,
            user: '用户一',
          },
          {
            type: '分类二',
            value: 25,
            user: '用户一',
          },
          {
            type: '分类三',
            value: 18,
            user: '用户一',
          },
          {
            type: '分类四',
            value: 15,
            user: '用户一',
          },
          {
            type: '分类五',
            value: 10,
            user: '用户一',
          },
          {
            type: '其它',
            value: 5,
            user: '用户一',
          },
          {
            type: '分类一',
            value: 7,
            user: '用户二',
          },
          {
            type: '分类二',
            value: 5,
            user: '用户二',
          },
          {
            type: '分类三',
            value: 38,
            user: '用户二',
          },
          {
            type: '分类四',
            value: 5,
            user: '用户二',
          },
          {
            type: '分类五',
            value: 20,
            user: '用户二',
          },
          {
            type: '其它',
            value: 15,
            user: '用户二',
          },
        ];
      
        options = {
          data: this.data,
          radiusField: 'value',
          categoryField: 'type',
          stackField: 'user',
          label: {
            visible: true,
            type: 'inner',
          },
        }
      }
      `,
    },
    codeHtml: {
      title: `stacked-rose.component.html`,
      code: `<div starkG2plotStackedRose [options]="options" style="width: 500px;"></div>`,
    },
  }

  ngOnInit(): void {
  }

}
