``` js
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LiquidBasicComponent } from './liquid-basic.component';
import { RouterModule, Routes } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { G2plotLiquidModule } from 'ngx-g2plot';

const routes: Routes = [
  { path: '', component: LiquidBasicComponent }
];

@NgModule({
  declarations: [LiquidBasicComponent],
  imports: [
    CommonModule,
    MarkdownModule.forRoot(),
    RouterModule.forChild(routes),
    G2plotLiquidModule,
    NzTabsModule
  ]
})
export class LiquidBasicModule { }

```