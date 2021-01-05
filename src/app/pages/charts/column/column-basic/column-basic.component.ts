import { Component, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-column-basic',
  templateUrl: './column-basic.component.html',
  styleUrls: ['./column-basic.component.less']
})
export class ColumnBasicComponent implements OnInit {

  constructor() { }


  data = [
    { type: '1-3秒', value: 0.16 },
    { type: '4-10秒', value: 0.125 },
    { type: '11-30秒', value: 0.24 },
    { type: '31-60秒', value: 0.19 },
    { type: '1-3分', value: 0.22 },
    { type: '3-10分', value: 0.05 },
    { type: '10-30分', value: 0.01 },
    { type: '30+分', value: 0.015 },
  ];

  options = {
    data: this.data,
    xField: 'type',
    yField: 'value',
    seriesField: '',
    color: ({ type }) => {
      if (type === '10-30分' || type === '30+分') {
        return '#F4664A';
      }
      return '#5B8FF9';
    },
    label: {
      content: (originData) => {
        const val = parseFloat(originData.value);
        if (val < 0.05) {
          return (val * 100).toFixed(1) + '%';
        }
      },
      offset: 10,
    },
    legend: false,
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
    meta: {
      type: {
        alias: '类别',
      },
      sales: {
        alias: '销售额',
      },
    },
  };

  ngOnInit(): void {
  }

  onError(e: EventEmitter<string>) {
    console.error(e);
  }

}
