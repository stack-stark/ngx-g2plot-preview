``` html 
<div nz-row>
  <h2>词云图-每次渲染保持位置不变</h2>
  <div starkG2plotWordCloud #divG2plotWordCloud="g2plotWordCloud" [options]="options" style="width: 800px;"
    [ngStyle]="{'display': data.length?'block':'none'}"></div>
  <div style="width: 100%;height: 100%;display: flex;align-items: center;justify-content: center;" *ngIf="!data.length">
    <nz-spin nzSimple [nzSize]="'large'"></nz-spin>
  </div>
</div>

```