import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { GetBreeds, SetBreeds } from '@store/actions';
import { ApiCatService } from '@shared/services';
import { ICatBreed } from '@shared/interfaces';

@State<ICatBreed[]>({
  name: 'breeds',
  defaults: []
})

@Injectable()
export class BreedState {
  constructor(private api: ApiCatService) {}

  @Selector()
  static getBreeds(state: ICatBreed[]) {
    return state;
  }

  @Action(GetBreeds)
  getBreeds({ setState }: StateContext<ICatBreed[]>) {
    return this.api.getBreeds().pipe(
      tap((breeds) => {
        setState(breeds);
      })
    );
  }

  @Action(SetBreeds)
  setBreeds({ setState }: StateContext<ICatBreed[]>, { payload }: SetBreeds) {
    setState(payload);
  }
}
