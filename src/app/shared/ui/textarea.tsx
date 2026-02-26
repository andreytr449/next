import * as React from "react";

import { cn } from "@/app/shared/lib/utils";

interface TextareaProps extends React.ComponentProps<"textarea"> {
  label?: string;
}

function Textarea({ className, ...props }: TextareaProps) {
  return (
    <div className="flex flex-col">
      <p className="text-white">{props.label}</p>
      <div className="flex justify-between items-center rounded-full px-5 py-2 gap-20  border border-[#e4e7e7] ">
        <textarea
          data-slot="textarea"
          className={cn(
            "border-none focus:outline-none focus:border-0 text-[#e4e7e7] text-base font-bold  placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
            className,
          )}
          {...props}
        />
      </div>
    </div>
  );
}

export { Textarea };
