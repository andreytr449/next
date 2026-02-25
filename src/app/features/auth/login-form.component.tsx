"use client";

import { useState } from "react";
import { ErrorText, Input } from "@/app/shared/ui/";
import { useForm } from "react-hook-form";
import { loginType } from "./auth.interface";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginScheme } from "./auth.constant";
import { signIn } from "@/app/entities/api/auth";

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<loginType>({
    resolver: yupResolver(loginScheme),
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data: loginType) => {
    setErrorMessage("");
    setIsLoading(true);

    const res = await signIn(data.email, data.password);

    if (res.error) {
      setErrorMessage(res.error);
    }
    setIsLoading(false);
  };

  return (
    <div className="flex flex-col justify-center items-center pt-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col w-full max-w-md gap-4 px-4"
      >
        <Input
          placeholder="Enter email address"
          type="email"
          disabled={isLoading}
          label="Email address"
          {...register("email")}
        />
        <ErrorText message={errors?.email?.message} />
        <Input
          placeholder="Enter your password"
          type="password"
          disabled={isLoading}
          label="Password"
          {...register("password")}
        />
        <ErrorText message={errors?.password?.message} />
        <button
          type="submit"
          className="cursor-pointer active:translate-y-[2px] w-full text-lg py-4 rounded-full shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(0,118,255,0.9)] bg-[#0070f3] text-white font-light transition duration-200 ease-linear disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <div
            className={`${isLoading ? "animate-pulse" : ""} flex items-center justify-center w-full`}
          >
            {isLoading ? "Authenticating..." : "Login"}
          </div>
        </button>
        <ErrorText message={errorMessage} />
      </form>
    </div>
  );
};
