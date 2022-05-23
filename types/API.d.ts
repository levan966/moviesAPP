export interface MoviesInterface {
  page: number;
  results: Array<MovieType>;
}
export interface TvsInterface {
  page: number;
  results: Array<TvType>;
}
export type MovieType = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: Array<number>;
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
};
export type TvType = {
  backdrop_path: string;
  first_air_date: string;
  genre_ids: Array<number>;
  id: number;
  name: string;
  origin_country: Array<string>;
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  vote_average: number;
  vote_count: number;
};
export type DetailsType = {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: belongs_to_collectionType;
  budget: number;
  genres: Array<{id: number; name: string}>;
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: Array<production_companies_Type>;
  production_countries: Array<{iso_3166_1: string; name: string}>;
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: Array<{
    english_name: string;
    iso_639_1: string;
    name: string;
  }>;
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

type production_companies_Type = {
  id: number;
  logo_path: string | null;
  name: string;
  origin_country: string;
};
type belongs_to_collectionType = {
  id: number;
  name: string;
  poster_path: string;
  backdrop_path: string;
};
