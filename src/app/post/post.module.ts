import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post.component';
import { PostRoutes } from './post.routing';



@NgModule({
  declarations: [PostComponent],
  imports: [
    CommonModule,
    PostRoutes
  ]
})
export class PostModule { }
