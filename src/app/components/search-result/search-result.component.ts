import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';

import { ICatImage } from '@shared/interfaces';
import { ApiCatService, LoaderService } from '@shared/services';
import { LoaderState } from '@shared/ui-kit';
import { trackByIndexFn } from '@shared/helpers';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchResultComponent  implements OnInit {
  catlist$: Observable<ICatImage[]> | null = null;

  sharedLoaderState = LoaderState;
  trackByFn = trackByIndexFn;

  constructor(private api: ApiCatService, private loader: LoaderService,) {}

  ngOnInit(): void {
    this.loader.loaderStateSource$.next(LoaderState.loading);
    this.catlist$ = this.api.getCats()
      .pipe(
        tap((image: ICatImage[]) => {
          if(image) {
            this.loader.loaderStateSource$.next(LoaderState.loaded);

          } else {
            this.loader.loaderStateSource$.next(LoaderState.noData);
          }
        })
      );
  }
}
