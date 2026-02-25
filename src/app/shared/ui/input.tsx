import type { ReactNode } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: ReactNode;
  label?: string;
}

export const Input = (props: InputProps) => {
  return (
    <div className="flex flex-col">
      <p className="text-white">{props.label}</p>
      <div className="flex justify-between items-center rounded-full px-5 py-2 gap-20  border border-[#e4e7e7] ">
        <input
          {...props}
          className="border-none focus:outline-none focus:border-0 text-[#e4e7e7] text-base font-bold"
        />
        {props.icon}
      </div>
    </div>
  );
};
