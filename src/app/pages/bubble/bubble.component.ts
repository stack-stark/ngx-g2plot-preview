import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bubble',
  templateUrl: './bubble.component.html',
  styleUrls: ['./bubble.component.less']
})
export class BubbleComponent implements OnInit {

  constructor() { }

  data = [
    { year: '1991', value: 3, rank: 1 },
    { year: '1992', value: 4, rank: 4 },
    { year: '1993', value: 3.5, rank: 3 },
    { year: '1994', value: 5, rank: 2 },
    { year: '1995', value: 4.9, rank: 9 },
    { year: '1996', value: 6, rank: 5 },
    { year: '1997', value: 7, rank: 7 },
    { year: '1998', value: 9, rank: 6 },
    { year: '1999', value: 13, rank: 8 },
  ];

  options = {
    data: this.data,
    xField: 'year',
    yField: 'value',
    sizeField: 'rank'
  };

  codes = {
    codeTs: {
      title: `bubble.component.ts`,
      code: `import { Component, OnInit } from '@angular/core';

      @Component({
        selector: 'app-bubble',
        templateUrl: './bubble.component.html',
        styleUrls: ['./bubble.component.less']
      })
      export class BubbleComponent implements OnInit {

        constructor() { }

        data = [
          { year: '1991', value: 3, rank:1 },
          { year: '1992', value: 4, rank: 4 },
          { year: '1993', value: 3.5, rank: 3 },
          { year: '1994', value: 5, rank: 2 },
          { year: '1995', value: 4.9, rank: 9 },
          { year: '1996', value: 6, rank: 5 },
          { year: '1997', value: 7, rank: 7 },
          { year: '1998', value: 9, rank: 6 },
          { year: '1999', value: 13, rank: 8 },
        ];

        options = {
          data: this.data,
          xField: 'year',
          yField: 'value',
          sizeField:'rank'
        };
      }
      `,
    },
    codeHtml: {
      title: `bubble.component.html`,
      code: `<div starkG2plotBubble [options]="options" style="width: 500px;"></div>`,
    },
  };

  ngOnInit(): void {
  }

}
