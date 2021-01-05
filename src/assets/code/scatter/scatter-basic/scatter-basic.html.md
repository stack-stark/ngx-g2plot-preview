```html 
<div nz-row>
  <h2>散点图颜色映射</h2>
  <div starkG2plotScatter #divG2plotScatter="g2plotScatter" [options]="options" style="width: 800px;"
    [ngStyle]="{'display': data.length?'block':'none'}"></div>
  <div style="width: 100%;height: 100%;display: flex;align-items: center;justify-content: center;" *ngIf="!data.length">
    <nz-spin nzSimple [nzSize]="'large'"></nz-spin>
  </div>
</div>
```