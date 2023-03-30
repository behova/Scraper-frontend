export interface DB_Image {
  fileName: string;
  sourceName: string;
  pallet: string;
  dimensions: string;
}

export interface ApiPageResponse {
  nextPage: number | undefined;
  images: DB_Image[];
}
export interface ApiSearchResponse {
  images: DB_Image[];
}

export interface IState {
  query: string;
}
