import { ICatBreedResponse, ICatImageRequest, ICatImageResponse, ICategoriesResponse } from '@shared/interfaces';

export class GetCats {
  static readonly type = '[Cat] Get Cats';
}

export class SetCats {
  static readonly type = '[Cat] Set Cats';
  constructor(public payload: ICatImageResponse[]) {}
}

export class UpdateCats {
  static readonly type = '[Cat] Update Cats';
  constructor(public payload: Partial<ICatImageRequest>) {}
}

export class GetBreeds {
  static readonly type = '[Breed] Get Breeds';
}

export class SetBreeds {
  static readonly type = '[Breed] Set Breeds';
  constructor(public payload: ICatBreedResponse[]) {}
}

export class GetCategories {
  static readonly type = '[Categories] Get Categories';
}

export class SetCategories {
  static readonly type = '[Categories] Set Categories';
  constructor(public payload: ICategoriesResponse[]) {}
}
