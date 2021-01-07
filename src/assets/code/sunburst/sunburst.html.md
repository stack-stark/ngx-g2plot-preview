``` html 
<div nz-row>
  <h2>旭日图</h2>
  <div starkG2plotSunburst #divG2plotSunburst="g2plotSunburst" [options]="options" style="width: 800px;"
    [ngStyle]="{'display': data?'block':'none'}"></div>
  <div style="width: 100%;height: 100%;display: flex;align-items: center;justify-content: center;" *ngIf="!data">
    <nz-spin nzSimple [nzSize]="'large'"></nz-spin>
  </div>
</div>
```