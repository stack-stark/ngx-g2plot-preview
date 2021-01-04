``` html
<div nz-row>
    <div nz-col nzSpan="10" nzOffset="2">
      <h2>堆叠面积图</h2>
      <div starkG2plotArea #divG2plotAreaAjax="g2plotArea" [options]="options" style="width: 800px;"
        [ngStyle]="{'display': dataAjax.length?'block':'none'}"></div>
      <div style="width: 100%;height: 100%;display: flex;align-items: center;justify-content: center;"
        *ngIf="!dataAjax.length">
        <nz-spin nzSimple [nzSize]="'large'"></nz-spin>
      </div>
    </div>
  </div>
```