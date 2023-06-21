import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { GetBreeds, SetBreeds } from '@store/actions';
import { ApiCatService } from '@shared/services';
import { ICatBreedResponse } from '@shared/interfaces';

@State<ICatBreedResponse[]>({
  name: 'breeds',
  defaults: []
})

@Injectable()
export class BreedState {
  constructor(private api: ApiCatService) {}

  @Selector()
  static getBreeds(state: ICatBreedResponse[]) {
    return state;
  }

  @Action(GetBreeds)
  getBreeds({ setState }: StateContext<ICatBreedResponse[]>) {
    return this.api.getBreeds().pipe(
      tap((breeds) => {
        setState(breeds);
      })
    );
  }

  @Action(SetBreeds)
  setBreeds({ setState }: StateContext<ICatBreedResponse[]>, { payload }: SetBreeds) {
    setState(payload);
  }
}
