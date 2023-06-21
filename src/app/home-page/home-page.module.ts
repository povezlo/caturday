import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MatSidenavModule } from '@angular/material/sidenav'

import { HomePageComponent } from './home-page.component';
import { FilterSidebarModule, SearchResultModule } from '../components';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  }
];

@NgModule({
  imports: [
    CommonModule,
    FilterSidebarModule,
    SearchResultModule,
    MatSidenavModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HomePageComponent],
  exports: [HomePageComponent],
})
export class HomePageModule { }
