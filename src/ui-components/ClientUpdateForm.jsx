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
import { getClient } from "../graphql/queries";
import { updateClient } from "../graphql/mutations";
const client = generateClient();
export default function ClientUpdateForm(props) {
  const {
    id: idProp,
    client: clientModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    name: "",
    currentVBLevel: "",
    currentVBDomain: "",
    currentVBGoal: "",
  };
  const [name, setName] = React.useState(initialValues.name);
  const [currentVBLevel, setCurrentVBLevel] = React.useState(
    initialValues.currentVBLevel
  );
  const [currentVBDomain, setCurrentVBDomain] = React.useState(
    initialValues.currentVBDomain
  );
  const [currentVBGoal, setCurrentVBGoal] = React.useState(
    initialValues.currentVBGoal
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = clientRecord
      ? { ...initialValues, ...clientRecord }
      : initialValues;
    setName(cleanValues.name);
    setCurrentVBLevel(cleanValues.currentVBLevel);
    setCurrentVBDomain(cleanValues.currentVBDomain);
    setCurrentVBGoal(cleanValues.currentVBGoal);
    setErrors({});
  };
  const [clientRecord, setClientRecord] = React.useState(clientModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getClient.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getClient
        : clientModelProp;
      setClientRecord(record);
    };
    queryData();
  }, [idProp, clientModelProp]);
  React.useEffect(resetStateValues, [clientRecord]);
  const validations = {
    name: [{ type: "Required" }],
    currentVBLevel: [],
    currentVBDomain: [],
    currentVBGoal: [],
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
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          name,
          currentVBLevel: currentVBLevel ?? null,
          currentVBDomain: currentVBDomain ?? null,
          currentVBGoal: currentVBGoal ?? null,
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
            query: updateClient.replaceAll("__typename", ""),
            variables: {
              input: {
                id: clientRecord.id,
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
      {...getOverrideProps(overrides, "ClientUpdateForm")}
      {...rest}
    >
      <TextField
        label="Name"
        isRequired={true}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name: value,
              currentVBLevel,
              currentVBDomain,
              currentVBGoal,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <TextField
        label="Current vb level"
        isRequired={false}
        isReadOnly={false}
        value={currentVBLevel}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              currentVBLevel: value,
              currentVBDomain,
              currentVBGoal,
            };
            const result = onChange(modelFields);
            value = result?.currentVBLevel ?? value;
          }
          if (errors.currentVBLevel?.hasError) {
            runValidationTasks("currentVBLevel", value);
          }
          setCurrentVBLevel(value);
        }}
        onBlur={() => runValidationTasks("currentVBLevel", currentVBLevel)}
        errorMessage={errors.currentVBLevel?.errorMessage}
        hasError={errors.currentVBLevel?.hasError}
        {...getOverrideProps(overrides, "currentVBLevel")}
      ></TextField>
      <TextField
        label="Current vb domain"
        isRequired={false}
        isReadOnly={false}
        value={currentVBDomain}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              currentVBLevel,
              currentVBDomain: value,
              currentVBGoal,
            };
            const result = onChange(modelFields);
            value = result?.currentVBDomain ?? value;
          }
          if (errors.currentVBDomain?.hasError) {
            runValidationTasks("currentVBDomain", value);
          }
          setCurrentVBDomain(value);
        }}
        onBlur={() => runValidationTasks("currentVBDomain", currentVBDomain)}
        errorMessage={errors.currentVBDomain?.errorMessage}
        hasError={errors.currentVBDomain?.hasError}
        {...getOverrideProps(overrides, "currentVBDomain")}
      ></TextField>
      <TextField
        label="Current vb goal"
        isRequired={false}
        isReadOnly={false}
        value={currentVBGoal}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              currentVBLevel,
              currentVBDomain,
              currentVBGoal: value,
            };
            const result = onChange(modelFields);
            value = result?.currentVBGoal ?? value;
          }
          if (errors.currentVBGoal?.hasError) {
            runValidationTasks("currentVBGoal", value);
          }
          setCurrentVBGoal(value);
        }}
        onBlur={() => runValidationTasks("currentVBGoal", currentVBGoal)}
        errorMessage={errors.currentVBGoal?.errorMessage}
        hasError={errors.currentVBGoal?.hasError}
        {...getOverrideProps(overrides, "currentVBGoal")}
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
          isDisabled={!(idProp || clientModelProp)}
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
              !(idProp || clientModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
