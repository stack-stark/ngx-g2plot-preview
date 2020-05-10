import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.less']
})
export class ColumnComponent implements OnInit {

  constructor() { }

  data = [
    {
      type: '家具家电',
      sales: 38,
    },
    {
      type: '粮油副食',
      sales: 52,
    },
    {
      type: '生鲜水果',
      sales: 61,
    },
    {
      type: '美容洗护',
      sales: 145,
    },
    {
      type: '母婴用品',
      sales: 48,
    },
    {
      type: '进口食品',
      sales: 38,
    },
    {
      type: '食品饮料',
      sales: 38,
    },
    {
      type: '家庭清洁',
      sales: 38,
    },
  ];

  options = {
    title: {
      visible: true,
      text: '基础柱状图',
    },
    forceFit: true,
    data: this.data,
    padding: 'auto',
    xField: 'type',
    yField: 'sales',
    meta: {
      type: {
        alias: '类别',
      },
      sales: {
        alias: '销售额(万)',
      },
    },
  };

  codes = {
    codeTs: {
      title: `column.component.ts`,
      code: `import { Component, OnInit } from '@angular/core';

      @Component({
        selector: 'app-column',
        templateUrl: './column.component.html',
        styleUrls: ['./column.component.less']
      })
      export class ColumnComponent implements OnInit {
      
        constructor() { }
      
        data = [
          {
            type: '家具家电',
            sales: 38,
          },
          {
            type: '粮油副食',
            sales: 52,
          },
          {
            type: '生鲜水果',
            sales: 61,
          },
          {
            type: '美容洗护',
            sales: 145,
          },
          {
            type: '母婴用品',
            sales: 48,
          },
          {
            type: '进口食品',
            sales: 38,
          },
          {
            type: '食品饮料',
            sales: 38,
          },
          {
            type: '家庭清洁',
            sales: 38,
          },
        ];
      
        options = {
          title: {
            visible: true,
            text: '基础柱状图',
          },
          forceFit: true,
          data: this.data,
          padding: 'auto',
          xField: 'type',
          yField: 'sales',
          meta: {
            type: {
              alias: '类别',
            },
            sales: {
              alias: '销售额(万)',
            },
          },
        };
      }`,
    },
    codeHtml: {
      title: `column.component.html`,
      code: `<div starkG2plotColumn [options]="options" style="width: 800px;"></div>`,
    },
  }

  ngOnInit(): void {
  }

}