import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChordComponent } from './chord.component';
import { RouterModule, Routes } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { G2plotChordModule } from 'ngx-g2plot';
const routes: Routes = [
  { path: '', component: ChordComponent }
];


@NgModule({
  declarations: [ChordComponent],
  imports: [
    CommonModule,
    MarkdownModule.forRoot(),
    RouterModule.forChild(routes),
    NzTabsModule,
    G2plotChordModule
  ]
})
export class ChordModule { }
