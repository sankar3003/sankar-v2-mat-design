import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './default.component';

const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,

    children: [

      {
        path: 'dashboard',
        loadChildren: ()=>import("src/app/dashboard/dashboard.module").then(m=>m.DashboardModule)
      },
      {
        path: 'post',
        loadChildren: ()=>import("src/app/post/post.module").then(m=>m.PostModule)
      },]
    }
];

export const DefaultRoutes = RouterModule.forChild(routes);
