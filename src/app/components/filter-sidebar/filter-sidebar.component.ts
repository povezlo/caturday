import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { Observable, debounceTime, distinctUntilChanged, map, startWith, switchMap } from 'rxjs';
import { Select, Store } from '@ngxs/store';
import { GetBreeds, GetCategories, UpdateCats } from '@store/actions';
import { BreedState, CategoriesState } from '@store/state';

import { filterObject, trackByIndexFn } from '@shared/helpers';
import { ICatBreedResponse, ICategoriesResponse } from '@shared/interfaces';

const BREED_IDS_FIELD = 'breed_ids';
@Component({
  selector: 'app-filter-sidebar',
  templateUrl: './filter-sidebar.component.html',
  styleUrls: ['./filter-sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilterSidebarComponent implements OnInit {
  form!: FormGroup;
  selectedLimit = [10, 20, 30, 50, 100];
  selectedtOption = '';

  filteredBreeds$?: Observable<ICatBreedResponse[]>;

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

    this.filteredBreeds$ = this.form.get(BREED_IDS_FIELD)?.valueChanges.pipe(
      startWith(''),
      debounceTime(400),
      distinctUntilChanged(),
      switchMap(filterValue => {
        return this.breedlist$.pipe(map((breedList) => this._filterList(filterValue, breedList)))
      })
    );
  }

  applyFilters(): void {
    const breedOptions = filterObject(this.form.value);

    if(BREED_IDS_FIELD in breedOptions) {
      breedOptions[BREED_IDS_FIELD] = this.selectedtOption;
    }

    this.store.dispatch(new UpdateCats(breedOptions));
  }

  getOptionSelected(selectedtOption: string): void {
    this.selectedtOption = selectedtOption;
  }

  private _filterList(value: string, breedList: ICatBreedResponse[]): ICatBreedResponse[] {
    const filterValue = value.toLowerCase().replace(/\s/g, '');

    return breedList.filter(option => option.name.toLowerCase().includes(filterValue));
  }
}
