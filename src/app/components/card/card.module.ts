import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

import { CardComponent } from './card.component';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule
  ],
  declarations: [CardComponent],
  exports: [CardComponent],
})
export class CardModule { }
