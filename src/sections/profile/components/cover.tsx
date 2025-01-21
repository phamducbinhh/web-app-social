import { IUserSimple } from "@/interfaces/user";
import Image from "next/image";

export default function Cover({ user }: { user: IUserSimple }) {
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
      </div>
    </section>
  );
}
