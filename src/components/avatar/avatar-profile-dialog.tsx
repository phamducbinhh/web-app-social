/* eslint-disable react/no-children-prop */
import { CameraIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/alert-dialog";
import { CircleButton } from "@/components/button";
import { typePicture } from "@/constants/enum";
import { useGlobalStore } from "@/stores/state";
import { Typography } from "../typography";

//-------------------------------------------------------------------------

const AvatarUpdateDialog: React.FC = () => {
  const { isOpenModal, setIsOpenModal, isTypePicture } = useGlobalStore();
  return (
    <AlertDialog open={isOpenModal}>
      <AlertDialogContent className="max-w-md">
        <AlertDialogHeader>
          <AlertDialogTitle>Update Profile Picture</AlertDialogTitle>
        </AlertDialogHeader>

        <div className="flex flex-col items-center gap-6 py-4">
          <div
            className={`relative overflow-hidden bg-neutral2-5 ${
              isTypePicture === typePicture.avatar
                ? "w-40 h-40 rounded-full"
                : "w-full h-40 rounded-md"
            }`}
          >
            <Image
              src={
                "https://statics.oeg.vn/storage/DEFAULT%20AVATAR%20PROFILE/akirofemalev7.webp"
              }
              alt="Avatar preview"
              fill
              className="object-cover"
            />
            <label
              htmlFor="avatar-upload"
              className="absolute inset-0 flex items-center justify-center bg-black/40 cursor-pointer opacity-0 hover:opacity-100 transition-opacity"
            >
              <CameraIcon className="w-8 h-8 text-white" />
            </label>
            <input
              type="file"
              id="avatar-upload"
              className="hidden"
              accept="image/*"
            />
          </div>

          <div className="text-center text-sm text-tertiary">
            Click the image to choose a photo
          </div>
        </div>

        <AlertDialogFooter>
          <CircleButton
            className="w-full sm:w-auto"
            onClick={() => {
              setIsOpenModal(false);
            }}
            children={
              <Typography level="base2sm" className="text-tertiary">
                Cancel
              </Typography>
            }
          />

          <CircleButton
            className="w-full sm:w-auto"
            children={
              <Typography level="base2sm" className="text-tertiary">
                Save
              </Typography>
            }
          />
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default AvatarUpdateDialog;
