type TResultMusic = {
  wrapperType: string;
  kind: string;
  artistId?: number;
  collectionId: number;
  trackId: number;
  artistName: string;
  collectionName: string;
  trackName: string;
  collectionCensoredName: string;
  trackCensoredName: string;
  artistViewUrl?: string;
  collectionViewUrl: string;
  trackViewUrl: string;
  previewUrl?: string;
  artworkUrl30: string;
  artworkUrl60: string;
  artworkUrl100: string;
  collectionPrice: number;
  trackPrice: number;
  releaseDate: Date;
  collectionExplicitness: string;
  trackExplicitness: string;
  discCount?: number;
  discNumber?: number;
  trackCount: number;
  trackNumber?: number;
  trackTimeMillis: number;
  country: string;
  currency: string;
  primaryGenreName: string;
  isStreamable?: boolean;
  feedUrl?: string;
  collectionHdPrice?: number;
  contentAdvisoryRating?: string;
  artworkUrl600?: string;
  genreIds?: string[];
  genres?: string[];
};

type TMusicState = {
  musicList: TResultMusic[];
  limit: number;
  searchValue: string;
  isLoading: boolean
};

export { TMusicState, TResultMusic };
