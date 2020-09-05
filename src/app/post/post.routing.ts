import { Routes, RouterModule } from '@angular/router';
import { PostComponent } from './post.component';

const routes: Routes = [
  {
    path:'',
    component:PostComponent
   },
];

export const PostRoutes = RouterModule.forChild(routes);
