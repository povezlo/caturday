import { Injectable } from '@angular/core';

import { Observable, tap } from 'rxjs';

import { ApiClientBaseService } from '../base-api';
import { LoaderService } from '../loader';
import { LoaderState } from '@shared/ui-kit';
import { ICatBreedResponse, ICatImageRequest, ICatImageResponse, ICategoriesResponse } from '../../interfaces';
import { ApiRoutes } from './enum';

@Injectable({
  providedIn: 'root'
})
export class ApiCatService {

  constructor(private apiService: ApiClientBaseService, private loader: LoaderService) {}


  getCats(params: Partial<ICatImageRequest> = { limit: 10, category_ids: 1 }): Observable<ICatImageResponse[]> {
    this.loader.loaderStateSource$.next(LoaderState.loading);

    return this.apiService.get<ICatImageResponse[]>(ApiRoutes.images_search, params)
    .pipe(tap((cats) => {
        if(cats) {
          this.loader.loaderStateSource$.next(LoaderState.loaded);
        } else {
          this.loader.loaderStateSource$.next(LoaderState.noData);
        }
      })
    );
  }

  getBreeds(limit = 10, page = 0): Observable<ICatBreedResponse[]> {
    return this.apiService.get<ICatBreedResponse[]>(ApiRoutes.breeds, { limit, page });
  }

  getCategories(): Observable<ICategoriesResponse[]> {
    return this.apiService.get<ICategoriesResponse[]>(ApiRoutes.categories);
  }
}
