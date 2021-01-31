import * as yup from 'yup';

export interface formData {
    userName: string;
    email: string;
    password: string;
  }
  type ValidationKey = keyof formData;
  type ValidationData = { [key in ValidationKey]?: any };

export function HandleValidation(data:ValidationData): ValidationData | false {
    const errors: ValidationData = {};
    const schema: ValidationData = {
        email: yup
        .string()
        .email("Invalid email address")
        .required("the field is required"),
        userName: yup
        .string()
        .required("the field is required"),
        password: yup
        .string()
        .required("the field is required")
        .min(8, "Password must contain 8 letters"),
    }
    Object.keys(data).forEach((key: string) => {
        try {
          schema[key as ValidationKey].validateSync(data[key as ValidationKey]);
        } catch ({ errors: e }) {
          errors[key as ValidationKey] = e.pop();
        }
      });
      if (!Object.keys(errors).length) {
        return false;
      }
      return errors;
}