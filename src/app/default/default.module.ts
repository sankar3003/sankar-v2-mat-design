import { DefaultRoutes } from "./default.routing";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { SidebarModule } from '../sidebar/sidebar.module';
import { HeaderModule } from '../header/header.module';
import { FooterModule } from '../footer/footer.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [DefaultComponent],
  imports: [
    CommonModule,
    SharedModule,
   SidebarModule,
   DefaultRoutes,
   HeaderModule,
   FooterModule
  ],
  exports:[
    DefaultComponent
  ]
})
export class DefaultModule { }
