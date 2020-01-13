import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutPrimaryComponent } from './layouts/layout-primary/layout-primary.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'all-post',
    pathMatch: 'full'
  },
  {
    path: '',
    component: LayoutPrimaryComponent,
    children: [
      {
        path: 'all-post',
        loadChildren: () => import('./post/list/list.module').then(m => m.ListModule)
      },
      {
        path: 'post',
        loadChildren: () => import('./post/detail/detail.module').then(m => m.DetailModule)
      }
    ]
  },
  { path: '**', redirectTo: '404', pathMatch: 'full' },
  {
    path: '404',
    loadChildren: () => import('./pages/not-found/not-found.module').then(m => m.NotFoundModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
