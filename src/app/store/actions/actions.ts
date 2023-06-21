import { ICatImage } from '@shared/interfaces';

export class GetCats {
  static readonly type = '[Cat] Get Cats';
}

export class SetCats {
  static readonly type = '[Cat] Set Cats';
  constructor(public payload: ICatImage[]) {}
}

// export class SetSelectedBreed {
//   static readonly type = '[Cat] Set Selected Breed';
//   constructor(public payload: string) {}
// }

// export class SetSelectedLimit {
//   static readonly type = '[Cat] Set Selected Limit';
//   constructor(public payload: number) {}
// }
