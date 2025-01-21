/* eslint-disable @typescript-eslint/no-explicit-any */
import { Path, UseFormSetError } from "react-hook-form";

export const setFormErrors = <T extends Record<string, any>>(
  errors: Record<string, string>,
  setError: UseFormSetError<T>
) => {
  Object.entries(errors).forEach(([field, message]) => {
    setError(field as Path<T>, { message });
  });
};
