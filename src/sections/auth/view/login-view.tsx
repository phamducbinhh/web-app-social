/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { _avatarData as fakeAvatar } from "@/_mocks/_avatar";
import { AvatarGroup } from "@/components/avatar";
import { Button, CircleButton } from "@/components/button";
import { FormField } from "@/components/formField";
import { Typography } from "@/components/typography";
import styled from "@/styles/auth.module.css";
import { TLoginAuth } from "@/types/auth";
import { yupResolver } from "@hookform/resolvers/yup";
import Image from "next/image";
import Link from "next/link";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";

//----------------------------------------------------------------------

const schema = yup.object({
  email: yup.string().email("Email is invalid").required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

export default function LoginView() {
  const methods = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<TLoginAuth> = async (data) => {
    console.log("🚀 ~ constonSubmit:SubmitHandler<TLoginAuth>= ~ data:", data);
  };

  return (
    <>
      <div className="bg-auth w-full h-svh flex flex-col justify-around items-center px-[2.5rem]">
        <div id="stars" className={styled.stars}></div>
        <div className="w-full mx-auto md:mt-0 md:w-[25.5rem] md:h-[35rem] md:p-[2.5rem] md:bg-neutral1-5 md:rounded-[2rem] md:shadow-auth-card md:backdrop-blur-[3.125rem]">
          <div className="flex flex-col mb-[2.5rem] items-center gap-6">
            <CircleButton className="size-[3.75rem] p-[1.125rem]">
              <Image
                src="/svg/circle_logo.svg"
                alt="Bento Logo"
                width={50}
                height={50}
              />
            </CircleButton>
            <Typography level="h4" className="text-primary">
              Sign in to Bento
            </Typography>
          </div>
          {/* react hooks form */}
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
              <div className="flex flex-col gap-[0.875rem] mb-[1.5rem]">
                <FormField name="email" type="email" placeholder="Email" />
                <FormField
                  name="password"
                  type="password"
                  placeholder="Password"
                />
              </div>

              <div className="flex flex-col gap-3">
                <Button
                  type="submit"
                  className="w-full base px-[2rem] py-[0.875rem] text-secondary text-sm font-semibold opacity-100"
                  child={<Typography level="base2sm">Sign In</Typography>}
                />

                <Button
                  className="w-full px-[2rem] py-[0.875rem]"
                  child={
                    <div className="flex items-center gap-3 justify-center">
                      <Image
                        src="/svg/ic_google.svg"
                        alt="Google Logo"
                        width={20}
                        height={20}
                        className="w-5 h-5"
                      />
                      <Typography level="base2sm" className="text-secondary">
                        Sign in with Google
                      </Typography>
                    </div>
                  }
                />

                <Typography
                  level="captionr"
                  className="opacity-80 flex items-center gap-2 text-secondary justify-center"
                >
                  Don&apos;t have an account?
                  <Link href="/register" className="opacity-100 font-semibold">
                    <Typography level="captionsm" className="opacity-100">
                      Sign up, it&apos;s free!
                    </Typography>
                  </Link>
                </Typography>
              </div>
            </form>
          </FormProvider>
        </div>
        <div className="hidden md:flex md:flex-col md:gap-6 md:justify-center md:items-center">
          <Typography className="text-tertiary opacity-80 ">
            Join over
            <Typography className="font-bold text-primary mx-1">2M</Typography>
            global social media users
          </Typography>

          <AvatarGroup
            className="size-[2.625rem] min-w-[2.625rem]"
            avatars={fakeAvatar}
          />
        </div>
      </div>
    </>
  );
}
