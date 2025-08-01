/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type DataPointCreateFormInputValues = {
    value?: string;
    timestamp?: string;
    goalID?: string;
    owner?: string;
};
export declare type DataPointCreateFormValidationValues = {
    value?: ValidationFunction<string>;
    timestamp?: ValidationFunction<string>;
    goalID?: ValidationFunction<string>;
    owner?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DataPointCreateFormOverridesProps = {
    DataPointCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    value?: PrimitiveOverrideProps<TextFieldProps>;
    timestamp?: PrimitiveOverrideProps<TextFieldProps>;
    goalID?: PrimitiveOverrideProps<TextFieldProps>;
    owner?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type DataPointCreateFormProps = React.PropsWithChildren<{
    overrides?: DataPointCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: DataPointCreateFormInputValues) => DataPointCreateFormInputValues;
    onSuccess?: (fields: DataPointCreateFormInputValues) => void;
    onError?: (fields: DataPointCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: DataPointCreateFormInputValues) => DataPointCreateFormInputValues;
    onValidate?: DataPointCreateFormValidationValues;
} & React.CSSProperties>;
export default function DataPointCreateForm(props: DataPointCreateFormProps): React.ReactElement;
