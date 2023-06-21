import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Select, Store } from '@ngxs/store';
import { CatState } from '@store/state';
import { GetCats } from '@store/actions';

import { ICatImageResponse } from '@shared/interfaces';
import { trackByIndexFn } from '@shared/helpers';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchResultComponent  implements OnInit {
  @Select(CatState.getCats) catlist$!: Observable<ICatImageResponse[]>;

  trackByFn = trackByIndexFn;

  constructor(private store: Store) {}

  ngOnInit(): void {
      this.store.dispatch(new GetCats());
  }
}
