/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Button } from "@/components/button";
import { FormField } from "@/components/formField";
import { Typography } from "@/components/typography";
import { HttpStatusCode } from "@/configs/HttpStatusCode";
import { useRegisterMutation } from "@/queries/useAuth";
import styled from "@/styles/auth.module.css";
import { TRegisterAuth } from "@/types/auth";
import { setFormErrors } from "@/utils/setErrorForm";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next-nprogress-bar";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";

//----------------------------------------------------------------------

const schema = yup.object({
  username: yup.string().required("Username is required"),
  email: yup.string().email("Email is invalid").required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  confirm_password: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Confirm password is required"),
  first_name: yup.string().required("First name is required"),
  last_name: yup.string().required("Last name is required"),
});

export default function RegisterView() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();
  const registerMutation = useRegisterMutation();

  const methods = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
    defaultValues: {
      email: "",
      username: "",
      first_name: "",
      last_name: "",
      password: "",
      confirm_password: "",
    },
  });

  const { setError } = methods;

  const onSubmit: SubmitHandler<TRegisterAuth> = async (data) => {
    setIsLoading(true);
    try {
      const response = await registerMutation.mutateAsync(data);
      const { status, data: responseData } = response;
      if (status === HttpStatusCode.CREATED) {
        router.push("/");
        return;
      }

      if (responseData?.errors) {
        setFormErrors<TRegisterAuth>(responseData.errors, setError);
      }
    } catch (error: any) {
      setError("root", { message: error.message });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="bg-auth w-full h-svh flex flex-col justify-around items-center px-[2.5rem]">
        <div id="stars" className={styled.stars}></div>
        <div
          className="w-full mx-auto md:mt-0 md:w-[25.5rem] md:h-[35rem] md:p-[2.5rem] md:bg-neutral1-5 md:rounded-[2rem] md:shadow-auth-card md:backdrop-blur-[3.125rem]"
          style={{ height: "auto" }}
        >
          <div className="flex flex-col mb-[1.5rem] items-center gap-6">
            <Typography level="h4" className="text-primary">
              Bento social
            </Typography>
          </div>
          {/* react hooks form */}
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
              <div className="flex flex-col gap-[0.875rem] mb-[1.5rem]">
                <FormField
                  name="first_name"
                  type="text"
                  placeholder="First name"
                />
                <FormField
                  name="last_name"
                  type="text"
                  placeholder="Last name"
                />
                <FormField name="username" type="text" placeholder="Username" />
                <FormField name="email" type="email" placeholder="Email" />
                <FormField
                  name="password"
                  type="password"
                  placeholder="Password"
                />
                <FormField
                  name="confirm_password"
                  type="password"
                  placeholder="Confirm password"
                />
              </div>

              <div className="flex flex-col gap-3">
                <Button
                  type="submit"
                  className={`w-full base px-[2rem] py-[0.875rem] ${
                    isLoading ? "bg-neutral2-5 opacity-50" : "opacity-100"
                  }`}
                  disabled={isLoading}
                  child={
                    <Typography level="base2sm" className="text-tertiary">
                      {isLoading ? "Loading..." : "Register"}
                    </Typography>
                  }
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
                  You have an account?
                  <Link href="/login" className="opacity-100 font-semibold">
                    <Typography level="captionsm" className="opacity-100">
                      Sign in, here!
                    </Typography>
                  </Link>
                </Typography>
              </div>
            </form>
          </FormProvider>
        </div>
      </div>
    </>
  );
}
