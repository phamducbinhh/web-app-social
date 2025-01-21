/* eslint-disable no-unused-vars */
import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface UserFormState {
  formData: {
    first_name: string;
    last_name: string;
    username: string;
    bio: string;
    website_url: string;
  };
  setFormData: (data: Partial<UserFormState["formData"]>) => void;
}

export const useUserFormStore = create<UserFormState>()(
  devtools(
    (set) => ({
      formData: {
        first_name: "",
        last_name: "",
        username: "",
        bio: "",
        website_url: "",
      },
      setFormData: (data) =>
        set((state) => ({ formData: { ...state.formData, ...data } })),
    }),
    { name: "UserForm" }
  )
);
