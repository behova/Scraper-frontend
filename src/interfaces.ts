export interface DB_Image {
  thumbURL: string;
  fullURL: string;
  name: string;
  source: string;
  pallet: string;
}

export interface ApiPageResponse {
  images: DB_Image[];
  nextPage: number | undefined;
}
