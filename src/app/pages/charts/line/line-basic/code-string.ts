/*
 * @Description:
 * @Date: 2020-12-04 11:16:24
 * @LastEditors: tanmh
 * @LastEditTime: 2020-12-04 11:21:14
 */
export const codeString = {
    codeTs: {
      title: `line-basic.component.ts`,
      code: `import { Component, ViewChild } from '@angular/core';
      import { G2plotLineDirective } from 'ngx-g2plot';

      @Component({
        selector: 'app-line-basic',
        templateUrl: './line-basic.component.html',
        styleUrls: ['./line-basic.component.less']
      })
      export class LineBasicComponent {

        constructor() { }
        @ViewChild('divG2plotLine') divG2plotLine: G2plotLineDirective;

        data = [
          { year: '1991', value: 3 },
          { year: '1992', value: 4 },
          { year: '1993', value: 3.5 },
          { year: '1994', value: 5 },
          { year: '1995', value: 4.9 },
          { year: '1996', value: 6 },
          { year: '1997', value: 7 },
          { year: '1998', value: 9 },
          { year: '1999', value: 13 },
        ];

        options = {
          title: {
            visible: true,
            text: '折线图',
          },
          description: {
            visible: true,
            text: '用平滑的曲线代替折线。',
          },
          data: this.data,
          xField: 'year',
          yField: 'value',
        };

        updateConfig(): void {
         const options = {
            title: {
              visible: true,
              text: 'The line chart',
            },
            description: {
              visible: true,
              text: 'Replace broken lines with smooth curves.',
            },
            xField: 'year',
            yField: 'value',
          };
         this.divG2plotLine.instance.update(options); // 使用当前实例方法 Use the current instance method
         this.divG2plotLine.instance.render(); // 使用当前实例方法 Use the current instance method
        }

        changeData(): void {
          const data = [
            { year: '1991', value: 13 },
            { year: '1992', value: 14 },
            { year: '1993', value: 13.5 },
            { year: '1994', value: 15 },
            { year: '1995', value: 14.9 },
            { year: '1996', value: 16 },
            { year: '1997', value: 17 },
            { year: '1998', value: 19 },
            { year: '1999', value: 23 },
          ];
          this.divG2plotLine.changeData(data);
        }


        destroy(): void {
          this.divG2plotLine.destroy();
        }

      }
      `,
    },
    codeHtml: {
      title: `line-basic.component.html`,
      code: `<div starkG2plotLine #divG2plotLine="g2plotLine" [options]="options" style="width: 500px;"></div>`,
    },
    codeModule: {
      title: `line-basic.component.module`,
      code: `import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LineBasicComponent } from './line-basic.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { Routes, RouterModule } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { G2plotLineModule } from 'ngx-g2plot';
const routes: Routes = [
{ path: '', component: LineBasicComponent }
];

@NgModule({
declarations: [LineBasicComponent],
imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NzButtonModule,
    G2plotLineModule,
    SharedModule
]
})
export class LineBasicModule { }`,
    },
  };