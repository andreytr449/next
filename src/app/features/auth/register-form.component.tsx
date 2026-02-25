import { ErrorText, Input } from "@/app/shared/ui/";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signupScheme } from "./auth.constant";
import { signupType } from "./auth.interface";

export const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<signupType>({
    resolver: yupResolver(signupScheme),
  });

  const onSubmit = (data: signupType) => {
    console.log(data);
  };

  return (
    <div className="flex flex-col justify-center items-center pt-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col w-full max-w-md gap-4 px-4"
      >
        <Input
          placeholder="Enter Nickname"
          type="text"
          label="Nickname"
          {...register("name")}
        />
        <ErrorText message={errors?.name?.message} />
        <Input
          placeholder="Enter email address"
          type="email"
          label="Email address"
          {...register("email")}
        />
        <ErrorText message={errors?.email?.message} />
        <Input
          placeholder="Enter your password"
          type="password"
          label="Password"
          {...register("password")}
        />
        <ErrorText message={errors?.password?.message} />

        <button
          type="submit"
          className="cursor-pointer active:translate-y-[2px] w-full text-lg py-4 rounded-full shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(0,118,255,0.9)] bg-[#0070f3] text-white font-light transition duration-200 ease-linear disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <div className="flex items-center justify-center w-full">
            Login to account
          </div>
        </button>
      </form>
    </div>
  );
};
