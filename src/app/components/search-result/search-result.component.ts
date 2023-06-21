import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';

import { Select, Store } from '@ngxs/store';
import { CatState } from '@store/state';
import { GetCats } from '@store/actions';

import { ICatImage } from '@shared/interfaces';
import { trackByIndexFn } from '@shared/helpers';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchResultComponent  implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @Select(CatState.getCats) catlist$!: Observable<ICatImage[]>;

  trackByFn = trackByIndexFn;

  constructor(private store: Store) {}

  ngOnInit(): void {
      this.store.dispatch(new GetCats());
  }

  onPageChange(event: PageEvent) {
    const startIndex = event.pageIndex * event.pageSize;
    const endIndex = startIndex + event.pageSize;
    // this.store.dispatch(new GetCats(startIndex, endIndex));
  }
}
