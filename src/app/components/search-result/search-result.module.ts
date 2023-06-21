import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SearchResultComponent } from './search-result.component';
import { LoaderModule } from '@shared/ui-kit';
import { CardModule } from '@components/card';

@NgModule({
  imports: [
    CommonModule,
    LoaderModule,
    CardModule
  ],
  declarations: [SearchResultComponent],
  exports: [SearchResultComponent],
})
export class SearchResultModule { }
