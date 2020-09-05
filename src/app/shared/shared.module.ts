import { FooterModule } from "./../footer/footer.module";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';

import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

import {MatMenuModule} from '@angular/material/menu';
import { RouterModule } from '@angular/router';
import { SidebarModule } from '../sidebar/sidebar.module';
import { HeaderModule } from '../header/header.module';


const array=[
  MatToolbarModule,
  MatSidenavModule,
  MatDividerModule,
  MatIconModule,
  MatListModule,
  MatCardModule,
  MatButtonModule,
  MatMenuModule,

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,

    array
  ],
  exports:[
array
  ]
})
export class SharedModule { }
