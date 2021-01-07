``` js 
import { Component, OnInit, ViewChild } from '@angular/core';
import { G2plotWordCloudDirective } from 'ngx-g2plot';

@Component({
  selector: 'app-word-cloud',
  templateUrl: './word-cloud.component.html',
  styleUrls: ['./word-cloud.component.less']
})
export class WordCloudComponent implements OnInit {

  @ViewChild('divG2plotWordCloud') divG2plotWordCloud: G2plotWordCloudDirective;

  constructor() { }

  data = [];

  options = {
    data: this.data,
    wordField: 'name',
    weightField: 'value',
    colorField: 'name',
    wordStyle: {
      fontFamily: 'Verdana',
      fontSize: [8, 32],
      rotation: 0,
    },
    // 返回值设置成一个 [0, 1) 区间内的值，
    // 可以让每次渲染的位置相同（前提是每次的宽高一致）。
    random: () => 0.5,
  };

  ngOnInit(): void {
    fetch('https://gw.alipayobjects.com/os/antvdemo/assets/data/antv-keywords.json')
      .then((res) => res.json())
      .then((data) => {
        this.data = data;
        this.divG2plotWordCloud.changeData(data);
      });
  }

}

```