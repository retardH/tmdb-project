export type MovieAndTVShowResponse = {
  page: number;
  results: MovieOrTVShow[];
};

export type MovieOrTVShow = {
  index?: number;
  adult: false;
  backdrop_path: string;
  id: number;
  title: string;
  original_language: string;
  original_title: string;
  overview: string;
  poster_path: string;
  media_type: string;
  genre_ids: number[];
  popularity: number;
  release_date: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  original_name: string;
  name: string;
  first_air_date: string;
};

export type MovieGeneralDetails = {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: boolean | null;
  budget: number;
  genres: { id: number; name: string }[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: any[];
  production_countries: any[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: { english_name: string; iso_639_1: string; name: string }[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  videos: {
    results: Video[];
  };
  credits?: CreditsResponse;
  release_dates: {
    results: ReleaseDate[];
  };
};

export type CreditsResponse = {
  id: number;
  cast: Cast[];
  crew: Crew[];
};

export type Cast = {
  adult: boolean;
  gender: number;
  id: string;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
  cast_id: string;
  character: string;
  credit_id: number;
  order: number;
};

export type Crew = {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: string;
  profile_path: string;
  credit_id: string;
  department: string;
  job: string;
};

export type Video = {
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  key: string;
  site: string;
  size: number;
  type: string;
  official: boolean;
  published_at: string;
  id: string;
};

export type TvShowsGeneralDetails = {
  adult: boolean;
  backdrop_path: string;
  created_by: {
    id: number;
    credit_id: string;
    name: string;
    gender: number;
    profile_path: string;
  }[];
  episode_run_time: number[];
  first_air_date: string;
  genres: { id: number; name: string }[];
  homepage: string;
  id: number;
  in_production: boolean;
  languages: string[];
  last_air_date: string;
  name: string;
  networks: {
    id: number;
    logo_path: string;
    name: string;
    origin_country: string;
  }[];
  number_of_episodes: number;
  number_of_seasons: number;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_countries: { iso_3166_1: string; name: string }[];
  seasons: {
    air_date: string;
    episode_count: number;
    id: number;
    name: string;
    overview: string;
    poster_path: string;
    season_number: number;
    vote_average: number;
  }[];
  status: string;
  tagline: string;
  type: string;
  vote_average: number;
  vote_count: number;
  videos: {
    results: Video[];
  };
  credits?: CreditsResponse;
  content_ratings?: {
    results: TVShowContentRating[];
  };
};

export type People = {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
  known_for: MovieOrTVShow[];
};

export type PopularPeopleResponse = {
  page: number;
  results: People[];
  total_pages: number;
  total_results: number;
};

export type ReviewsResponse = {
  page: number;
  results: Review[];
  total_pages: number;
  total_results: number;
};

export type Review = {
  author: string;
  author_details: {
    name: string;
    username: string;
    avater_path: string | null;
    rating: number;
  };
  content: string;
  created_at: string;
  id: string;
  updated_at: string;
  url: string;
};

export type ReleaseDate = {
  iso_3166_1: string;
  release_dates: {
    certification: string;
    note: string;
    type: number;
    release_date: string;
  }[];
};

export type TVShowContentRating = {
  descriptors: any[];
  iso_3166_1: string;
  rating: string;
};

export type DiscoverFilterAndSortType = {
  'vote_count.gte': number;
  'vote_count.lte': number;
  'air_date.gte': string;
  'air_date.lte': string;
  'release_date.gte': string;
  'release_date.lte': string;
  sort_by: string;
  with_genres: string;
  without_genres: string;
  with_release_type: string;
  language: string;
  release_type: number;
};

export type FireBaseAddWatchlistsPayload = {
  id: number;
  title: string;
  overview: string;
  poster_image: string;
  rating: number;
  date: string;
};
