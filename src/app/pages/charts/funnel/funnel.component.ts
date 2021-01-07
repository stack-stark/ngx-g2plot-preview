import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-funnel',
  templateUrl: './funnel.component.html',
  styleUrls: ['./funnel.component.less']
})
export class FunnelComponent {

  constructor() { }

  data = [
    { stage: '简历筛选', number: 253 },
    { stage: '初试人数', number: 151 },
    { stage: '复试人数', number: 113 },
    { stage: '录取人数', number: 87 },
    { stage: '入职人数', number: 59 },
  ];

  options = {
    data: this.data,
    xField: 'stage',
    yField: 'number',
    legend: false,
  };


}
