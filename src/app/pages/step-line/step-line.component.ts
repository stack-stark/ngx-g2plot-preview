import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-step-line',
  templateUrl: './step-line.component.html',
  styleUrls: ['./step-line.component.less']
})
export class StepLineComponent implements OnInit {

  constructor() { }

  data = [
    { year: '1991', value: 3 },
    { year: '1992', value: 4 },
    { year: '1993', value: 3.5 },
    { year: '1994', value: 5 },
    { year: '1995', value: 4.9 },
    { year: '1996', value: 6 },
    { year: '1997', value: 7 },
    { year: '1998', value: 9 },
    { year: '1999', value: 13 },
  ];

  options = {
    data: this.data,
    xField: 'year',
    yField: 'value',
  };

  codes = {
    codeTs: {
      title: `step-line.component.ts`,
      code: `import { Component, OnInit } from '@angular/core';

      @Component({
        selector: 'app-step-line',
        templateUrl: './step-line.component.html',
        styleUrls: ['./step-line.component.less']
      })
      export class StepLineComponent implements OnInit {
      
        constructor() { }
      
        data = [
          { year: '1991', value: 3 },
          { year: '1992', value: 4 },
          { year: '1993', value: 3.5 },
          { year: '1994', value: 5 },
          { year: '1995', value: 4.9 },
          { year: '1996', value: 6 },
          { year: '1997', value: 7 },
          { year: '1998', value: 9 },
          { year: '1999', value: 13 },
        ];
        options = {
          data: this.data,
          xField: 'year',
          yField: 'value',
        };
      }
      `,
    },
    codeHtml: {
      title: `step-line.component.html`,
      code: `<div starkG2plotStepLine [options]="options" style="width: 500px;"></div>`,
    },
  }


  ngOnInit(): void {
  }

}
