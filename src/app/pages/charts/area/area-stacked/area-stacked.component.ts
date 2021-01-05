import { Component, EventEmitter, OnInit, ViewChild } from '@angular/core';
import { G2plotAreaDirective } from 'ngx-g2plot';

@Component({
  selector: 'app-area-stacked',
  templateUrl: './area-stacked.component.html',
  styleUrls: ['./area-stacked.component.less']
})
export class AreaStackedComponent implements OnInit {

  @ViewChild('divG2plotAreaAjax') divG2plotAreaAjax: G2plotAreaDirective;

  constructor() { }

  dataAjax = [];

  options = {
    data: this.dataAjax,
    xField: 'date',
    yField: 'value',
    seriesField: 'country',
  }

  ngOnInit(): void {
    this.getMockData();
  }

  /**
   * 加载mock数据
   */
  getMockData() {
    fetch('https://gw.alipayobjects.com/os/bmw-prod/b21e7336-0b3e-486c-9070-612ede49284e.json')
      .then((res) => res.json())
      .then((data) => {
        this.dataAjax = data;
        this.divG2plotAreaAjax.changeData(this.dataAjax);
      });
  }

  onError(e: EventEmitter<string>) {
    console.error(e);
  }
}
