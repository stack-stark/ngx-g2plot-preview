import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.less']
})
export class LineComponent implements OnInit {

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
    title: {
      visible: true,
      text: '折线图',
    },
    description: {
      visible: true,
      text: '用平滑的曲线代替折线。',
    },
    data: this.data,
    xField: 'year',
    yField: 'value',
  };

  codeTs = `
  import { Component, OnInit } from '@angular/core';

  @Component({
    selector: 'app-line',
    templateUrl: './line.component.html',
    styleUrls: ['./line.component.less']
  })
  export class LineComponent implements OnInit {

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
      title: {
        visible: true,
        text: '折线图',
      },
      description: {
        visible: true,
        text: '用平滑的曲线代替折线。',
      },
      data: this.data,
      xField: 'year',
      yField: 'value',
    };
  }
  `;
  codeHtml = `<div starkG2plotLine [options]="options" style="width: 500px;"></div>`;

  ngOnInit(): void {
  }

}
