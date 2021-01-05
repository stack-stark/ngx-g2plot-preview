``` js
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-area-basic',
  templateUrl: './area-basic.component.html',
  styleUrls: ['./area-basic.component.less']
})
export class AreaBasicComponent implements OnInit {

  constructor() { }

  data = [
    {
      Date: '2010-01',
      scales: 1998
    },
    {
      Date: '2010-02',
      scales: 1850
    },
    {
      Date: '2010-03',
      scales: 1720
    },
    {
      Date: '2010-04',
      scales: 1818
    },
    {
      Date: '2010-05',
      scales: 1920
    },
    {
      Date: '2010-06',
      scales: 1802
    },
    {
      Date: '2010-07',
      scales: 1945
    },
    {
      Date: '2012-05',
      scales: 1689
    },
    {
      Date: '2012-06',
      scales: 1755
    },
    {
      Date: '2012-07',
      scales: 1495
    },
  ];

  options = {
    data: this.data,
    xField: 'Date',
    yField: 'scales',
    xAxis: {
      range: [0, 1],
      tickCount: 5,
    },
  };


  ngOnInit(): void {
  }

  onError(e: EventEmitter<string>) {
    console.error(e);
  }
}

```