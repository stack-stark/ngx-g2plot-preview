import { Component, EventEmitter, OnInit, ViewChild } from '@angular/core';
import { G2plotScatterDirective } from 'ngx-g2plot';
import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { map, catchError } from 'rxjs/operators';
@Component({
  selector: 'app-scatter-basic',
  templateUrl: './scatter-basic.component.html',
  styleUrls: ['./scatter-basic.component.less']
})
export class ScatterBasicComponent implements OnInit {

  @ViewChild('divG2plotScatter') divG2plotScatter: G2plotScatterDirective;

  constructor() { }

  data = [];

  options = {
    appendPadding: 10,
    data: this.data,
    xField: 'Revenue (Millions)',
    yField: 'Rating',
    shape: 'circle',
    colorField: 'Genre',
    size: 4,
    yAxis: {
      nice: true,
      line: {
        style: {
          stroke: '#aaa',
        },
      },
    },
    xAxis: {
      min: -100,
      grid: {
        line: {
          style: {
            stroke: '#eee',
          },
        },
      },
      line: {
        style: {
          stroke: '#aaa',
        },
      },
    },
  };

  ngOnInit(): void {
    const apiData = ajax('https://gw.alipayobjects.com/os/antfincdn/aao6XnO5pW/IMDB.json').pipe(
      map((res: any) => {
        if (!res.response) {
          throw new Error('Value expected!');
        }
        return res.response;
      }),
      catchError(err => of([]))
    );
    const nextSet = (x: Array<object>) => {
      this.data = x;
      this.divG2plotScatter.changeData(this.data);
    }
    apiData.subscribe({
      next(x: Array<object>) {
        nextSet(x);
      },
      error(err) { console.error(err); }
    });
  }

  onError(e: EventEmitter<string>) {
    console.error(e);
  }
}
