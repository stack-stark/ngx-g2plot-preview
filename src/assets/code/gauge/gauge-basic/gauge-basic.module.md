```js 
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GaugeBasicComponent } from './gauge-basic.component';
import { G2plotGaugeModule } from 'ngx-g2plot';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { RouterModule, Routes } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';

const routes: Routes = [
  { path: '', component: GaugeBasicComponent }
];
@NgModule({
  declarations: [GaugeBasicComponent],
  imports: [
    CommonModule,
    MarkdownModule.forRoot(),
    RouterModule.forChild(routes),
    G2plotGaugeModule,
    NzTabsModule
  ]
})
export class GaugeBasicModule { }

```