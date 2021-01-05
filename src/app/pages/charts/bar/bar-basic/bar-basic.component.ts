import { Component, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-bar-basic',
  templateUrl: './bar-basic.component.html',
  styleUrls: ['./bar-basic.component.less']
})
export class BarBasicComponent {

  constructor() { }

   data = [
    { year: '1951 年', value: 38 },
    { year: '1952 年', value: 52 },
    { year: '1956 年', value: 61 },
    { year: '1957 年', value: 145 },
    { year: '1958 年', value: 48 },
  ];
  
  options = {
    data: this.data,
    xField: 'value',
    yField: 'year',
    seriesField: 'year',
    legend: {
      position: 'top-left',
    },
  };
  
  onError(e: EventEmitter<string>) {
    console.error(e);
  }
  
}
