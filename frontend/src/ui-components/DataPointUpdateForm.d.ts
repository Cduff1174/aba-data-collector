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
export declare type DataPointUpdateFormInputValues = {
    value?: string;
    timestamp?: string;
    goalID?: string;
};
export declare type DataPointUpdateFormValidationValues = {
    value?: ValidationFunction<string>;
    timestamp?: ValidationFunction<string>;
    goalID?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DataPointUpdateFormOverridesProps = {
    DataPointUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    value?: PrimitiveOverrideProps<TextFieldProps>;
    timestamp?: PrimitiveOverrideProps<TextFieldProps>;
    goalID?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type DataPointUpdateFormProps = React.PropsWithChildren<{
    overrides?: DataPointUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    dataPoint?: any;
    onSubmit?: (fields: DataPointUpdateFormInputValues) => DataPointUpdateFormInputValues;
    onSuccess?: (fields: DataPointUpdateFormInputValues) => void;
    onError?: (fields: DataPointUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: DataPointUpdateFormInputValues) => DataPointUpdateFormInputValues;
    onValidate?: DataPointUpdateFormValidationValues;
} & React.CSSProperties>;
export default function DataPointUpdateForm(props: DataPointUpdateFormProps): React.ReactElement;
