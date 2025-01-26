"use client";
import { CameraIcon } from "@/components/icons";
import { typePicture } from "@/constants/enum";
import { IUserSimple } from "@/interfaces/user";
import { useGlobalStore } from "@/stores/state";
import Image from "next/image";

export default function Cover({
  isEdit = false,
  user,
}: {
  isEdit?: boolean;
  user: IUserSimple;
}) {
  const { setIsOpenModal, setIsTypePicture } = useGlobalStore();

  const handleOpenUpload = () => {
    setIsOpenModal(true);
    setIsTypePicture(typePicture.avatar);
  };
  return (
    <section className="w-full">
      <div className="relative">
        <Image
          src={user.cover}
          width={1280}
          height={180}
          className="max-h-[11.25rem] w-full object-cover"
          alt="Banner"
        />
        <Image
          src={user.avatar}
          alt="avatar"
          width={80}
          height={80}
          className="border-[0.25rem] border-[#2B2B2B] absolute size-[5rem] min-w-[5rem] rounded-full z-10 left-6 -bottom-[2.5rem]"
        />

        {isEdit && (
          <div className="relative">
            <div
              className="absolute w-20 h-20 left-6 -bottom-[2.5rem] border-[0.25rem] border-[#2B2B2B] rounded-full z-[15] bg-neutral4-60 flex flex-col justify-center items-center cursor-pointer"
              onClick={handleOpenUpload}
            >
              <CameraIcon />
            </div>

            <Image
              src={user.avatar}
              alt="avatar"
              width={80}
              height={80}
              className="border-[0.25rem] border-[#2B2B2B] absolute size-[5rem] min-w-[5rem] rounded-full z-10 left-6 -bottom-[2.5rem]"
            />
          </div>
        )}
      </div>
    </section>
  );
}
