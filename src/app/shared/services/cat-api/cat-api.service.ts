import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { ApiClientBaseService } from '../base-api/base-api.service';
import { ICatImage } from '../../interfaces';

@Injectable({
  providedIn: 'root'
})
export class ApiCatService {

  constructor(private apiService: ApiClientBaseService) {}


  getCats(): Observable<ICatImage[]> {
      return this.apiService.get<ICatImage[]>('images/search?limit=10');
  }
}
