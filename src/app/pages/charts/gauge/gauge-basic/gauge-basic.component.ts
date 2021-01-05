import { Component, EventEmitter, OnInit, ViewChild } from '@angular/core';
import { G2plotGaugeDirective } from 'ngx-g2plot';

@Component({
  selector: 'app-gauge-basic',
  templateUrl: './gauge-basic.component.html',
  styleUrls: ['./gauge-basic.component.less']
})
export class GaugeBasicComponent implements OnInit {

  constructor() { }

  @ViewChild('divG2plotGauge') divG2plotGauge: G2plotGaugeDirective;


  color = ['#F4664A', '#FAAD14', '#30BF78'];

  options = {
    percent: 0.2,
    range: {
      color: this.getColor(0.2),
    },
    indicator: {
      pointer: {
        style: {
          stroke: '#D0D0D0',
        },
      },
      pin: {
        style: {
          stroke: '#D0D0D0',
        },
      },
    },
    axis: {
      label: {
        formatter(v) {
          return Number(v) * 100;
        },
      },
      subTickLine: {
        count: 3,
      },
    },
    statistic: {
      content: {
        formatter: ({ percent }) => `Rate: ${(percent * 100).toFixed(0)}%`,
      },
      style: {
        fontSize: 60,
      },
    },
    animation: false,
  };

  data = 0.2;

  ngOnInit(): void {
    this.changeData();
  }

  private getColor(percent: number): string {
    return percent < 0.4 ? this.color[0] : percent < 0.6 ? this.color[1] : this.color[2];
  }

  private changeData(): void {
    const interval = setInterval(() => {
      if (this.data >= 0.85) {
        clearInterval(interval);
      } else {
        this.data += 0.001;
        this.divG2plotGauge.update({ range: { color: this.getColor(this.data) }, percent:  this.data });
      }
    }, 100);
  }

  onError(e: EventEmitter<string>) {
    console.error(e);
  }

}
