/* eslint-disable react/no-children-prop */
"use client";
import { CircleButton } from "@/components/button";
import { ArrowBackIcon, CameraIcon, MoreIcon } from "@/components/icons";
import { Typography } from "@/components/typography";
import { useRouter } from "next-nprogress-bar";

//-------------------------------------------------------------------------

interface HeadProps {
  isEdit?: boolean; // Nếu là trang chỉnh sửa thì isEdit = true
  onSave?: () => void; // Hàm xử lý khi nhấn nút Save
}

export default function Head({ isEdit = false, onSave }: HeadProps) {
  const router = useRouter();
  const handleBack = () => {
    router.back();
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
            onClick={onSave}
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
