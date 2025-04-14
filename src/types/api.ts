export type APISpacexResponce = {
  docs: Doc[];
  totalDocs: number;
  offset: number;
  limit: number;
  totalPages: number;
  page: number;
  pagingCounter: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  prevPage: null;
  nextPage: number;
};

export type Doc = {
  fairings: Fairings | null;
  links: Links;
  static_fire_date_utc: null;
  static_fire_date_unix: null;
  net: boolean;
  window: null;
  rocket: Rocket;
  success: null;
  failures: any[];
  details: null;
  crew: any[];
  ships: any[];
  capsules: any[];
  payloads: string[];
  launchpad: Launchpad;
  flight_number: number;
  name: string;
  date_utc: Date;
  date_unix: number;
  date_local: Date;
  date_precision: DatePrecision;
  upcoming: boolean;
  cores: Core[];
  auto_update: boolean;
  tbd: boolean;
  launch_library_id: null;
  id: string;
};

export type Core = {
  core: null;
  flight: null;
  gridfins: boolean | null;
  legs: boolean | null;
  reused: boolean | null;
  landing_attempt: null;
  landing_success: null;
  landing_type: null;
  landpad: null;
};

export enum DatePrecision {
  Day = "day",
  Hour = "hour",
  Month = "month",
}

export type Fairings = {
  reused: null;
  recovery_attempt: null;
  recovered: null;
  ships: any[];
};

export enum Launchpad {
  The5E9E4501F509094Ba4566F84 = "5e9e4501f509094ba4566f84",
  The5E9E4502F509092B78566F87 = "5e9e4502f509092b78566f87",
  The5E9E4502F509094188566F88 = "5e9e4502f509094188566f88",
}

export type Links = {
  patch: Patch;
  reddit: Reddit;
  flickr: Flickr;
  presskit: null;
  webcast: null | string;
  youtube_id: null | string;
  article: null;
  wikipedia: null;
};

export type Flickr = {
  small: any[];
  original: any[];
};

export type Patch = {
  small: null | string;
  large: null | string;
};

export type Reddit = {
  campaign: null | string;
  launch: null;
  media: null;
  recovery: null | string;
};

export enum Rocket {
  The5E9D0D95Eda69973A809D1Ec = "5e9d0d95eda69973a809d1ec",
  The5E9D0D95Eda69974Db09D1Ed = "5e9d0d95eda69974db09d1ed",
}
