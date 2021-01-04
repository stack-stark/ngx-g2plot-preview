```html 
<div nz-row>
  <div nz-col nzSpan="10" nzOffset="2">
    <h2>基础柱状图</h2>
    <div starkG2plotColumn [options]="options" style="width: 800px;"
      [ngStyle]="{'display': data.length?'block':'none'}"></div>
    <div style="width: 100%;height: 100%;display: flex;align-items: center;justify-content: center;"
      *ngIf="!data.length">
      <nz-spin nzSimple [nzSize]="'large'"></nz-spin>
    </div>
  </div>
</div>
```