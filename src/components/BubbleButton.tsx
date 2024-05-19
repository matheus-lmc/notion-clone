import { ComponentProps } from "react";

interface IBubbleButtonProps extends ComponentProps<"button"> {}

export default function Button(props: IBubbleButtonProps) {
  return (
    <button
      className="p-2 text-zinc-800 bg-zinc-50 text-sm flex items-center gap-1.5 
      font-medium leading-none hover:text-zinc-600 hover:bg-white dark:bg-slate-800 dark:text-zinc-300 
      dark:hover:bg-slate-500 dark:hover:text-zinc-200 transition-all data-[active=true]:text-teal-400"
      {...props}
    />
  );
}
