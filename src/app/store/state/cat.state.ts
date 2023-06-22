import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';

import { State, Action, StateContext, Selector } from '@ngxs/store';
import { GetCats, SetCats, UpdateCats } from '@store/actions';

import { ApiCatService } from '@shared/services';
import { ICatImageResponse } from '@shared/interfaces';

@State<ICatImageResponse[]>({
  name: 'cats',
  defaults: []
})

@Injectable()
export class CatState {
  constructor(private api: ApiCatService,) {}

  @Selector()
  static getCats(state: ICatImageResponse[]) {

    return state;
  }

  @Action(GetCats)
  getCats({ setState }: StateContext<ICatImageResponse[]>) {
    return this.api.getCats().pipe(
      tap((cats) => {
        setState(cats);
      })
    );
  }

  @Action(SetCats)
  setCats({ setState }: StateContext<ICatImageResponse[]>, { payload }: SetCats) {
    setState(payload);
  }

  @Action(UpdateCats)
  updateCats({ setState }: StateContext<ICatImageResponse[]>, { payload }: UpdateCats) {
    return this.api.getCats(payload).pipe(
      tap((cats) => {
        setState(cats);
      })
    );
  }
}
