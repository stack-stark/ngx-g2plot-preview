import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-histogram',
  templateUrl: './histogram.component.html',
  styleUrls: ['./histogram.component.less']
})
export class HistogramComponent implements OnInit {

  constructor() { }

  data = [
    { value: 1.2 },
    { value: 3.4 },
    { value: 3.7 },
    { value: 4.3 },
    { value: 5.2 },
    { value: 5.8 },
    { value: 6.1 },
    { value: 6.5 },
    { value: 6.8 },
    { value: 7.1 },
    { value: 7.3 },
    { value: 7.7 },
    { value: 8.3 },
    { value: 8.6 },
    { value: 8.8 },
    { value: 9.1 },
    { value: 9.2 },
    { value: 9.4 },
    { value: 9.5 },
    { value: 9.7 },
    { value: 10.5 },
    { value: 10.7 },
    { value: 10.8 },
    { value: 11.0 },
    { value: 11.0 },
  ];

  options = {
    data: this.data,
    binField: 'value',
    binNumber: 6,
  };

  codes = {
    codeTs: {
      title: `histogram.component.ts`,
      code: `import { Component, OnInit } from '@angular/core';

      @Component({
        selector: 'app-histogram',
        templateUrl: './histogram.component.html',
        styleUrls: ['./histogram.component.less']
      })
      export class HistogramComponent implements OnInit {
      
        constructor() { }
      
        data = [
          { value: 1.2 },
          { value: 3.4 },
          { value: 3.7 },
          { value: 4.3 },
          { value: 5.2 },
          { value: 5.8 },
          { value: 6.1 },
          { value: 6.5 },
          { value: 6.8 },
          { value: 7.1 },
          { value: 7.3 },
          { value: 7.7 },
          { value: 8.3 },
          { value: 8.6 },
          { value: 8.8 },
          { value: 9.1 },
          { value: 9.2 },
          { value: 9.4 },
          { value: 9.5 },
          { value: 9.7 },
          { value: 10.5 },
          { value: 10.7 },
          { value: 10.8 },
          { value: 11.0 },
          { value: 11.0 },
        ];
      
        options = {
          data: this.data,
          binField: 'value',
          binNumber: 6,
        };
      }
      `,
    },
    codeHtml: {
      title: `histogram.component.html`,
      code: `<div starkG2plotHistogram [options]="options" style="width: 500px;"></div>`,
    },
  }

  ngOnInit(): void {
  }


}
