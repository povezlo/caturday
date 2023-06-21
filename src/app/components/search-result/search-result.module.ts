import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import {MatPaginatorModule} from '@angular/material/paginator';

import { SearchResultComponent } from './search-result.component';
import { LoaderModule } from '@shared/ui-kit';
import { CardModule } from '@components/card';
import { SlicePaginatorListPipe } from '@shared/pipe';

@NgModule({
  imports: [
    CommonModule,
    LoaderModule,
    CardModule,
    MatPaginatorModule
  ],
  declarations: [SearchResultComponent, SlicePaginatorListPipe],
  exports: [SearchResultComponent],
})
export class SearchResultModule { }
