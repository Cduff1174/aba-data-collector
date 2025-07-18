/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getClient = /* GraphQL */ `
  query GetClient($id: ID!) {
    getClient(id: $id) {
      id
      name
      currentVBGoal
      goals {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const listClients = /* GraphQL */ `
  query ListClients(
    $filter: ModelClientFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listClients(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        currentVBGoal
        goals {
          items {
            id
            title
            progress
          }
        }
      }
    }
  }
`;
export const getGoal = /* GraphQL */ `
  query GetGoal($id: ID!) {
    getGoal(id: $id) {
      id
      title
      progress
      clientID
      dataPoints {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const listGoals = /* GraphQL */ `
  query ListGoals(
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
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getDataPoint = /* GraphQL */ `
  query GetDataPoint($id: ID!) {
    getDataPoint(id: $id) {
      id
      value
      timestamp
      goalID
      createdAt
      updatedAt
      goalDataPointsId
      owner
      __typename
    }
  }
`;
export const listDataPoints = /* GraphQL */ `
  query ListDataPoints(
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
        createdAt
        updatedAt
        goalDataPointsId
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const goalsByClientID = /* GraphQL */ `
  query GoalsByClientID(
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
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const dataPointsByGoalID = /* GraphQL */ `
  query DataPointsByGoalID(
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
        createdAt
        updatedAt
        goalDataPointsId
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
