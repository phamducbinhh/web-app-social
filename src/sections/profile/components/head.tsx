/* eslint-disable react/no-children-prop */
"use client";
import { CircleButton } from "@/components/button";
import { ArrowBackIcon, CameraIcon, MoreIcon } from "@/components/icons";
import { Typography } from "@/components/typography";
import { HttpStatusCode } from "@/configs/HttpStatusCode";
import { useVerifiedUserValidator } from "@/queries/useAuth";
import { updateUserProfile } from "@/server/mutation/user.mutate";
import { useUserFormStore } from "@/stores/user";
import { useRouter } from "next-nprogress-bar";
import { toast } from "react-toastify";

//-------------------------------------------------------------------------

interface HeadProps {
  isEdit?: boolean; // Nếu là trang chỉnh sửa thì isEdit = true
}

export default function Head({ isEdit = false }: HeadProps) {
  const { formData } = useUserFormStore();
  const { refetch } = useVerifiedUserValidator();

  const router = useRouter();
  const handleBack = () => {
    router.back();
  };

  const handleSubmit = async () => {
    console.log(formData);
    try {
      const response = await updateUserProfile({ body: formData });
      if (response.code === HttpStatusCode.SUCCESS) {
        refetch();
        toast.success("Update profile successfully");
        router.back();
      } else {
        toast.error(response.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="w-full absolute flex justify-between items-center gap-2 p-3 z-10">
      {/* Nút quay lại */}
      <CircleButton
        onClick={handleBack}
        className="p-2"
        children={<ArrowBackIcon />}
      />

      <span className="grow" />

      {/* Nút More luôn hiển thị */}
      <CircleButton className="p-2" children={<MoreIcon />} />

      {/* Hiển thị thêm nút Camera và Save nếu là trang chỉnh sửa */}
      {isEdit && (
        <>
          <CircleButton className="p-2" children={<CameraIcon />} />
          <CircleButton
            onClick={handleSubmit}
            children={
              <Typography level="base2sm" className="text-secondary">
                Save
              </Typography>
            }
            className="px-5 py-2"
          />
        </>
      )}
    </section>
  );
}
