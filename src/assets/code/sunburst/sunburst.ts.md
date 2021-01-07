``` js 
import { Component, OnInit, ViewChild } from '@angular/core';
import { G2plotSunburstDirective } from 'ngx-g2plot';

@Component({
  selector: 'app-sunburst',
  templateUrl: './sunburst.component.html',
  styleUrls: ['./sunburst.component.less']
})
export class SunburstComponent implements OnInit {

  @ViewChild('divG2plotSunburst') divG2plotSunburst: G2plotSunburstDirective;

  constructor() { }

  data = null;
  options = {
    data: this.data,
    seriesField: 'sum',
    colorField: 'label',
    innerRadius: 0.3,
    interactions: [{ type: 'element-active' }],
  };


  ngOnInit(): void {
    fetch('https://gw.alipayobjects.com/os/antvdemo/assets/data/sunburst.json')
      .then((res) => res.json())
      .then((data) => {
        this.data = data;
        this.divG2plotSunburst.changeData(this.data);
      });
  }

}

```