/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createClient = /* GraphQL */ `
  mutation CreateClient(
    $input: CreateClientInput!
    $condition: ModelClientConditionInput
  ) {
    createClient(input: $input, condition: $condition) {
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
export const updateClient = /* GraphQL */ `
  mutation UpdateClient(
    $input: UpdateClientInput!
    $condition: ModelClientConditionInput
  ) {
    updateClient(input: $input, condition: $condition) {
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
export const deleteClient = /* GraphQL */ `
  mutation DeleteClient(
    $input: DeleteClientInput!
    $condition: ModelClientConditionInput
  ) {
    deleteClient(input: $input, condition: $condition) {
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
export const createGoal = /* GraphQL */ `
  mutation CreateGoal(
    $input: CreateGoalInput!
    $condition: ModelGoalConditionInput
  ) {
    createGoal(input: $input, condition: $condition) {
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
export const updateGoal = /* GraphQL */ `
  mutation UpdateGoal(
    $input: UpdateGoalInput!
    $condition: ModelGoalConditionInput
  ) {
    updateGoal(input: $input, condition: $condition) {
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
export const deleteGoal = /* GraphQL */ `
  mutation DeleteGoal(
    $input: DeleteGoalInput!
    $condition: ModelGoalConditionInput
  ) {
    deleteGoal(input: $input, condition: $condition) {
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
export const createDataPoint = /* GraphQL */ `
  mutation CreateDataPoint(
    $input: CreateDataPointInput!
    $condition: ModelDataPointConditionInput
  ) {
    createDataPoint(input: $input, condition: $condition) {
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
export const updateDataPoint = /* GraphQL */ `
  mutation UpdateDataPoint(
    $input: UpdateDataPointInput!
    $condition: ModelDataPointConditionInput
  ) {
    updateDataPoint(input: $input, condition: $condition) {
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
export const deleteDataPoint = /* GraphQL */ `
  mutation DeleteDataPoint(
    $input: DeleteDataPointInput!
    $condition: ModelDataPointConditionInput
  ) {
    deleteDataPoint(input: $input, condition: $condition) {
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
