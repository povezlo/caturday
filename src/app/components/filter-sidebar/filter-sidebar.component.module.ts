import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FilterSidebarComponent } from './filter-sidebar.component';
import { MatCardModule } from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  declarations: [FilterSidebarComponent],
  exports: [FilterSidebarComponent],
})
export class FilterSidebarModule { }
