import { Slot } from "@radix-ui/react-slot";
import { InputHTMLAttributes, ReactNode } from "react";

export interface TextInputRootProps {
  children: ReactNode;
}
const TextInputRoot = (props: TextInputRootProps) => {
  return (
    <div className="flex items-center gap-3 h-12 py-4 px-3 rounded bg-grey-800 w-full text-grey-100 text-xs placeholder:text-grey-400 focus-within:ring-2 ring-cyan-300">
      {props.children}
    </div>
  );
};
export interface TextInputIconProps {
  children: ReactNode;
}

const TextInputIcon = (props: TextInputIconProps) => {
  return <Slot className="w-6 h-6 text-grey-400">{props.children}</Slot>;
};

export interface TextInputInputProps
  extends InputHTMLAttributes<HTMLInputElement> {}

const TextInputInput = (props: TextInputInputProps) => {
  return (
    <input
      className="bg-transparent flex-1 text-grey-100 text-xs placeholder:text-grey-400 outline-none"
      {...props}
    />
  );
};

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon,
};
