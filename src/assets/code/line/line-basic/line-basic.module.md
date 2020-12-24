``` js
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LineBasicComponent } from './line-basic.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { Routes, RouterModule } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { G2plotLineModule } from 'ngx-g2plot';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { MarkdownModule } from 'ngx-markdown';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzSpinModule } from 'ng-zorro-antd/spin';
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
    SharedModule,
    NzTabsModule,
    MarkdownModule.forRoot(),
    NzGridModule,
    NzSpinModule
  ]
})
export class LineBasicModule { }


```