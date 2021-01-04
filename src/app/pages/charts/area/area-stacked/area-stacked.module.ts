import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AreaStackedComponent } from './area-stacked.component';
import { RouterModule, Routes } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { G2plotAreaModule } from 'ngx-g2plot';
import { NzSpinModule } from 'ng-zorro-antd/spin';

const routes: Routes = [
  { path: '', component: AreaStackedComponent }
];
@NgModule({
  declarations: [AreaStackedComponent],
  imports: [
    CommonModule,
    MarkdownModule.forRoot(),
    RouterModule.forChild(routes),
    G2plotAreaModule,
    NzTabsModule,
    NzSpinModule
  ]
})
export class AreaStackedModule { }
