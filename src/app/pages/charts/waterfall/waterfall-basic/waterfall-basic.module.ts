import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WaterfallBasicComponent } from './waterfall-basic.component';
import { G2plotWaterfallModule } from 'ngx-g2plot';
import { MarkdownModule } from 'ngx-markdown';
import { RouterModule, Routes } from '@angular/router';
import { NzTabsModule } from 'ng-zorro-antd/tabs';

const routes: Routes = [
  { path: '', component: WaterfallBasicComponent }
];

@NgModule({
  declarations: [WaterfallBasicComponent],
  imports: [
    CommonModule,
    MarkdownModule.forRoot(),
    RouterModule.forChild(routes),
    G2plotWaterfallModule,
    NzTabsModule
  ]
})
export class WaterfallBasicModule { }
