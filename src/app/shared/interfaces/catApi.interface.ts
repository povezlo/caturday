export interface ICatImage {
  breeds: ICatBreed[];
  id: string;
  url: string;
  width: number;
  height: number;
}

export interface ICatBreed {
  id: number;
  name: string;
}

