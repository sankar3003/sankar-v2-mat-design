import { PostComponent } from "./post/post.component";
import { DefaultComponent } from "./default/default.component";
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [


  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },


  {
    path: 'default',
    loadChildren: () => import('.././app/default/default.module').then(m => m.DefaultModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
