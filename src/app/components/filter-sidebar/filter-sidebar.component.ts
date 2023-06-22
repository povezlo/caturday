import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { Observable } from 'rxjs';
import { Select, Store } from '@ngxs/store';
import { GetBreeds, GetCategories, UpdateCats } from '@store/actions';
import { BreedState, CategoriesState } from '@store/state';

import { filterObject, trackByIndexFn } from '@shared/helpers';
import { ICatBreedResponse, ICategoriesResponse } from '@shared/interfaces';
@Component({
  selector: 'app-filter-sidebar',
  templateUrl: './filter-sidebar.component.html',
  styleUrls: ['./filter-sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilterSidebarComponent implements OnInit {
  form!: FormGroup;
  selectedLimit = [10, 20, 30, 50, 100];

  @Select(BreedState.getBreeds) breedlist$!: Observable<ICatBreedResponse[]>;
  @Select(CategoriesState.getCategories) categorieslist$!: Observable<ICategoriesResponse[]>;


  trackByFn = trackByIndexFn;

  constructor(private store: Store, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.store.dispatch(new GetBreeds());
    this.store.dispatch(new GetCategories());

    this.form = this.fb.group({
      limit: [10],
      category_ids: [null],
      breed_ids: [null]
    });
  }

  applyFilters(): void {
    const filteredValue = filterObject(this.form.value);
    this.store.dispatch(new UpdateCats(filteredValue));
  }
}
