import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

import { SearchResultComponent } from './search-result.component';
import { LoaderModule } from '@shared/ui-kit';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    LoaderModule,
  ],
  declarations: [SearchResultComponent],
  exports: [SearchResultComponent],
})
export class SearchResultModule { }
