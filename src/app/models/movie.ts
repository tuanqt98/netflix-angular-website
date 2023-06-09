export interface Movies {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  revenue: number;
  runtime: number;
  status: string;
  genres: Genres[];
}
export interface MovieDto {
  page: number;
  results: Movies[];
  total_results: number;
  total_pages: number;
}
export interface Genres {
  id: number;
  name: string;
}
export interface MovieVideoDto {
  id: number;
  results: MovieVideo[];
}
export interface MovieVideo {
  site: string;
  key: string;
}
