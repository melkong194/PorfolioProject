import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { NavbarAdComponent } from './navbar-ad/navbar-ad.component';



@NgModule({
  declarations: [NavBarComponent, NavbarAdComponent],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [NavBarComponent, NavbarAdComponent] 
})
export class CoreModule { }
