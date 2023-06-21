import { ICatBreed, ICatImage, ICategories } from '@shared/interfaces';

export class GetCats {
  static readonly type = '[Cat] Get Cats';
}

export class SetCats {
  static readonly type = '[Cat] Set Cats';
  constructor(public payload: ICatImage[]) {}
}

export class GetBreeds {
  static readonly type = '[Breed] Get Breeds';
}

export class SetBreeds {
  static readonly type = '[Breed] Set Breeds';
  constructor(public payload: ICatBreed[]) {}
}

export class GetCategories {
  static readonly type = '[Categories] Get Categories';
}

export class SetCategories {
  static readonly type = '[Categories] Set Categories';
  constructor(public payload: ICategories[]) {}
}
