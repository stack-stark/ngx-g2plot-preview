import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.less']
})
export class BarComponent implements OnInit {

  constructor() { }

  data = [
    { year: '1951 年', sales: 38 },
    { year: '1952 年', sales: 52 },
    { year: '1956 年', sales: 61 },
    { year: '1957 年', sales: 145 },
    { year: '1958 年', sales: 48 },
  ];

  options =  {
    data: this.data,
    xField: 'sales',
    yField: 'year',
    colorField: 'year',
  };


  codes = {
    codeTs: {
      title: `bar.component.ts`,
      code: `import { Component, OnInit } from '@angular/core';

      @Component({
        selector: 'app-bar',
        templateUrl: './bar.component.html',
        styleUrls: ['./bar.component.less']
      })
      export class BarComponent implements OnInit {
      
        constructor() { }
      
        data = [
          { year: '1951 年', sales: 38 },
          { year: '1952 年', sales: 52 },
          { year: '1956 年', sales: 61 },
          { year: '1957 年', sales: 145 },
          { year: '1958 年', sales: 48 },
        ];
      
        options =  {
          data: this.data,
          xField: 'sales',
          yField: 'year',
          colorField: 'year',
        };
        ngOnInit(): void {
        }
      }`
    },
    codeHtml: {
      title: `bar.component.html`,
      code: `<div starkG2plotBar [options]="options"></div>`
    }
  };

  ngOnInit(): void {
  }
}
