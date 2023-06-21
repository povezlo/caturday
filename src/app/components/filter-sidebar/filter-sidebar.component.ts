import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { Select, Store } from '@ngxs/store';
import { GetBreeds, GetCategories } from '@store/actions';
import { BreedState, CategoriesState } from '@store/state';

import { trackByIndexFn } from '@shared/helpers';
import { ICatBreedResponse, ICategoriesResponse } from '@shared/interfaces';
@Component({
  selector: 'app-filter-sidebar',
  templateUrl: './filter-sidebar.component.html',
  styleUrls: ['./filter-sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilterSidebarComponent implements OnInit {
  @Select(BreedState.getBreeds) breedlist$!: Observable<ICatBreedResponse[]>;
  @Select(CategoriesState.getCategories) categorieslist$!: Observable<ICategoriesResponse[]>;
  selectedBreed = 'all';
  selectedLimit = 10;

  trackByFn = trackByIndexFn;

  constructor(private store: Store) {}

  ngOnInit(): void {
      this.store.dispatch(new GetBreeds());
      this.store.dispatch(new GetCategories());
  }

  applyFilters() {}
}
