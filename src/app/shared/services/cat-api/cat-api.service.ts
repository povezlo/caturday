import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { ICatBreed, ICatImage, ICategories } from '../../interfaces';
import { ApiClientBaseService } from '../base-api';
import { ApiRoutes } from './enum';

@Injectable({
  providedIn: 'root'
})
export class ApiCatService {

  constructor(private apiService: ApiClientBaseService) {}


  getCats(): Observable<ICatImage[]> {
      return this.apiService.get<ICatImage[]>(ApiRoutes.images_search, { limit: 20, include_breeds: true });
  }

  getBreeds(): Observable<ICatBreed[]> {
    return this.apiService.get<ICatBreed[]>(ApiRoutes.breeds, { limit: 10, page: 0 });
  }

  getCategories(): Observable<ICategories[]> {
    return this.apiService.get<ICategories[]>(ApiRoutes.categories);
  }
}
