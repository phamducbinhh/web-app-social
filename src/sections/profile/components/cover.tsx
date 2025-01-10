import Image from "next/image";

export default function Cover() {
  return (
    <section className="w-full">
      <div className="relative">
        <Image
          src="https://i.pinimg.com/originals/d3/6f/ef/d36fef4f4885354afcfd3753dee95741.jpg"
          width={1280}
          height={180}
          className="max-h-[11.25rem] w-full object-cover"
          alt="Banner"
        />
        <Image
          src="https://i.pinimg.com/originals/a4/72/10/a47210899e2f804d4f4aead44adaefe0.jpg"
          alt="avatar"
          width={80}
          height={80}
          className="border-[0.25rem] border-[#2B2B2B] absolute size-[5rem] min-w-[5rem] rounded-full z-10 left-6 -bottom-[2.5rem]"
        />
      </div>
    </section>
  );
}
