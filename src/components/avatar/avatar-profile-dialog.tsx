/* eslint-disable react/no-children-prop */
import { CameraIcon, Loader2Icon } from "lucide-react";
import Image from "next/image";

import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/alert-dialog";
import { CircleButton } from "@/components/button";
import { HttpStatusCode } from "@/configs/HttpStatusCode";
import { typePicture } from "@/constants/enum";
import { IUserSimple } from "@/interfaces/user";
import { updateUserProfile, uploadMedia } from "@/server/mutation/user.mutate";
import { useGlobalStore } from "@/stores/state";
import { useQueryClient } from "@tanstack/react-query";
import React from "react";
import { toast } from "react-toastify";
import { Typography } from "../typography";

//-------------------------------------------------------------------------

const AvatarUpdateDialog = ({ userInfo }: { userInfo: IUserSimple }) => {
  const { isOpenModal, setIsOpenModal, isTypePicture } = useGlobalStore();
  const queryClient = useQueryClient();
  const [previewUrl, setPreviewUrl] = React.useState("");
  const [selectedFile, setSelectedFile] = React.useState<File | null>(null);
  const [isUploading, setIsUploading] = React.useState(false);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);

      const objectUrl = URL.createObjectURL(file);

      setPreviewUrl(objectUrl);

      return () => URL.revokeObjectURL(objectUrl);
    }
  };

  const handleUploadFiles = async (event: React.FormEvent) => {
    event.preventDefault();

    // Kiểm tra nếu không có file được chọn
    if (!selectedFile) {
      toast.error("Please select a file to upload");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      setIsUploading(true);

      // Tải file lên
      const response = await uploadMedia({ body: formData });

      // Kiểm tra phản hồi thành công
      if (response.code === HttpStatusCode.SUCCESS) {
        await handleProfileUpdate(response.metadata[0]);
        toast.success("Profile updated successfully");
      } else {
        toast.error(response.message || "An error occurred while uploading");
      }
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Unknown error");
    } finally {
      setIsUploading(false);
      setIsOpenModal(false);
    }
  };

  // Hàm riêng biệt để cập nhật profile
  const handleProfileUpdate = async (image: string) => {
    try {
      const updateResponse = await updateUserProfile({
        body: { [isTypePicture]: image },
      });
      if (updateResponse.code === HttpStatusCode.SUCCESS) {
        queryClient.invalidateQueries({
          queryKey: ["VerifiedUserValidator"],
          exact: true,
        });
      } else {
        toast.error(updateResponse.message || "Failed to update profile");
      }
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Unknown error");
    }
  };

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
                previewUrl ||
                (isTypePicture === typePicture.avatar
                  ? userInfo.avatar
                  : userInfo.cover)
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
              onChange={handleFileSelect}
            />
          </div>

          <div className="text-center text-sm text-tertiary">
            {previewUrl ? (
              <p>Click the image to choose a different photo</p>
            ) : (
              <p>Click the image to choose a photo</p>
            )}
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
            onClick={handleUploadFiles}
            children={
              isUploading ? (
                <>
                  <Loader2Icon className="w-4 h-4 mr-2 animate-spin text-white" />
                  Updating...
                </>
              ) : (
                <Typography level="base2sm" className="p-3 text-tertiary">
                  Save
                </Typography>
              )
            }
          />
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default AvatarUpdateDialog;
