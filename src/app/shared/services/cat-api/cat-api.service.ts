import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { ICatBreedResponse, ICatImageResponse, ICategoriesResponse } from '../../interfaces';
import { ApiClientBaseService } from '../base-api';
import { ApiRoutes } from './enum';

@Injectable({
  providedIn: 'root'
})
export class ApiCatService {

  constructor(private apiService: ApiClientBaseService) {}


  getCats(): Observable<ICatImageResponse[]> {
      return this.apiService.get<ICatImageResponse[]>(ApiRoutes.images_search, { limit: 20, include_breeds: true });
  }

  getBreeds(): Observable<ICatBreedResponse[]> {
    return this.apiService.get<ICatBreedResponse[]>(ApiRoutes.breeds, { limit: 10, page: 0 });
  }

  getCategories(): Observable<ICategoriesResponse[]> {
    return this.apiService.get<ICategoriesResponse[]>(ApiRoutes.categories);
  }
}
