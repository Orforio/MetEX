import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
  /** A time string with format: HH:mm:ss.SSS */
  Time: any;
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** The `Long` scalar type represents 52-bit integers */
  Long: any;
};



export type Query = {
  __typename?: 'Query';
  interchange?: Maybe<Interchange>;
  interchanges?: Maybe<Array<Maybe<Interchange>>>;
  interchangesConnection?: Maybe<InterchangeConnection>;
  line?: Maybe<Line>;
  lines?: Maybe<Array<Maybe<Line>>>;
  linesConnection?: Maybe<LineConnection>;
  movement?: Maybe<Movement>;
  movements?: Maybe<Array<Maybe<Movement>>>;
  movementsConnection?: Maybe<MovementConnection>;
  place?: Maybe<Place>;
  places?: Maybe<Array<Maybe<Place>>>;
  placesConnection?: Maybe<PlaceConnection>;
  station?: Maybe<Station>;
  stations?: Maybe<Array<Maybe<Station>>>;
  stationsConnection?: Maybe<StationConnection>;
  files?: Maybe<Array<Maybe<UploadFile>>>;
  filesConnection?: Maybe<UploadFileConnection>;
  role?: Maybe<UsersPermissionsRole>;
  /** Retrieve all the existing roles. You can't apply filters on this query. */
  roles?: Maybe<Array<Maybe<UsersPermissionsRole>>>;
  rolesConnection?: Maybe<UsersPermissionsRoleConnection>;
  user?: Maybe<UsersPermissionsUser>;
  users?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
  usersConnection?: Maybe<UsersPermissionsUserConnection>;
  me?: Maybe<UsersPermissionsMe>;
};


export type QueryInterchangeArgs = {
  id: Scalars['ID'];
};


export type QueryInterchangesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryInterchangesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryLineArgs = {
  id: Scalars['ID'];
};


export type QueryLinesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryLinesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryMovementArgs = {
  id: Scalars['ID'];
};


export type QueryMovementsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryMovementsConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryPlaceArgs = {
  id: Scalars['ID'];
};


export type QueryPlacesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryPlacesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryStationArgs = {
  id: Scalars['ID'];
};


export type QueryStationsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryStationsConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryFilesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryFilesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryRoleArgs = {
  id: Scalars['ID'];
};


export type QueryRolesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryRolesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryUserArgs = {
  id: Scalars['ID'];
};


export type QueryUsersArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryUsersConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type Interchange = {
  __typename?: 'Interchange';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  name: Scalars['String'];
  slug?: Maybe<Scalars['String']>;
  created_by?: Maybe<AdminUser>;
  updated_by?: Maybe<AdminUser>;
  stations?: Maybe<Array<Maybe<Station>>>;
};


export type InterchangeStationsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type AdminUser = {
  __typename?: 'AdminUser';
  id: Scalars['ID'];
  username?: Maybe<Scalars['String']>;
};


export type Station = {
  __typename?: 'Station';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  name: Scalars['String'];
  description: Scalars['String'];
  active?: Maybe<Scalars['Boolean']>;
  slug?: Maybe<Scalars['String']>;
  line?: Maybe<Line>;
  interchange?: Maybe<Interchange>;
  sound?: Maybe<UploadFile>;
  created_by?: Maybe<AdminUser>;
  updated_by?: Maybe<AdminUser>;
  places?: Maybe<Array<Maybe<Place>>>;
  images?: Maybe<Array<Maybe<UploadFile>>>;
  movements?: Maybe<Array<Maybe<Movement>>>;
};


export type StationPlacesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type StationImagesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type StationMovementsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type Line = {
  __typename?: 'Line';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  active?: Maybe<Scalars['Boolean']>;
  slug?: Maybe<Scalars['String']>;
  order: Scalars['Int'];
  created_by?: Maybe<AdminUser>;
  updated_by?: Maybe<AdminUser>;
  stations?: Maybe<Array<Maybe<Station>>>;
};


export type LineStationsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type UploadFile = {
  __typename?: 'UploadFile';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  name: Scalars['String'];
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  formats?: Maybe<Scalars['JSON']>;
  hash: Scalars['String'];
  ext?: Maybe<Scalars['String']>;
  mime: Scalars['String'];
  size: Scalars['Float'];
  url: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: Maybe<Scalars['JSON']>;
  created_by?: Maybe<AdminUser>;
  updated_by?: Maybe<AdminUser>;
  related?: Maybe<Array<Maybe<Morph>>>;
};


export type UploadFileRelatedArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type Morph = UsersPermissionsMe | UsersPermissionsMeRole | UsersPermissionsLoginPayload | UserPermissionsPasswordPayload | Interchange | InterchangeConnection | InterchangeAggregator | InterchangeGroupBy | InterchangeConnectionId | InterchangeConnectionCreated_At | InterchangeConnectionUpdated_At | InterchangeConnectionName | InterchangeConnectionSlug | InterchangeConnectionCreated_By | InterchangeConnectionUpdated_By | CreateInterchangePayload | UpdateInterchangePayload | DeleteInterchangePayload | Line | LineConnection | LineAggregator | LineAggregatorSum | LineAggregatorAvg | LineAggregatorMin | LineAggregatorMax | LineGroupBy | LineConnectionId | LineConnectionCreated_At | LineConnectionUpdated_At | LineConnectionName | LineConnectionDescription | LineConnectionActive | LineConnectionSlug | LineConnectionOrder | LineConnectionCreated_By | LineConnectionUpdated_By | CreateLinePayload | UpdateLinePayload | DeleteLinePayload | Movement | MovementConnection | MovementAggregator | MovementGroupBy | MovementConnectionId | MovementConnectionCreated_At | MovementConnectionUpdated_At | MovementConnectionUp_Station | MovementConnectionDown_Station | MovementConnectionUp_Allowed | MovementConnectionDown_Allowed | MovementConnectionCreated_By | MovementConnectionUpdated_By | CreateMovementPayload | UpdateMovementPayload | DeleteMovementPayload | Place | PlaceConnection | PlaceAggregator | PlaceGroupBy | PlaceConnectionId | PlaceConnectionCreated_At | PlaceConnectionUpdated_At | PlaceConnectionName | PlaceConnectionDescription | PlaceConnectionSlug | PlaceConnectionCreated_By | PlaceConnectionUpdated_By | CreatePlacePayload | UpdatePlacePayload | DeletePlacePayload | Station | StationConnection | StationAggregator | StationGroupBy | StationConnectionId | StationConnectionCreated_At | StationConnectionUpdated_At | StationConnectionName | StationConnectionDescription | StationConnectionActive | StationConnectionSlug | StationConnectionLine | StationConnectionInterchange | StationConnectionSound | StationConnectionCreated_By | StationConnectionUpdated_By | CreateStationPayload | UpdateStationPayload | DeleteStationPayload | UploadFile | UploadFileConnection | UploadFileAggregator | UploadFileAggregatorSum | UploadFileAggregatorAvg | UploadFileAggregatorMin | UploadFileAggregatorMax | UploadFileGroupBy | UploadFileConnectionId | UploadFileConnectionCreated_At | UploadFileConnectionUpdated_At | UploadFileConnectionName | UploadFileConnectionAlternativeText | UploadFileConnectionCaption | UploadFileConnectionWidth | UploadFileConnectionHeight | UploadFileConnectionFormats | UploadFileConnectionHash | UploadFileConnectionExt | UploadFileConnectionMime | UploadFileConnectionSize | UploadFileConnectionUrl | UploadFileConnectionPreviewUrl | UploadFileConnectionProvider | UploadFileConnectionProvider_Metadata | UploadFileConnectionCreated_By | UploadFileConnectionUpdated_By | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsRoleConnection | UsersPermissionsRoleAggregator | UsersPermissionsRoleGroupBy | UsersPermissionsRoleConnectionId | UsersPermissionsRoleConnectionName | UsersPermissionsRoleConnectionDescription | UsersPermissionsRoleConnectionType | UsersPermissionsRoleConnectionCreated_By | UsersPermissionsRoleConnectionUpdated_By | CreateRolePayload | UpdateRolePayload | DeleteRolePayload | UsersPermissionsUser | UsersPermissionsUserConnection | UsersPermissionsUserAggregator | UsersPermissionsUserGroupBy | UsersPermissionsUserConnectionId | UsersPermissionsUserConnectionCreated_At | UsersPermissionsUserConnectionUpdated_At | UsersPermissionsUserConnectionUsername | UsersPermissionsUserConnectionEmail | UsersPermissionsUserConnectionProvider | UsersPermissionsUserConnectionConfirmed | UsersPermissionsUserConnectionBlocked | UsersPermissionsUserConnectionRole | UsersPermissionsUserConnectionCreated_By | UsersPermissionsUserConnectionUpdated_By | CreateUserPayload | UpdateUserPayload | DeleteUserPayload;

export type UsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe';
  id: Scalars['ID'];
  username: Scalars['String'];
  email: Scalars['String'];
  confirmed?: Maybe<Scalars['Boolean']>;
  blocked?: Maybe<Scalars['Boolean']>;
  role?: Maybe<UsersPermissionsMeRole>;
};

export type UsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole';
  id: Scalars['ID'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type UsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload';
  jwt?: Maybe<Scalars['String']>;
  user: UsersPermissionsMe;
};

export type UserPermissionsPasswordPayload = {
  __typename?: 'UserPermissionsPasswordPayload';
  ok: Scalars['Boolean'];
};

export type InterchangeConnection = {
  __typename?: 'InterchangeConnection';
  values?: Maybe<Array<Maybe<Interchange>>>;
  groupBy?: Maybe<InterchangeGroupBy>;
  aggregate?: Maybe<InterchangeAggregator>;
};

export type InterchangeGroupBy = {
  __typename?: 'InterchangeGroupBy';
  id?: Maybe<Array<Maybe<InterchangeConnectionId>>>;
  created_at?: Maybe<Array<Maybe<InterchangeConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<InterchangeConnectionUpdated_At>>>;
  name?: Maybe<Array<Maybe<InterchangeConnectionName>>>;
  slug?: Maybe<Array<Maybe<InterchangeConnectionSlug>>>;
  created_by?: Maybe<Array<Maybe<InterchangeConnectionCreated_By>>>;
  updated_by?: Maybe<Array<Maybe<InterchangeConnectionUpdated_By>>>;
};

export type InterchangeConnectionId = {
  __typename?: 'InterchangeConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<InterchangeConnection>;
};

export type InterchangeConnectionCreated_At = {
  __typename?: 'InterchangeConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<InterchangeConnection>;
};

export type InterchangeConnectionUpdated_At = {
  __typename?: 'InterchangeConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<InterchangeConnection>;
};

export type InterchangeConnectionName = {
  __typename?: 'InterchangeConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<InterchangeConnection>;
};

export type InterchangeConnectionSlug = {
  __typename?: 'InterchangeConnectionSlug';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<InterchangeConnection>;
};

export type InterchangeConnectionCreated_By = {
  __typename?: 'InterchangeConnectionCreated_by';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<InterchangeConnection>;
};

export type InterchangeConnectionUpdated_By = {
  __typename?: 'InterchangeConnectionUpdated_by';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<InterchangeConnection>;
};

export type InterchangeAggregator = {
  __typename?: 'InterchangeAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type CreateInterchangePayload = {
  __typename?: 'createInterchangePayload';
  interchange?: Maybe<Interchange>;
};

export type UpdateInterchangePayload = {
  __typename?: 'updateInterchangePayload';
  interchange?: Maybe<Interchange>;
};

export type DeleteInterchangePayload = {
  __typename?: 'deleteInterchangePayload';
  interchange?: Maybe<Interchange>;
};

export type LineConnection = {
  __typename?: 'LineConnection';
  values?: Maybe<Array<Maybe<Line>>>;
  groupBy?: Maybe<LineGroupBy>;
  aggregate?: Maybe<LineAggregator>;
};

export type LineGroupBy = {
  __typename?: 'LineGroupBy';
  id?: Maybe<Array<Maybe<LineConnectionId>>>;
  created_at?: Maybe<Array<Maybe<LineConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<LineConnectionUpdated_At>>>;
  name?: Maybe<Array<Maybe<LineConnectionName>>>;
  description?: Maybe<Array<Maybe<LineConnectionDescription>>>;
  active?: Maybe<Array<Maybe<LineConnectionActive>>>;
  slug?: Maybe<Array<Maybe<LineConnectionSlug>>>;
  order?: Maybe<Array<Maybe<LineConnectionOrder>>>;
  created_by?: Maybe<Array<Maybe<LineConnectionCreated_By>>>;
  updated_by?: Maybe<Array<Maybe<LineConnectionUpdated_By>>>;
};

export type LineConnectionId = {
  __typename?: 'LineConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<LineConnection>;
};

export type LineConnectionCreated_At = {
  __typename?: 'LineConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<LineConnection>;
};

export type LineConnectionUpdated_At = {
  __typename?: 'LineConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<LineConnection>;
};

export type LineConnectionName = {
  __typename?: 'LineConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<LineConnection>;
};

export type LineConnectionDescription = {
  __typename?: 'LineConnectionDescription';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<LineConnection>;
};

export type LineConnectionActive = {
  __typename?: 'LineConnectionActive';
  key?: Maybe<Scalars['Boolean']>;
  connection?: Maybe<LineConnection>;
};

export type LineConnectionSlug = {
  __typename?: 'LineConnectionSlug';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<LineConnection>;
};

export type LineConnectionOrder = {
  __typename?: 'LineConnectionOrder';
  key?: Maybe<Scalars['Int']>;
  connection?: Maybe<LineConnection>;
};

export type LineConnectionCreated_By = {
  __typename?: 'LineConnectionCreated_by';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<LineConnection>;
};

export type LineConnectionUpdated_By = {
  __typename?: 'LineConnectionUpdated_by';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<LineConnection>;
};

export type LineAggregator = {
  __typename?: 'LineAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
  sum?: Maybe<LineAggregatorSum>;
  avg?: Maybe<LineAggregatorAvg>;
  min?: Maybe<LineAggregatorMin>;
  max?: Maybe<LineAggregatorMax>;
};

export type LineAggregatorSum = {
  __typename?: 'LineAggregatorSum';
  order?: Maybe<Scalars['Float']>;
};

export type LineAggregatorAvg = {
  __typename?: 'LineAggregatorAvg';
  order?: Maybe<Scalars['Float']>;
};

export type LineAggregatorMin = {
  __typename?: 'LineAggregatorMin';
  order?: Maybe<Scalars['Float']>;
};

export type LineAggregatorMax = {
  __typename?: 'LineAggregatorMax';
  order?: Maybe<Scalars['Float']>;
};

export type CreateLinePayload = {
  __typename?: 'createLinePayload';
  line?: Maybe<Line>;
};

export type UpdateLinePayload = {
  __typename?: 'updateLinePayload';
  line?: Maybe<Line>;
};

export type DeleteLinePayload = {
  __typename?: 'deleteLinePayload';
  line?: Maybe<Line>;
};

export type Movement = {
  __typename?: 'Movement';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  up_station?: Maybe<Station>;
  down_station?: Maybe<Station>;
  up_allowed?: Maybe<Scalars['Boolean']>;
  down_allowed?: Maybe<Scalars['Boolean']>;
  created_by?: Maybe<AdminUser>;
  updated_by?: Maybe<AdminUser>;
  stations?: Maybe<Array<Maybe<Station>>>;
};


export type MovementStationsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type MovementConnection = {
  __typename?: 'MovementConnection';
  values?: Maybe<Array<Maybe<Movement>>>;
  groupBy?: Maybe<MovementGroupBy>;
  aggregate?: Maybe<MovementAggregator>;
};

export type MovementGroupBy = {
  __typename?: 'MovementGroupBy';
  id?: Maybe<Array<Maybe<MovementConnectionId>>>;
  created_at?: Maybe<Array<Maybe<MovementConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<MovementConnectionUpdated_At>>>;
  up_station?: Maybe<Array<Maybe<MovementConnectionUp_Station>>>;
  down_station?: Maybe<Array<Maybe<MovementConnectionDown_Station>>>;
  up_allowed?: Maybe<Array<Maybe<MovementConnectionUp_Allowed>>>;
  down_allowed?: Maybe<Array<Maybe<MovementConnectionDown_Allowed>>>;
  created_by?: Maybe<Array<Maybe<MovementConnectionCreated_By>>>;
  updated_by?: Maybe<Array<Maybe<MovementConnectionUpdated_By>>>;
};

export type MovementConnectionId = {
  __typename?: 'MovementConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<MovementConnection>;
};

export type MovementConnectionCreated_At = {
  __typename?: 'MovementConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<MovementConnection>;
};

export type MovementConnectionUpdated_At = {
  __typename?: 'MovementConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<MovementConnection>;
};

export type MovementConnectionUp_Station = {
  __typename?: 'MovementConnectionUp_station';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<MovementConnection>;
};

export type MovementConnectionDown_Station = {
  __typename?: 'MovementConnectionDown_station';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<MovementConnection>;
};

export type MovementConnectionUp_Allowed = {
  __typename?: 'MovementConnectionUp_allowed';
  key?: Maybe<Scalars['Boolean']>;
  connection?: Maybe<MovementConnection>;
};

export type MovementConnectionDown_Allowed = {
  __typename?: 'MovementConnectionDown_allowed';
  key?: Maybe<Scalars['Boolean']>;
  connection?: Maybe<MovementConnection>;
};

export type MovementConnectionCreated_By = {
  __typename?: 'MovementConnectionCreated_by';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<MovementConnection>;
};

export type MovementConnectionUpdated_By = {
  __typename?: 'MovementConnectionUpdated_by';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<MovementConnection>;
};

export type MovementAggregator = {
  __typename?: 'MovementAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type CreateMovementPayload = {
  __typename?: 'createMovementPayload';
  movement?: Maybe<Movement>;
};

export type UpdateMovementPayload = {
  __typename?: 'updateMovementPayload';
  movement?: Maybe<Movement>;
};

export type DeleteMovementPayload = {
  __typename?: 'deleteMovementPayload';
  movement?: Maybe<Movement>;
};

export type Place = {
  __typename?: 'Place';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  name: Scalars['String'];
  description: Scalars['String'];
  slug?: Maybe<Scalars['String']>;
  created_by?: Maybe<AdminUser>;
  updated_by?: Maybe<AdminUser>;
  images?: Maybe<Array<Maybe<UploadFile>>>;
  stations?: Maybe<Array<Maybe<Station>>>;
};


export type PlaceImagesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type PlaceStationsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type PlaceConnection = {
  __typename?: 'PlaceConnection';
  values?: Maybe<Array<Maybe<Place>>>;
  groupBy?: Maybe<PlaceGroupBy>;
  aggregate?: Maybe<PlaceAggregator>;
};

export type PlaceGroupBy = {
  __typename?: 'PlaceGroupBy';
  id?: Maybe<Array<Maybe<PlaceConnectionId>>>;
  created_at?: Maybe<Array<Maybe<PlaceConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<PlaceConnectionUpdated_At>>>;
  name?: Maybe<Array<Maybe<PlaceConnectionName>>>;
  description?: Maybe<Array<Maybe<PlaceConnectionDescription>>>;
  slug?: Maybe<Array<Maybe<PlaceConnectionSlug>>>;
  created_by?: Maybe<Array<Maybe<PlaceConnectionCreated_By>>>;
  updated_by?: Maybe<Array<Maybe<PlaceConnectionUpdated_By>>>;
};

export type PlaceConnectionId = {
  __typename?: 'PlaceConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<PlaceConnection>;
};

export type PlaceConnectionCreated_At = {
  __typename?: 'PlaceConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<PlaceConnection>;
};

export type PlaceConnectionUpdated_At = {
  __typename?: 'PlaceConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<PlaceConnection>;
};

export type PlaceConnectionName = {
  __typename?: 'PlaceConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<PlaceConnection>;
};

export type PlaceConnectionDescription = {
  __typename?: 'PlaceConnectionDescription';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<PlaceConnection>;
};

export type PlaceConnectionSlug = {
  __typename?: 'PlaceConnectionSlug';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<PlaceConnection>;
};

export type PlaceConnectionCreated_By = {
  __typename?: 'PlaceConnectionCreated_by';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<PlaceConnection>;
};

export type PlaceConnectionUpdated_By = {
  __typename?: 'PlaceConnectionUpdated_by';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<PlaceConnection>;
};

export type PlaceAggregator = {
  __typename?: 'PlaceAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type CreatePlacePayload = {
  __typename?: 'createPlacePayload';
  place?: Maybe<Place>;
};

export type UpdatePlacePayload = {
  __typename?: 'updatePlacePayload';
  place?: Maybe<Place>;
};

export type DeletePlacePayload = {
  __typename?: 'deletePlacePayload';
  place?: Maybe<Place>;
};

export type StationConnection = {
  __typename?: 'StationConnection';
  values?: Maybe<Array<Maybe<Station>>>;
  groupBy?: Maybe<StationGroupBy>;
  aggregate?: Maybe<StationAggregator>;
};

export type StationGroupBy = {
  __typename?: 'StationGroupBy';
  id?: Maybe<Array<Maybe<StationConnectionId>>>;
  created_at?: Maybe<Array<Maybe<StationConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<StationConnectionUpdated_At>>>;
  name?: Maybe<Array<Maybe<StationConnectionName>>>;
  description?: Maybe<Array<Maybe<StationConnectionDescription>>>;
  active?: Maybe<Array<Maybe<StationConnectionActive>>>;
  slug?: Maybe<Array<Maybe<StationConnectionSlug>>>;
  line?: Maybe<Array<Maybe<StationConnectionLine>>>;
  interchange?: Maybe<Array<Maybe<StationConnectionInterchange>>>;
  sound?: Maybe<Array<Maybe<StationConnectionSound>>>;
  created_by?: Maybe<Array<Maybe<StationConnectionCreated_By>>>;
  updated_by?: Maybe<Array<Maybe<StationConnectionUpdated_By>>>;
};

export type StationConnectionId = {
  __typename?: 'StationConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<StationConnection>;
};

export type StationConnectionCreated_At = {
  __typename?: 'StationConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<StationConnection>;
};

export type StationConnectionUpdated_At = {
  __typename?: 'StationConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<StationConnection>;
};

export type StationConnectionName = {
  __typename?: 'StationConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<StationConnection>;
};

export type StationConnectionDescription = {
  __typename?: 'StationConnectionDescription';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<StationConnection>;
};

export type StationConnectionActive = {
  __typename?: 'StationConnectionActive';
  key?: Maybe<Scalars['Boolean']>;
  connection?: Maybe<StationConnection>;
};

export type StationConnectionSlug = {
  __typename?: 'StationConnectionSlug';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<StationConnection>;
};

export type StationConnectionLine = {
  __typename?: 'StationConnectionLine';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<StationConnection>;
};

export type StationConnectionInterchange = {
  __typename?: 'StationConnectionInterchange';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<StationConnection>;
};

export type StationConnectionSound = {
  __typename?: 'StationConnectionSound';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<StationConnection>;
};

export type StationConnectionCreated_By = {
  __typename?: 'StationConnectionCreated_by';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<StationConnection>;
};

export type StationConnectionUpdated_By = {
  __typename?: 'StationConnectionUpdated_by';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<StationConnection>;
};

export type StationAggregator = {
  __typename?: 'StationAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type CreateStationPayload = {
  __typename?: 'createStationPayload';
  station?: Maybe<Station>;
};

export type UpdateStationPayload = {
  __typename?: 'updateStationPayload';
  station?: Maybe<Station>;
};

export type DeleteStationPayload = {
  __typename?: 'deleteStationPayload';
  station?: Maybe<Station>;
};

export type UploadFileConnection = {
  __typename?: 'UploadFileConnection';
  values?: Maybe<Array<Maybe<UploadFile>>>;
  groupBy?: Maybe<UploadFileGroupBy>;
  aggregate?: Maybe<UploadFileAggregator>;
};

export type UploadFileGroupBy = {
  __typename?: 'UploadFileGroupBy';
  id?: Maybe<Array<Maybe<UploadFileConnectionId>>>;
  created_at?: Maybe<Array<Maybe<UploadFileConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<UploadFileConnectionUpdated_At>>>;
  name?: Maybe<Array<Maybe<UploadFileConnectionName>>>;
  alternativeText?: Maybe<Array<Maybe<UploadFileConnectionAlternativeText>>>;
  caption?: Maybe<Array<Maybe<UploadFileConnectionCaption>>>;
  width?: Maybe<Array<Maybe<UploadFileConnectionWidth>>>;
  height?: Maybe<Array<Maybe<UploadFileConnectionHeight>>>;
  formats?: Maybe<Array<Maybe<UploadFileConnectionFormats>>>;
  hash?: Maybe<Array<Maybe<UploadFileConnectionHash>>>;
  ext?: Maybe<Array<Maybe<UploadFileConnectionExt>>>;
  mime?: Maybe<Array<Maybe<UploadFileConnectionMime>>>;
  size?: Maybe<Array<Maybe<UploadFileConnectionSize>>>;
  url?: Maybe<Array<Maybe<UploadFileConnectionUrl>>>;
  previewUrl?: Maybe<Array<Maybe<UploadFileConnectionPreviewUrl>>>;
  provider?: Maybe<Array<Maybe<UploadFileConnectionProvider>>>;
  provider_metadata?: Maybe<Array<Maybe<UploadFileConnectionProvider_Metadata>>>;
  created_by?: Maybe<Array<Maybe<UploadFileConnectionCreated_By>>>;
  updated_by?: Maybe<Array<Maybe<UploadFileConnectionUpdated_By>>>;
};

export type UploadFileConnectionId = {
  __typename?: 'UploadFileConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionCreated_At = {
  __typename?: 'UploadFileConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionUpdated_At = {
  __typename?: 'UploadFileConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionName = {
  __typename?: 'UploadFileConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionAlternativeText = {
  __typename?: 'UploadFileConnectionAlternativeText';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionCaption = {
  __typename?: 'UploadFileConnectionCaption';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionWidth = {
  __typename?: 'UploadFileConnectionWidth';
  key?: Maybe<Scalars['Int']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionHeight = {
  __typename?: 'UploadFileConnectionHeight';
  key?: Maybe<Scalars['Int']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionFormats = {
  __typename?: 'UploadFileConnectionFormats';
  key?: Maybe<Scalars['JSON']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionHash = {
  __typename?: 'UploadFileConnectionHash';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionExt = {
  __typename?: 'UploadFileConnectionExt';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionMime = {
  __typename?: 'UploadFileConnectionMime';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionSize = {
  __typename?: 'UploadFileConnectionSize';
  key?: Maybe<Scalars['Float']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionUrl = {
  __typename?: 'UploadFileConnectionUrl';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionPreviewUrl = {
  __typename?: 'UploadFileConnectionPreviewUrl';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionProvider = {
  __typename?: 'UploadFileConnectionProvider';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionProvider_Metadata = {
  __typename?: 'UploadFileConnectionProvider_metadata';
  key?: Maybe<Scalars['JSON']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionCreated_By = {
  __typename?: 'UploadFileConnectionCreated_by';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionUpdated_By = {
  __typename?: 'UploadFileConnectionUpdated_by';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileAggregator = {
  __typename?: 'UploadFileAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
  sum?: Maybe<UploadFileAggregatorSum>;
  avg?: Maybe<UploadFileAggregatorAvg>;
  min?: Maybe<UploadFileAggregatorMin>;
  max?: Maybe<UploadFileAggregatorMax>;
};

export type UploadFileAggregatorSum = {
  __typename?: 'UploadFileAggregatorSum';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorAvg = {
  __typename?: 'UploadFileAggregatorAvg';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorMin = {
  __typename?: 'UploadFileAggregatorMin';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorMax = {
  __typename?: 'UploadFileAggregatorMax';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission';
  id: Scalars['ID'];
  type: Scalars['String'];
  controller: Scalars['String'];
  action: Scalars['String'];
  enabled: Scalars['Boolean'];
  policy?: Maybe<Scalars['String']>;
  role?: Maybe<UsersPermissionsRole>;
  created_by?: Maybe<AdminUser>;
  updated_by?: Maybe<AdminUser>;
};

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole';
  id: Scalars['ID'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  created_by?: Maybe<AdminUser>;
  updated_by?: Maybe<AdminUser>;
  permissions?: Maybe<Array<Maybe<UsersPermissionsPermission>>>;
  users?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
};


export type UsersPermissionsRolePermissionsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type UsersPermissionsRoleUsersArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  username: Scalars['String'];
  email: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  blocked?: Maybe<Scalars['Boolean']>;
  role?: Maybe<UsersPermissionsRole>;
  created_by?: Maybe<AdminUser>;
  updated_by?: Maybe<AdminUser>;
};

export type UsersPermissionsRoleConnection = {
  __typename?: 'UsersPermissionsRoleConnection';
  values?: Maybe<Array<Maybe<UsersPermissionsRole>>>;
  groupBy?: Maybe<UsersPermissionsRoleGroupBy>;
  aggregate?: Maybe<UsersPermissionsRoleAggregator>;
};

export type UsersPermissionsRoleGroupBy = {
  __typename?: 'UsersPermissionsRoleGroupBy';
  id?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionId>>>;
  name?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionName>>>;
  description?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionDescription>>>;
  type?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionType>>>;
  created_by?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionCreated_By>>>;
  updated_by?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionUpdated_By>>>;
};

export type UsersPermissionsRoleConnectionId = {
  __typename?: 'UsersPermissionsRoleConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleConnectionName = {
  __typename?: 'UsersPermissionsRoleConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleConnectionDescription = {
  __typename?: 'UsersPermissionsRoleConnectionDescription';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleConnectionType = {
  __typename?: 'UsersPermissionsRoleConnectionType';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleConnectionCreated_By = {
  __typename?: 'UsersPermissionsRoleConnectionCreated_by';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleConnectionUpdated_By = {
  __typename?: 'UsersPermissionsRoleConnectionUpdated_by';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleAggregator = {
  __typename?: 'UsersPermissionsRoleAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type CreateRolePayload = {
  __typename?: 'createRolePayload';
  role?: Maybe<UsersPermissionsRole>;
};

export type UpdateRolePayload = {
  __typename?: 'updateRolePayload';
  role?: Maybe<UsersPermissionsRole>;
};

export type DeleteRolePayload = {
  __typename?: 'deleteRolePayload';
  role?: Maybe<UsersPermissionsRole>;
};

export type UsersPermissionsUserConnection = {
  __typename?: 'UsersPermissionsUserConnection';
  values?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
  groupBy?: Maybe<UsersPermissionsUserGroupBy>;
  aggregate?: Maybe<UsersPermissionsUserAggregator>;
};

export type UsersPermissionsUserGroupBy = {
  __typename?: 'UsersPermissionsUserGroupBy';
  id?: Maybe<Array<Maybe<UsersPermissionsUserConnectionId>>>;
  created_at?: Maybe<Array<Maybe<UsersPermissionsUserConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<UsersPermissionsUserConnectionUpdated_At>>>;
  username?: Maybe<Array<Maybe<UsersPermissionsUserConnectionUsername>>>;
  email?: Maybe<Array<Maybe<UsersPermissionsUserConnectionEmail>>>;
  provider?: Maybe<Array<Maybe<UsersPermissionsUserConnectionProvider>>>;
  confirmed?: Maybe<Array<Maybe<UsersPermissionsUserConnectionConfirmed>>>;
  blocked?: Maybe<Array<Maybe<UsersPermissionsUserConnectionBlocked>>>;
  role?: Maybe<Array<Maybe<UsersPermissionsUserConnectionRole>>>;
  created_by?: Maybe<Array<Maybe<UsersPermissionsUserConnectionCreated_By>>>;
  updated_by?: Maybe<Array<Maybe<UsersPermissionsUserConnectionUpdated_By>>>;
};

export type UsersPermissionsUserConnectionId = {
  __typename?: 'UsersPermissionsUserConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionCreated_At = {
  __typename?: 'UsersPermissionsUserConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionUpdated_At = {
  __typename?: 'UsersPermissionsUserConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionUsername = {
  __typename?: 'UsersPermissionsUserConnectionUsername';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionEmail = {
  __typename?: 'UsersPermissionsUserConnectionEmail';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionProvider = {
  __typename?: 'UsersPermissionsUserConnectionProvider';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionConfirmed = {
  __typename?: 'UsersPermissionsUserConnectionConfirmed';
  key?: Maybe<Scalars['Boolean']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionBlocked = {
  __typename?: 'UsersPermissionsUserConnectionBlocked';
  key?: Maybe<Scalars['Boolean']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionRole = {
  __typename?: 'UsersPermissionsUserConnectionRole';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionCreated_By = {
  __typename?: 'UsersPermissionsUserConnectionCreated_by';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionUpdated_By = {
  __typename?: 'UsersPermissionsUserConnectionUpdated_by';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserAggregator = {
  __typename?: 'UsersPermissionsUserAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type CreateUserPayload = {
  __typename?: 'createUserPayload';
  user?: Maybe<UsersPermissionsUser>;
};

export type UpdateUserPayload = {
  __typename?: 'updateUserPayload';
  user?: Maybe<UsersPermissionsUser>;
};

export type DeleteUserPayload = {
  __typename?: 'deleteUserPayload';
  user?: Maybe<UsersPermissionsUser>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createInterchange?: Maybe<CreateInterchangePayload>;
  updateInterchange?: Maybe<UpdateInterchangePayload>;
  deleteInterchange?: Maybe<DeleteInterchangePayload>;
  createLine?: Maybe<CreateLinePayload>;
  updateLine?: Maybe<UpdateLinePayload>;
  deleteLine?: Maybe<DeleteLinePayload>;
  createMovement?: Maybe<CreateMovementPayload>;
  updateMovement?: Maybe<UpdateMovementPayload>;
  deleteMovement?: Maybe<DeleteMovementPayload>;
  createPlace?: Maybe<CreatePlacePayload>;
  updatePlace?: Maybe<UpdatePlacePayload>;
  deletePlace?: Maybe<DeletePlacePayload>;
  createStation?: Maybe<CreateStationPayload>;
  updateStation?: Maybe<UpdateStationPayload>;
  deleteStation?: Maybe<DeleteStationPayload>;
  /** Create a new role */
  createRole?: Maybe<CreateRolePayload>;
  /** Update an existing role */
  updateRole?: Maybe<UpdateRolePayload>;
  /** Delete an existing role */
  deleteRole?: Maybe<DeleteRolePayload>;
  /** Create a new user */
  createUser?: Maybe<CreateUserPayload>;
  /** Update an existing user */
  updateUser?: Maybe<UpdateUserPayload>;
  /** Delete an existing user */
  deleteUser?: Maybe<DeleteUserPayload>;
  upload: UploadFile;
  multipleUpload: Array<Maybe<UploadFile>>;
  updateFileInfo: UploadFile;
  login: UsersPermissionsLoginPayload;
  register: UsersPermissionsLoginPayload;
  forgotPassword?: Maybe<UserPermissionsPasswordPayload>;
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
};


export type MutationCreateInterchangeArgs = {
  input?: Maybe<CreateInterchangeInput>;
};


export type MutationUpdateInterchangeArgs = {
  input?: Maybe<UpdateInterchangeInput>;
};


export type MutationDeleteInterchangeArgs = {
  input?: Maybe<DeleteInterchangeInput>;
};


export type MutationCreateLineArgs = {
  input?: Maybe<CreateLineInput>;
};


export type MutationUpdateLineArgs = {
  input?: Maybe<UpdateLineInput>;
};


export type MutationDeleteLineArgs = {
  input?: Maybe<DeleteLineInput>;
};


export type MutationCreateMovementArgs = {
  input?: Maybe<CreateMovementInput>;
};


export type MutationUpdateMovementArgs = {
  input?: Maybe<UpdateMovementInput>;
};


export type MutationDeleteMovementArgs = {
  input?: Maybe<DeleteMovementInput>;
};


export type MutationCreatePlaceArgs = {
  input?: Maybe<CreatePlaceInput>;
};


export type MutationUpdatePlaceArgs = {
  input?: Maybe<UpdatePlaceInput>;
};


export type MutationDeletePlaceArgs = {
  input?: Maybe<DeletePlaceInput>;
};


export type MutationCreateStationArgs = {
  input?: Maybe<CreateStationInput>;
};


export type MutationUpdateStationArgs = {
  input?: Maybe<UpdateStationInput>;
};


export type MutationDeleteStationArgs = {
  input?: Maybe<DeleteStationInput>;
};


export type MutationCreateRoleArgs = {
  input?: Maybe<CreateRoleInput>;
};


export type MutationUpdateRoleArgs = {
  input?: Maybe<UpdateRoleInput>;
};


export type MutationDeleteRoleArgs = {
  input?: Maybe<DeleteRoleInput>;
};


export type MutationCreateUserArgs = {
  input?: Maybe<CreateUserInput>;
};


export type MutationUpdateUserArgs = {
  input?: Maybe<UpdateUserInput>;
};


export type MutationDeleteUserArgs = {
  input?: Maybe<DeleteUserInput>;
};


export type MutationUploadArgs = {
  refId?: Maybe<Scalars['ID']>;
  ref?: Maybe<Scalars['String']>;
  field?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  file: Scalars['Upload'];
};


export type MutationMultipleUploadArgs = {
  refId?: Maybe<Scalars['ID']>;
  ref?: Maybe<Scalars['String']>;
  field?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  files: Array<Maybe<Scalars['Upload']>>;
};


export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID'];
  info: FileInfoInput;
};


export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};


export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationResetPasswordArgs = {
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
  code: Scalars['String'];
};


export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String'];
};

export type CreateInterchangeInput = {
  data?: Maybe<InterchangeInput>;
};

export type InterchangeInput = {
  name: Scalars['String'];
  slug?: Maybe<Scalars['String']>;
  stations?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type UpdateInterchangeInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditInterchangeInput>;
};

export type InputId = {
  id: Scalars['ID'];
};

export type EditInterchangeInput = {
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  stations?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type DeleteInterchangeInput = {
  where?: Maybe<InputId>;
};

export type CreateLineInput = {
  data?: Maybe<LineInput>;
};

export type LineInput = {
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  active?: Maybe<Scalars['Boolean']>;
  slug?: Maybe<Scalars['String']>;
  order: Scalars['Int'];
  stations?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type UpdateLineInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditLineInput>;
};

export type EditLineInput = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  active?: Maybe<Scalars['Boolean']>;
  slug?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['Int']>;
  stations?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type DeleteLineInput = {
  where?: Maybe<InputId>;
};

export type CreateMovementInput = {
  data?: Maybe<MovementInput>;
};

export type MovementInput = {
  up_station?: Maybe<Scalars['ID']>;
  down_station?: Maybe<Scalars['ID']>;
  up_allowed?: Maybe<Scalars['Boolean']>;
  down_allowed?: Maybe<Scalars['Boolean']>;
  stations?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type UpdateMovementInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditMovementInput>;
};

export type EditMovementInput = {
  up_station?: Maybe<Scalars['ID']>;
  down_station?: Maybe<Scalars['ID']>;
  up_allowed?: Maybe<Scalars['Boolean']>;
  down_allowed?: Maybe<Scalars['Boolean']>;
  stations?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type DeleteMovementInput = {
  where?: Maybe<InputId>;
};

export type CreatePlaceInput = {
  data?: Maybe<PlaceInput>;
};

export type PlaceInput = {
  name: Scalars['String'];
  description: Scalars['String'];
  slug?: Maybe<Scalars['String']>;
  images?: Maybe<Array<Maybe<Scalars['ID']>>>;
  stations?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type UpdatePlaceInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditPlaceInput>;
};

export type EditPlaceInput = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  images?: Maybe<Array<Maybe<Scalars['ID']>>>;
  stations?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type DeletePlaceInput = {
  where?: Maybe<InputId>;
};

export type CreateStationInput = {
  data?: Maybe<StationInput>;
};

export type StationInput = {
  name: Scalars['String'];
  description: Scalars['String'];
  active?: Maybe<Scalars['Boolean']>;
  slug?: Maybe<Scalars['String']>;
  line?: Maybe<Scalars['ID']>;
  interchange?: Maybe<Scalars['ID']>;
  places?: Maybe<Array<Maybe<Scalars['ID']>>>;
  images?: Maybe<Array<Maybe<Scalars['ID']>>>;
  sound?: Maybe<Scalars['ID']>;
  movements?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type UpdateStationInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditStationInput>;
};

export type EditStationInput = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  active?: Maybe<Scalars['Boolean']>;
  slug?: Maybe<Scalars['String']>;
  line?: Maybe<Scalars['ID']>;
  interchange?: Maybe<Scalars['ID']>;
  places?: Maybe<Array<Maybe<Scalars['ID']>>>;
  images?: Maybe<Array<Maybe<Scalars['ID']>>>;
  sound?: Maybe<Scalars['ID']>;
  movements?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type DeleteStationInput = {
  where?: Maybe<InputId>;
};

export type CreateRoleInput = {
  data?: Maybe<RoleInput>;
};

export type RoleInput = {
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  permissions?: Maybe<Array<Maybe<Scalars['ID']>>>;
  users?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type UpdateRoleInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditRoleInput>;
};

export type EditRoleInput = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  permissions?: Maybe<Array<Maybe<Scalars['ID']>>>;
  users?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type DeleteRoleInput = {
  where?: Maybe<InputId>;
};

export type CreateUserInput = {
  data?: Maybe<UserInput>;
};

export type UserInput = {
  username: Scalars['String'];
  email: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  resetPasswordToken?: Maybe<Scalars['String']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  blocked?: Maybe<Scalars['Boolean']>;
  role?: Maybe<Scalars['ID']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type UpdateUserInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditUserInput>;
};

export type EditUserInput = {
  username?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  resetPasswordToken?: Maybe<Scalars['String']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  blocked?: Maybe<Scalars['Boolean']>;
  role?: Maybe<Scalars['ID']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type DeleteUserInput = {
  where?: Maybe<InputId>;
};


export type FileInfoInput = {
  name?: Maybe<Scalars['String']>;
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String'];
  password: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
};

export type UsersPermissionsRegisterInput = {
  username: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
};

export type FileInput = {
  name: Scalars['String'];
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  formats?: Maybe<Scalars['JSON']>;
  hash: Scalars['String'];
  ext?: Maybe<Scalars['String']>;
  mime: Scalars['String'];
  size: Scalars['Float'];
  url: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditFileInput = {
  name?: Maybe<Scalars['String']>;
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  formats?: Maybe<Scalars['JSON']>;
  hash?: Maybe<Scalars['String']>;
  ext?: Maybe<Scalars['String']>;
  mime?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  url?: Maybe<Scalars['String']>;
  previewUrl?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};




export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}

export type PlacesQueryVariables = Exact<{ [key: string]: never; }>;


export type PlacesQuery = (
  { __typename?: 'Query' }
  & { places?: Maybe<Array<Maybe<(
    { __typename?: 'Place' }
    & Pick<Place, 'name' | 'slug'>
  )>>> }
);

export const PlacesDocument = gql`
    query Places {
  places(sort: "name:asc") {
    name
    slug
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class PlacesGQL extends Apollo.Query<PlacesQuery, PlacesQueryVariables> {
    document = PlacesDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }