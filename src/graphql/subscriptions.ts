/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateClient = /* GraphQL */ `subscription OnCreateClient(
  $filter: ModelSubscriptionClientFilterInput
  $owner: String
) {
  onCreateClient(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateClientSubscriptionVariables,
  APITypes.OnCreateClientSubscription
>;
export const onUpdateClient = /* GraphQL */ `subscription OnUpdateClient(
  $filter: ModelSubscriptionClientFilterInput
  $owner: String
) {
  onUpdateClient(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateClientSubscriptionVariables,
  APITypes.OnUpdateClientSubscription
>;
export const onDeleteClient = /* GraphQL */ `subscription OnDeleteClient(
  $filter: ModelSubscriptionClientFilterInput
  $owner: String
) {
  onDeleteClient(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteClientSubscriptionVariables,
  APITypes.OnDeleteClientSubscription
>;
export const onCreateGoal = /* GraphQL */ `subscription OnCreateGoal(
  $filter: ModelSubscriptionGoalFilterInput
  $owner: String
) {
  onCreateGoal(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateGoalSubscriptionVariables,
  APITypes.OnCreateGoalSubscription
>;
export const onUpdateGoal = /* GraphQL */ `subscription OnUpdateGoal(
  $filter: ModelSubscriptionGoalFilterInput
  $owner: String
) {
  onUpdateGoal(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateGoalSubscriptionVariables,
  APITypes.OnUpdateGoalSubscription
>;
export const onDeleteGoal = /* GraphQL */ `subscription OnDeleteGoal(
  $filter: ModelSubscriptionGoalFilterInput
  $owner: String
) {
  onDeleteGoal(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteGoalSubscriptionVariables,
  APITypes.OnDeleteGoalSubscription
>;
export const onCreateDataPoint = /* GraphQL */ `subscription OnCreateDataPoint(
  $filter: ModelSubscriptionDataPointFilterInput
  $owner: String
) {
  onCreateDataPoint(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateDataPointSubscriptionVariables,
  APITypes.OnCreateDataPointSubscription
>;
export const onUpdateDataPoint = /* GraphQL */ `subscription OnUpdateDataPoint(
  $filter: ModelSubscriptionDataPointFilterInput
  $owner: String
) {
  onUpdateDataPoint(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateDataPointSubscriptionVariables,
  APITypes.OnUpdateDataPointSubscription
>;
export const onDeleteDataPoint = /* GraphQL */ `subscription OnDeleteDataPoint(
  $filter: ModelSubscriptionDataPointFilterInput
  $owner: String
) {
  onDeleteDataPoint(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteDataPointSubscriptionVariables,
  APITypes.OnDeleteDataPointSubscription
>;
