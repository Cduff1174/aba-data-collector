/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getClient = /* GraphQL */ `query GetClient($id: ID!) {
  getClient(id: $id) {
    id
    name
    currentVBGoal
    goals {
      nextToken
      __typename
    }
    owner
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetClientQueryVariables, APITypes.GetClientQuery>;
export const listClients = /* GraphQL */ `query ListClients(
  $filter: ModelClientFilterInput
  $limit: Int
  $nextToken: String
) {
  listClients(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      currentVBGoal
      owner
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListClientsQueryVariables,
  APITypes.ListClientsQuery
>;
export const getGoal = /* GraphQL */ `query GetGoal($id: ID!) {
  getGoal(id: $id) {
    id
    title
    progress
    clientID
    dataPoints {
      nextToken
      __typename
    }
    owner
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetGoalQueryVariables, APITypes.GetGoalQuery>;
export const listGoals = /* GraphQL */ `query ListGoals(
  $filter: ModelGoalFilterInput
  $limit: Int
  $nextToken: String
) {
  listGoals(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      progress
      clientID
      owner
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListGoalsQueryVariables, APITypes.ListGoalsQuery>;
export const getDataPoint = /* GraphQL */ `query GetDataPoint($id: ID!) {
  getDataPoint(id: $id) {
    id
    value
    timestamp
    goalID
    owner
    createdAt
    updatedAt
    goalDataPointsId
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetDataPointQueryVariables,
  APITypes.GetDataPointQuery
>;
export const listDataPoints = /* GraphQL */ `query ListDataPoints(
  $filter: ModelDataPointFilterInput
  $limit: Int
  $nextToken: String
) {
  listDataPoints(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      value
      timestamp
      goalID
      owner
      createdAt
      updatedAt
      goalDataPointsId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListDataPointsQueryVariables,
  APITypes.ListDataPointsQuery
>;
export const goalsByClientID = /* GraphQL */ `query GoalsByClientID(
  $clientID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelGoalFilterInput
  $limit: Int
  $nextToken: String
) {
  goalsByClientID(
    clientID: $clientID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      title
      progress
      clientID
      owner
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GoalsByClientIDQueryVariables,
  APITypes.GoalsByClientIDQuery
>;
export const dataPointsByGoalID = /* GraphQL */ `query DataPointsByGoalID(
  $goalID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelDataPointFilterInput
  $limit: Int
  $nextToken: String
) {
  dataPointsByGoalID(
    goalID: $goalID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      value
      timestamp
      goalID
      owner
      createdAt
      updatedAt
      goalDataPointsId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.DataPointsByGoalIDQueryVariables,
  APITypes.DataPointsByGoalIDQuery
>;
