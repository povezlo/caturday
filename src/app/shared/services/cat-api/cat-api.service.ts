import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { ApiClientBaseService } from '../base-api/base-api.service';

@Injectable({
  providedIn: 'root'
})
export class ApiCatService {

  constructor(private apiService: ApiClientBaseService) {}


  getCats(): Observable<any> | null {
      return this.apiService.get<any>('images/search?limit=10');
  }
}
