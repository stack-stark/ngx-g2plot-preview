``` html
<div nz-row>
  <div nz-col nzSpan="10">
    <h2>基础</h2>
    <div starkG2plotLine #divG2plotLine="g2plotLine" [options]="options" style="width: 600px;"></div>
    <div style="margin: 20px 0;">
      <button nz-button nzType="primary" (click)="updateConfig()">updateConfig</button>
      <button nz-button nzType="primary" (click)="changeData()" style="margin-left: 20px;">changeData</button>
      <button nz-button nzType="primary" (click)="destroy()" nzDanger style="margin-left: 20px;">destroy</button>
    </div>
  </div>
  <div nz-col nzSpan="10" nzOffset="2">
    <h2>模拟加载远程数据</h2>
    <div starkG2plotLine #divG2plotLineAjax="g2plotLine" [options]="optionsAjax" style="width: 600px;" [ngStyle]="{'display': dataAjax.length?'block':'none'}"></div>
    <div style="width: 100%;height: 100%;display: flex;align-items: center;justify-content: center;" *ngIf="!dataAjax.length">
      <nz-spin nzSimple [nzSize]="'large'" ></nz-spin>
    </div>
  </div>
</div>
```