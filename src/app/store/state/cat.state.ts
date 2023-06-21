import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';

import { State, Action, StateContext, Selector } from '@ngxs/store';
import { GetCats, SetCats } from '@store/actions';

import { ApiCatService, LoaderService } from '@shared/services';
import { ICatImage } from '@shared/interfaces';
import { LoaderState } from '@shared/ui-kit';

@State<ICatImage[]>({
  name: 'cats',
  defaults: []
})

@Injectable()
export class CatState {
  constructor(private api: ApiCatService, private loader: LoaderService) {}

  @Selector()
  static getCats(state: ICatImage[]) {

    return state;
  }

  @Action(GetCats)
  getCats({ setState }: StateContext<ICatImage[]>) {
    return this.api.getCats().pipe(
      tap((cats) => {
        if(cats) {
            this.loader.loaderStateSource$.next(LoaderState.loaded);
        } else {
            this.loader.loaderStateSource$.next(LoaderState.noData);
        }

        setState(cats);
      })
    );
  }

  @Action(SetCats)
  setCats({ setState }: StateContext<ICatImage[]>, { payload }: SetCats) {
    setState(payload);
  }
}
