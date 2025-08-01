/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createClient = /* GraphQL */ `mutation CreateClient(
  $input: CreateClientInput!
  $condition: ModelClientConditionInput
) {
  createClient(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateClientMutationVariables,
  APITypes.CreateClientMutation
>;
export const updateClient = /* GraphQL */ `mutation UpdateClient(
  $input: UpdateClientInput!
  $condition: ModelClientConditionInput
) {
  updateClient(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateClientMutationVariables,
  APITypes.UpdateClientMutation
>;
export const deleteClient = /* GraphQL */ `mutation DeleteClient(
  $input: DeleteClientInput!
  $condition: ModelClientConditionInput
) {
  deleteClient(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteClientMutationVariables,
  APITypes.DeleteClientMutation
>;
export const createGoal = /* GraphQL */ `mutation CreateGoal(
  $input: CreateGoalInput!
  $condition: ModelGoalConditionInput
) {
  createGoal(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateGoalMutationVariables,
  APITypes.CreateGoalMutation
>;
export const updateGoal = /* GraphQL */ `mutation UpdateGoal(
  $input: UpdateGoalInput!
  $condition: ModelGoalConditionInput
) {
  updateGoal(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateGoalMutationVariables,
  APITypes.UpdateGoalMutation
>;
export const deleteGoal = /* GraphQL */ `mutation DeleteGoal(
  $input: DeleteGoalInput!
  $condition: ModelGoalConditionInput
) {
  deleteGoal(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteGoalMutationVariables,
  APITypes.DeleteGoalMutation
>;
export const createDataPoint = /* GraphQL */ `mutation CreateDataPoint(
  $input: CreateDataPointInput!
  $condition: ModelDataPointConditionInput
) {
  createDataPoint(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateDataPointMutationVariables,
  APITypes.CreateDataPointMutation
>;
export const updateDataPoint = /* GraphQL */ `mutation UpdateDataPoint(
  $input: UpdateDataPointInput!
  $condition: ModelDataPointConditionInput
) {
  updateDataPoint(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateDataPointMutationVariables,
  APITypes.UpdateDataPointMutation
>;
export const deleteDataPoint = /* GraphQL */ `mutation DeleteDataPoint(
  $input: DeleteDataPointInput!
  $condition: ModelDataPointConditionInput
) {
  deleteDataPoint(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteDataPointMutationVariables,
  APITypes.DeleteDataPointMutation
>;
