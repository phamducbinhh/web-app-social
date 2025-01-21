/* eslint-disable no-unused-vars */
import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface GlobalState {
  isLoggedIn: boolean;
  isOpenModal: boolean;
  isTypePicture: string;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
  setIsOpenModal: (isOpenModal: boolean) => void;
  setIsTypePicture: (isTypePicture: string) => void;
}

export const useGlobalStore = create<GlobalState>()(
  devtools(
    (set) => ({
      isLoggedIn: false,
      isOpenModal: false,
      isTypePicture: "",
      setIsLoggedIn: (isLoggedIn: boolean) => set({ isLoggedIn }),
      setIsOpenModal: (isOpenModal: boolean) => set({ isOpenModal }),
      setIsTypePicture: (isTypePicture: string) => set({ isTypePicture }),
    }),
    { name: "GlobalStore" }
  )
);
