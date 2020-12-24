``` typescript
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-line-multiple',
  templateUrl: './line-multiple.component.html',
  styleUrls: ['./line-multiple.component.less']
})
export class LineMultipleComponent {

  constructor() { }

  data = [
    { month: 'Jan', key: 'series1', value: 125 },
    { month: 'Jan', key: 'series2', value: 51 },
    { month: 'Feb', key: 'series1', value: 132 },
    { month: 'Feb', key: 'series2', value: 91 },
    { month: 'Mar', key: 'series1', value: 141 },
    { month: 'Mar', key: 'series2', value: 34 },
    { month: 'Apr', key: 'series1', value: 158 },
    { month: 'Apr', key: 'series2', value: 47 },
    { month: 'May', key: 'series1', value: 133 },
    { month: 'May', key: 'series2', value: 63 },
    { month: 'June', key: 'series1', value: 143 },
    { month: 'June', key: 'series2', value: 58 },
    { month: 'July', key: 'series1', value: 176 },
    { month: 'July', key: 'series2', value: 56 },
    { month: 'Aug', key: 'series1', value: 194 },
    { month: 'Aug', key: 'series2', value: 77 },
    { month: 'Sep', key: 'series1', value: 115 },
    { month: 'Sep', key: 'series2', value: 99 },
    { month: 'Oct', key: 'series1', value: 134 },
    { month: 'Oct', key: 'series2', value: 106 },
    { month: 'Nov', key: 'series1', value: 110 },
    { month: 'Nov', key: 'series2', value: 88 },
    { month: 'Dec', key: 'series1', value: 91 },
    { month: 'Dec', key: 'series2', value: 56 },
  ];

  options = {
    data: this.data,
    xField: 'month',
    yField: 'value',
    legend: false,
    seriesField: 'key',
    stepType: 'hvh',
  }

}

```