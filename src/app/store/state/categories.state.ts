import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { GetCategories, SetCategories } from '@store/actions';
import { ApiCatService } from '@shared/services';
import { ICategoriesResponse } from '@shared/interfaces';

@State<ICategoriesResponse[]>({
  name: 'categories',
  defaults: []
})

@Injectable()
export class CategoriesState {
  constructor(private api: ApiCatService) {}

  @Selector()
  static getCategories(state: ICategoriesResponse[]) {
    return state;
  }

  @Action(GetCategories)
  getCategories({ setState }: StateContext<ICategoriesResponse[]>) {
    return this.api.getCategories().pipe(
      tap((categories) => {
        setState(categories);
      })
    );
  }

  @Action(SetCategories)
  setCategories({ setState }: StateContext<ICategoriesResponse[]>, { payload }: SetCategories) {
    setState(payload);
  }
}
