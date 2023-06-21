import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { ICatImage } from '../../interfaces';
import { ApiClientBaseService } from '../base-api';

@Injectable({
  providedIn: 'root'
})
export class ApiCatService {

  constructor(private apiService: ApiClientBaseService) {}


  getCats(): Observable<ICatImage[]> {
      return this.apiService.get<ICatImage[]>('images/search?limit=10');
  }
}
