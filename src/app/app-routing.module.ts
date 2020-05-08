import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DesktopComponent } from './layout/desktop/desktop.component';
import { IndexComponent } from './pages/index/index.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  {
    path: 'preview',
    component: DesktopComponent,
    children: [
      {
        path: 'bar',
        loadChildren: () => import('./pages/bar/bar.module').then(m => m.BarModule)
      },
      {
        path: 'line',
        loadChildren: () => import('./pages/line/line.module').then(m => m.LineModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
