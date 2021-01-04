``` js
import { Component, OnInit, ViewChild } from '@angular/core';
import { G2plotAreaDirective } from 'ngx-g2plot';

@Component({
  selector: 'app-area-percent',
  templateUrl: './area-percent.component.html',
  styleUrls: ['./area-percent.component.less']
})
export class AreaPercentComponent implements OnInit {
  @ViewChild('divG2plotAreaAjax') divG2plotAreaAjax: G2plotAreaDirective;

  constructor() { }

  dataAjax = [];

  options = {
    data: this.dataAjax,
    xField: 'year',
    yField: 'value',
    seriesField: 'country',
    color: ['#82d1de', '#cb302d', '#e3ca8c'],
    areaStyle: {
      fillOpacity: 0.7,
    },
    appendPadding: 10,
    isPercent: true,
    yAxis: {
      label: {
        formatter: (value) => {
          return value * 100;
        },
      },
    },
  }

  ngOnInit(): void {
    this.getMockData();
  }

  /**
   * 加载mock数据
   */
  getMockData() {
    fetch('https://gw.alipayobjects.com/os/bmw-prod/67ef5751-b228-417c-810a-962f978af3e7.json')
      .then((res) => res.json())
      .then((data) => {
        this.dataAjax = data;
        this.divG2plotAreaAjax.changeData(this.dataAjax);
      });
  }

}

```