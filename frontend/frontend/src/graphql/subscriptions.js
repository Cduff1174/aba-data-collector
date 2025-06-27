/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateClient = /* GraphQL */ `
  subscription OnCreateClient(
    $filter: ModelSubscriptionClientFilterInput
    $owner: String
  ) {
    onCreateClient(filter: $filter, owner: $owner) {
      id
      name
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
export const onUpdateClient = /* GraphQL */ `
  subscription OnUpdateClient(
    $filter: ModelSubscriptionClientFilterInput
    $owner: String
  ) {
    onUpdateClient(filter: $filter, owner: $owner) {
      id
      name
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
export const onDeleteClient = /* GraphQL */ `
  subscription OnDeleteClient(
    $filter: ModelSubscriptionClientFilterInput
    $owner: String
  ) {
    onDeleteClient(filter: $filter, owner: $owner) {
      id
      name
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
export const onCreateGoal = /* GraphQL */ `
  subscription OnCreateGoal(
    $filter: ModelSubscriptionGoalFilterInput
    $owner: String
  ) {
    onCreateGoal(filter: $filter, owner: $owner) {
      id
      title
      clientID
      dataPoints {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      clientGoalsId
      owner
      __typename
    }
  }
`;
export const onUpdateGoal = /* GraphQL */ `
  subscription OnUpdateGoal(
    $filter: ModelSubscriptionGoalFilterInput
    $owner: String
  ) {
    onUpdateGoal(filter: $filter, owner: $owner) {
      id
      title
      clientID
      dataPoints {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      clientGoalsId
      owner
      __typename
    }
  }
`;
export const onDeleteGoal = /* GraphQL */ `
  subscription OnDeleteGoal(
    $filter: ModelSubscriptionGoalFilterInput
    $owner: String
  ) {
    onDeleteGoal(filter: $filter, owner: $owner) {
      id
      title
      clientID
      dataPoints {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      clientGoalsId
      owner
      __typename
    }
  }
`;
export const onCreateDataPoint = /* GraphQL */ `
  subscription OnCreateDataPoint(
    $filter: ModelSubscriptionDataPointFilterInput
    $owner: String
  ) {
    onCreateDataPoint(filter: $filter, owner: $owner) {
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
export const onUpdateDataPoint = /* GraphQL */ `
  subscription OnUpdateDataPoint(
    $filter: ModelSubscriptionDataPointFilterInput
    $owner: String
  ) {
    onUpdateDataPoint(filter: $filter, owner: $owner) {
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
export const onDeleteDataPoint = /* GraphQL */ `
  subscription OnDeleteDataPoint(
    $filter: ModelSubscriptionDataPointFilterInput
    $owner: String
  ) {
    onDeleteDataPoint(filter: $filter, owner: $owner) {
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
