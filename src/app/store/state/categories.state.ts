import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { GetCategories, SetCategories } from '@store/actions';
import { ApiCatService } from '@shared/services';
import { ICategories } from '@shared/interfaces';

@State<ICategories[]>({
  name: 'categories',
  defaults: []
})

@Injectable()
export class CategoriesState {
  constructor(private api: ApiCatService) {}

  @Selector()
  static getCategories(state: ICategories[]) {
    return state;
  }

  @Action(GetCategories)
  getCategories({ setState }: StateContext<ICategories[]>) {
    return this.api.getCategories().pipe(
      tap((categories) => {
        setState(categories);
      })
    );
  }

  @Action(SetCategories)
  setCategories({ setState }: StateContext<ICategories[]>, { payload }: SetCategories) {
    setState(payload);
  }
}
