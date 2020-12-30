``` js
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-line-step',
  templateUrl: './line-step.component.html',
  styleUrls: ['./line-step.component.less']
})
export class LineStepComponent implements OnInit {

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
    { year: '1999', value: 8 },
  ];

  options = {
    data: this.data,
    xField: 'year',
    yField: 'value',
    stepType: 'vh',
  };

  ngOnInit(): void {
  }

  onError(e) {
    console.log(e);
  }

}

```