import { Component } from '@angular/core';

import { Observable } from 'rxjs';

import { LoaderService } from '../../services';
import { LoaderState } from './enum';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent {
  loaderState = LoaderState;
  state$: Observable<LoaderState> | null = null;

  constructor(private loader: LoaderService) {
    this.state$ = this.loader.loaderState$;
  }
}
