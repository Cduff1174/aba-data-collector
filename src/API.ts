/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateClientInput = {
  id?: string | null,
  name: string,
  currentVBGoal?: string | null,
  owner?: string | null,
};

export type ModelClientConditionInput = {
  name?: ModelStringInput | null,
  currentVBGoal?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelClientConditionInput | null > | null,
  or?: Array< ModelClientConditionInput | null > | null,
  not?: ModelClientConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Client = {
  __typename: "Client",
  id: string,
  name: string,
  currentVBGoal?: string | null,
  goals?: ModelGoalConnection | null,
  owner?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelGoalConnection = {
  __typename: "ModelGoalConnection",
  items:  Array<Goal | null >,
  nextToken?: string | null,
};

export type Goal = {
  __typename: "Goal",
  id: string,
  title: string,
  progress?: number | null,
  clientID: string,
  dataPoints?: ModelDataPointConnection | null,
  owner?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelDataPointConnection = {
  __typename: "ModelDataPointConnection",
  items:  Array<DataPoint | null >,
  nextToken?: string | null,
};

export type DataPoint = {
  __typename: "DataPoint",
  id: string,
  value: string,
  timestamp: string,
  goalID: string,
  owner?: string | null,
  createdAt: string,
  updatedAt: string,
  goalDataPointsId?: string | null,
};

export type UpdateClientInput = {
  id: string,
  name?: string | null,
  currentVBGoal?: string | null,
  owner?: string | null,
};

export type DeleteClientInput = {
  id: string,
};

export type CreateGoalInput = {
  id?: string | null,
  title: string,
  progress?: number | null,
  clientID: string,
  owner?: string | null,
};

export type ModelGoalConditionInput = {
  title?: ModelStringInput | null,
  progress?: ModelIntInput | null,
  clientID?: ModelIDInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelGoalConditionInput | null > | null,
  or?: Array< ModelGoalConditionInput | null > | null,
  not?: ModelGoalConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateGoalInput = {
  id: string,
  title?: string | null,
  progress?: number | null,
  clientID?: string | null,
  owner?: string | null,
};

export type DeleteGoalInput = {
  id: string,
};

export type CreateDataPointInput = {
  id?: string | null,
  value: string,
  timestamp: string,
  goalID: string,
  owner?: string | null,
  goalDataPointsId?: string | null,
};

export type ModelDataPointConditionInput = {
  value?: ModelStringInput | null,
  timestamp?: ModelStringInput | null,
  goalID?: ModelIDInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelDataPointConditionInput | null > | null,
  or?: Array< ModelDataPointConditionInput | null > | null,
  not?: ModelDataPointConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  goalDataPointsId?: ModelIDInput | null,
};

export type UpdateDataPointInput = {
  id: string,
  value?: string | null,
  timestamp?: string | null,
  goalID?: string | null,
  owner?: string | null,
  goalDataPointsId?: string | null,
};

export type DeleteDataPointInput = {
  id: string,
};

export type ModelClientFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  currentVBGoal?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelClientFilterInput | null > | null,
  or?: Array< ModelClientFilterInput | null > | null,
  not?: ModelClientFilterInput | null,
};

export type ModelClientConnection = {
  __typename: "ModelClientConnection",
  items:  Array<Client | null >,
  nextToken?: string | null,
};

export type ModelGoalFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  progress?: ModelIntInput | null,
  clientID?: ModelIDInput | null,
  owner?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelGoalFilterInput | null > | null,
  or?: Array< ModelGoalFilterInput | null > | null,
  not?: ModelGoalFilterInput | null,
};

export type ModelDataPointFilterInput = {
  id?: ModelIDInput | null,
  value?: ModelStringInput | null,
  timestamp?: ModelStringInput | null,
  goalID?: ModelIDInput | null,
  owner?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelDataPointFilterInput | null > | null,
  or?: Array< ModelDataPointFilterInput | null > | null,
  not?: ModelDataPointFilterInput | null,
  goalDataPointsId?: ModelIDInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelSubscriptionClientFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  currentVBGoal?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionClientFilterInput | null > | null,
  or?: Array< ModelSubscriptionClientFilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionGoalFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  progress?: ModelSubscriptionIntInput | null,
  clientID?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionGoalFilterInput | null > | null,
  or?: Array< ModelSubscriptionGoalFilterInput | null > | null,
  goalDataPointsId?: ModelSubscriptionIDInput | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionDataPointFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  value?: ModelSubscriptionStringInput | null,
  timestamp?: ModelSubscriptionStringInput | null,
  goalID?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionDataPointFilterInput | null > | null,
  or?: Array< ModelSubscriptionDataPointFilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type CreateClientMutationVariables = {
  input: CreateClientInput,
  condition?: ModelClientConditionInput | null,
};

export type CreateClientMutation = {
  createClient?:  {
    __typename: "Client",
    id: string,
    name: string,
    currentVBGoal?: string | null,
    goals?:  {
      __typename: "ModelGoalConnection",
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateClientMutationVariables = {
  input: UpdateClientInput,
  condition?: ModelClientConditionInput | null,
};

export type UpdateClientMutation = {
  updateClient?:  {
    __typename: "Client",
    id: string,
    name: string,
    currentVBGoal?: string | null,
    goals?:  {
      __typename: "ModelGoalConnection",
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteClientMutationVariables = {
  input: DeleteClientInput,
  condition?: ModelClientConditionInput | null,
};

export type DeleteClientMutation = {
  deleteClient?:  {
    __typename: "Client",
    id: string,
    name: string,
    currentVBGoal?: string | null,
    goals?:  {
      __typename: "ModelGoalConnection",
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateGoalMutationVariables = {
  input: CreateGoalInput,
  condition?: ModelGoalConditionInput | null,
};

export type CreateGoalMutation = {
  createGoal?:  {
    __typename: "Goal",
    id: string,
    title: string,
    progress?: number | null,
    clientID: string,
    dataPoints?:  {
      __typename: "ModelDataPointConnection",
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateGoalMutationVariables = {
  input: UpdateGoalInput,
  condition?: ModelGoalConditionInput | null,
};

export type UpdateGoalMutation = {
  updateGoal?:  {
    __typename: "Goal",
    id: string,
    title: string,
    progress?: number | null,
    clientID: string,
    dataPoints?:  {
      __typename: "ModelDataPointConnection",
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteGoalMutationVariables = {
  input: DeleteGoalInput,
  condition?: ModelGoalConditionInput | null,
};

export type DeleteGoalMutation = {
  deleteGoal?:  {
    __typename: "Goal",
    id: string,
    title: string,
    progress?: number | null,
    clientID: string,
    dataPoints?:  {
      __typename: "ModelDataPointConnection",
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateDataPointMutationVariables = {
  input: CreateDataPointInput,
  condition?: ModelDataPointConditionInput | null,
};

export type CreateDataPointMutation = {
  createDataPoint?:  {
    __typename: "DataPoint",
    id: string,
    value: string,
    timestamp: string,
    goalID: string,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    goalDataPointsId?: string | null,
  } | null,
};

export type UpdateDataPointMutationVariables = {
  input: UpdateDataPointInput,
  condition?: ModelDataPointConditionInput | null,
};

export type UpdateDataPointMutation = {
  updateDataPoint?:  {
    __typename: "DataPoint",
    id: string,
    value: string,
    timestamp: string,
    goalID: string,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    goalDataPointsId?: string | null,
  } | null,
};

export type DeleteDataPointMutationVariables = {
  input: DeleteDataPointInput,
  condition?: ModelDataPointConditionInput | null,
};

export type DeleteDataPointMutation = {
  deleteDataPoint?:  {
    __typename: "DataPoint",
    id: string,
    value: string,
    timestamp: string,
    goalID: string,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    goalDataPointsId?: string | null,
  } | null,
};

export type GetClientQueryVariables = {
  id: string,
};

export type GetClientQuery = {
  getClient?:  {
    __typename: "Client",
    id: string,
    name: string,
    currentVBGoal?: string | null,
    goals?:  {
      __typename: "ModelGoalConnection",
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListClientsQueryVariables = {
  filter?: ModelClientFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListClientsQuery = {
  listClients?:  {
    __typename: "ModelClientConnection",
    items:  Array< {
      __typename: "Client",
      id: string,
      name: string,
      currentVBGoal?: string | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetGoalQueryVariables = {
  id: string,
};

export type GetGoalQuery = {
  getGoal?:  {
    __typename: "Goal",
    id: string,
    title: string,
    progress?: number | null,
    clientID: string,
    dataPoints?:  {
      __typename: "ModelDataPointConnection",
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListGoalsQueryVariables = {
  filter?: ModelGoalFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListGoalsQuery = {
  listGoals?:  {
    __typename: "ModelGoalConnection",
    items:  Array< {
      __typename: "Goal",
      id: string,
      title: string,
      progress?: number | null,
      clientID: string,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetDataPointQueryVariables = {
  id: string,
};

export type GetDataPointQuery = {
  getDataPoint?:  {
    __typename: "DataPoint",
    id: string,
    value: string,
    timestamp: string,
    goalID: string,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    goalDataPointsId?: string | null,
  } | null,
};

export type ListDataPointsQueryVariables = {
  filter?: ModelDataPointFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListDataPointsQuery = {
  listDataPoints?:  {
    __typename: "ModelDataPointConnection",
    items:  Array< {
      __typename: "DataPoint",
      id: string,
      value: string,
      timestamp: string,
      goalID: string,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      goalDataPointsId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GoalsByClientIDQueryVariables = {
  clientID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelGoalFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type GoalsByClientIDQuery = {
  goalsByClientID?:  {
    __typename: "ModelGoalConnection",
    items:  Array< {
      __typename: "Goal",
      id: string,
      title: string,
      progress?: number | null,
      clientID: string,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type DataPointsByGoalIDQueryVariables = {
  goalID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelDataPointFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type DataPointsByGoalIDQuery = {
  dataPointsByGoalID?:  {
    __typename: "ModelDataPointConnection",
    items:  Array< {
      __typename: "DataPoint",
      id: string,
      value: string,
      timestamp: string,
      goalID: string,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      goalDataPointsId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateClientSubscriptionVariables = {
  filter?: ModelSubscriptionClientFilterInput | null,
  owner?: string | null,
};

export type OnCreateClientSubscription = {
  onCreateClient?:  {
    __typename: "Client",
    id: string,
    name: string,
    currentVBGoal?: string | null,
    goals?:  {
      __typename: "ModelGoalConnection",
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateClientSubscriptionVariables = {
  filter?: ModelSubscriptionClientFilterInput | null,
  owner?: string | null,
};

export type OnUpdateClientSubscription = {
  onUpdateClient?:  {
    __typename: "Client",
    id: string,
    name: string,
    currentVBGoal?: string | null,
    goals?:  {
      __typename: "ModelGoalConnection",
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteClientSubscriptionVariables = {
  filter?: ModelSubscriptionClientFilterInput | null,
  owner?: string | null,
};

export type OnDeleteClientSubscription = {
  onDeleteClient?:  {
    __typename: "Client",
    id: string,
    name: string,
    currentVBGoal?: string | null,
    goals?:  {
      __typename: "ModelGoalConnection",
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateGoalSubscriptionVariables = {
  filter?: ModelSubscriptionGoalFilterInput | null,
  owner?: string | null,
};

export type OnCreateGoalSubscription = {
  onCreateGoal?:  {
    __typename: "Goal",
    id: string,
    title: string,
    progress?: number | null,
    clientID: string,
    dataPoints?:  {
      __typename: "ModelDataPointConnection",
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateGoalSubscriptionVariables = {
  filter?: ModelSubscriptionGoalFilterInput | null,
  owner?: string | null,
};

export type OnUpdateGoalSubscription = {
  onUpdateGoal?:  {
    __typename: "Goal",
    id: string,
    title: string,
    progress?: number | null,
    clientID: string,
    dataPoints?:  {
      __typename: "ModelDataPointConnection",
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteGoalSubscriptionVariables = {
  filter?: ModelSubscriptionGoalFilterInput | null,
  owner?: string | null,
};

export type OnDeleteGoalSubscription = {
  onDeleteGoal?:  {
    __typename: "Goal",
    id: string,
    title: string,
    progress?: number | null,
    clientID: string,
    dataPoints?:  {
      __typename: "ModelDataPointConnection",
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateDataPointSubscriptionVariables = {
  filter?: ModelSubscriptionDataPointFilterInput | null,
  owner?: string | null,
};

export type OnCreateDataPointSubscription = {
  onCreateDataPoint?:  {
    __typename: "DataPoint",
    id: string,
    value: string,
    timestamp: string,
    goalID: string,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    goalDataPointsId?: string | null,
  } | null,
};

export type OnUpdateDataPointSubscriptionVariables = {
  filter?: ModelSubscriptionDataPointFilterInput | null,
  owner?: string | null,
};

export type OnUpdateDataPointSubscription = {
  onUpdateDataPoint?:  {
    __typename: "DataPoint",
    id: string,
    value: string,
    timestamp: string,
    goalID: string,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    goalDataPointsId?: string | null,
  } | null,
};

export type OnDeleteDataPointSubscriptionVariables = {
  filter?: ModelSubscriptionDataPointFilterInput | null,
  owner?: string | null,
};

export type OnDeleteDataPointSubscription = {
  onDeleteDataPoint?:  {
    __typename: "DataPoint",
    id: string,
    value: string,
    timestamp: string,
    goalID: string,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    goalDataPointsId?: string | null,
  } | null,
};
