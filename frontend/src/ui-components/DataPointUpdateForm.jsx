/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getDataPoint } from "../graphql/queries";
import { updateDataPoint } from "../graphql/mutations";
const client = generateClient();
export default function DataPointUpdateForm(props) {
  const {
    id: idProp,
    dataPoint: dataPointModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    value: "",
    timestamp: "",
    goalID: "",
  };
  const [value, setValue] = React.useState(initialValues.value);
  const [timestamp, setTimestamp] = React.useState(initialValues.timestamp);
  const [goalID, setGoalID] = React.useState(initialValues.goalID);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = dataPointRecord
      ? { ...initialValues, ...dataPointRecord }
      : initialValues;
    setValue(cleanValues.value);
    setTimestamp(cleanValues.timestamp);
    setGoalID(cleanValues.goalID);
    setErrors({});
  };
  const [dataPointRecord, setDataPointRecord] =
    React.useState(dataPointModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getDataPoint.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getDataPoint
        : dataPointModelProp;
      setDataPointRecord(record);
    };
    queryData();
  }, [idProp, dataPointModelProp]);
  React.useEffect(resetStateValues, [dataPointRecord]);
  const validations = {
    value: [{ type: "Required" }],
    timestamp: [{ type: "Required" }],
    goalID: [{ type: "Required" }],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  const convertToLocal = (date) => {
    const df = new Intl.DateTimeFormat("default", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      calendar: "iso8601",
      numberingSystem: "latn",
      hourCycle: "h23",
    });
    const parts = df.formatToParts(date).reduce((acc, part) => {
      acc[part.type] = part.value;
      return acc;
    }, {});
    return `${parts.year}-${parts.month}-${parts.day}T${parts.hour}:${parts.minute}`;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          value,
          timestamp,
          goalID,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await client.graphql({
            query: updateDataPoint.replaceAll("__typename", ""),
            variables: {
              input: {
                id: dataPointRecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "DataPointUpdateForm")}
      {...rest}
    >
      <TextField
        label="Value"
        isRequired={true}
        isReadOnly={false}
        value={value}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              value: value,
              timestamp,
              goalID,
            };
            const result = onChange(modelFields);
            value = result?.value ?? value;
          }
          if (errors.value?.hasError) {
            runValidationTasks("value", value);
          }
          setValue(value);
        }}
        onBlur={() => runValidationTasks("value", value)}
        errorMessage={errors.value?.errorMessage}
        hasError={errors.value?.hasError}
        {...getOverrideProps(overrides, "value")}
      ></TextField>
      <TextField
        label="Timestamp"
        isRequired={true}
        isReadOnly={false}
        type="datetime-local"
        value={timestamp && convertToLocal(new Date(timestamp))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              value,
              timestamp: value,
              goalID,
            };
            const result = onChange(modelFields);
            value = result?.timestamp ?? value;
          }
          if (errors.timestamp?.hasError) {
            runValidationTasks("timestamp", value);
          }
          setTimestamp(value);
        }}
        onBlur={() => runValidationTasks("timestamp", timestamp)}
        errorMessage={errors.timestamp?.errorMessage}
        hasError={errors.timestamp?.hasError}
        {...getOverrideProps(overrides, "timestamp")}
      ></TextField>
      <TextField
        label="Goal id"
        isRequired={true}
        isReadOnly={false}
        value={goalID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              value,
              timestamp,
              goalID: value,
            };
            const result = onChange(modelFields);
            value = result?.goalID ?? value;
          }
          if (errors.goalID?.hasError) {
            runValidationTasks("goalID", value);
          }
          setGoalID(value);
        }}
        onBlur={() => runValidationTasks("goalID", goalID)}
        errorMessage={errors.goalID?.errorMessage}
        hasError={errors.goalID?.hasError}
        {...getOverrideProps(overrides, "goalID")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || dataPointModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || dataPointModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
