import { ActionInterface } from "./action";
import { SpotyAlbumIF, SpotyPlaylistIF, SpotyImageIF } from "./spotifyApiTypes";

export enum ActiveTypeEnum {
  search = "search",
  new = "new",
  featured = "featured",
}

export interface SpotyAppDataIF {
  active: ActiveTypeEnum;
  searchText: string;
  featureList: SpotyDataList[];
  lastWeekSongs: SpotyDataList[];
  searchResult: SpotyAppSearchResultIF;
  paging: SpotyPagingIF;
}

export interface SpotyAppSearchResultIF {
  albums: SpotyDataList[];
  playlist: SpotyDataList[];
}

export interface SpotyPagingIF {
  limit: number;
  offset: number;
  total: number;
}

export interface SpotyDataList {
  images: SpotyImageIF | undefined;
  name: string;
  message: string;
  id: string;
  url: string;
}

export interface SetActiveActionPayloadIF {
  active: ActiveTypeEnum;
  searchText: string;
}

export interface SetActiveActionInterface extends ActionInterface {
  payload: SetActiveActionPayloadIF;
}

export interface FeatureListActionPayloadIF {
  list: SpotyPlaylistIF[];
  total: number;
}

export interface FeatureListActionInterface extends ActionInterface {
  payload: FeatureListActionPayloadIF;
}

export interface LastWeekRelaseActionPayloadIF {
  list: SpotyAlbumIF[];
  total: number;
}

export interface LastWeekRelaseActionInterface extends ActionInterface {
  payload: LastWeekRelaseActionPayloadIF;
}

export interface DoSearchActionPayloadIF {
  albums: SpotyAlbumIF[];
  playlist: SpotyPlaylistIF[];
}

export interface DoSearchActionInterface extends ActionInterface {
  payload: DoSearchActionPayloadIF;
}

export type SpotyActionType =
  | FeatureListActionInterface
  | LastWeekRelaseActionInterface
  | DoSearchActionInterface
  | SetActiveActionInterface;
