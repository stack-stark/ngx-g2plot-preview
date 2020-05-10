import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stacked-column',
  templateUrl: './stacked-column.component.html',
  styleUrls: ['./stacked-column.component.less']
})
export class StackedColumnComponent implements OnInit {

  constructor() { }

  data = [
    {
      year: '1991',
      value: 3,
      type: 'Lon',
    },
    {
      year: '1992',
      value: 4,
      type: 'Lon',
    },
    {
      year: '1993',
      value: 3.5,
      type: 'Lon',
    },
    {
      year: '1994',
      value: 5,
      type: 'Lon',
    },
    {
      year: '1995',
      value: 4.9,
      type: 'Lon',
    },
    {
      year: '1996',
      value: 6,
      type: 'Lon',
    },
    {
      year: '1997',
      value: 7,
      type: 'Lon',
    },
    {
      year: '1998',
      value: 9,
      type: 'Lon',
    },
    {
      year: '1999',
      value: 13,
      type: 'Lon',
    },
    {
      year: '1991',
      value: 3,
      type: 'Bor',
    },
    {
      year: '1992',
      value: 4,
      type: 'Bor',
    },
    {
      year: '1993',
      value: 3.5,
      type: 'Bor',
    },
    {
      year: '1994',
      value: 5,
      type: 'Bor',
    },
    {
      year: '1995',
      value: 4.9,
      type: 'Bor',
    },
    {
      year: '1996',
      value: 6,
      type: 'Bor',
    },
    {
      year: '1997',
      value: 7,
      type: 'Bor',
    },
    {
      year: '1998',
      value: 9,
      type: 'Bor',
    },
    {
      year: '1999',
      value: 13,
      type: 'Bor',
    },
  ];

  options = {
    title: {
      visible: true,
      text: '堆叠柱状图',
    },
    forceFit: true,
    data: this.data,
    padding: 'auto',
    xField: 'year',
    yField: 'sales',
    yAxis: {
      min: 0,
    },
    stackField: 'type',
  };

  codes = {
    codeTs: {
      title: `stacked-column.component.ts`,
      code: `import { Component, OnInit } from '@angular/core';

      @Component({
        selector: 'app-stacked-column',
        templateUrl: './stacked-column.component.html',
        styleUrls: ['./stacked-column.component.less']
      })
      export class StackedColumnComponent implements OnInit {
      
        constructor() { }
      
        data = [
          {
            year: '1991',
            value: 3,
            type: 'Lon',
          },
          {
            year: '1992',
            value: 4,
            type: 'Lon',
          },
          {
            year: '1993',
            value: 3.5,
            type: 'Lon',
          },
          {
            year: '1994',
            value: 5,
            type: 'Lon',
          },
          {
            year: '1995',
            value: 4.9,
            type: 'Lon',
          },
          {
            year: '1996',
            value: 6,
            type: 'Lon',
          },
          {
            year: '1997',
            value: 7,
            type: 'Lon',
          },
          {
            year: '1998',
            value: 9,
            type: 'Lon',
          },
          {
            year: '1999',
            value: 13,
            type: 'Lon',
          },
          {
            year: '1991',
            value: 3,
            type: 'Bor',
          },
          {
            year: '1992',
            value: 4,
            type: 'Bor',
          },
          {
            year: '1993',
            value: 3.5,
            type: 'Bor',
          },
          {
            year: '1994',
            value: 5,
            type: 'Bor',
          },
          {
            year: '1995',
            value: 4.9,
            type: 'Bor',
          },
          {
            year: '1996',
            value: 6,
            type: 'Bor',
          },
          {
            year: '1997',
            value: 7,
            type: 'Bor',
          },
          {
            year: '1998',
            value: 9,
            type: 'Bor',
          },
          {
            year: '1999',
            value: 13,
            type: 'Bor',
          },
        ];
      
        options = {
          title: {
            visible: true,
            text: '堆叠柱状图',
          },
          forceFit: true,
          data: this.data,
          padding: 'auto',
          data: this.data,
          xField: 'year',
          yField: 'sales',
          data: this.data,
          xField: 'year',
          yField: 'value',
          yAxis: {
            min: 0,
          },
          stackField: 'type',
        };
      
      }
      `,
    },
    codeHtml: {
      title: `stacked-column.component.html`,
      code: `<div starkG2plotStackedColumn [options]="options" style="width: 500px;"></div>`,
    },
  }

  ngOnInit(): void {
  }

}
