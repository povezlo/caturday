import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {MatListModule} from '@angular/material/list'; 

import { FilterSidebarComponent } from './filter-sidebar.component';

@NgModule({
  imports: [
    CommonModule,
    MatListModule
  ],
  declarations: [FilterSidebarComponent],
  exports: [FilterSidebarComponent],
})
export class FilterSidebarModule { }
