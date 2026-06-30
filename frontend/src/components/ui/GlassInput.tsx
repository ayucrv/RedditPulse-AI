import type { InputHTMLAttributes } from "react";

type Props = InputHTMLAttributes<HTMLInputElement>;

export default function GlassInput(props: Props) {
  return (
    <input
      {...props}
      className="
      glass
      w-full
      rounded-full
      px-6
      py-4
      text-white
      placeholder:text-gray-500
      outline-none
      transition-all
      duration-300
      focus:border-orange-600
      focus:ring-2
      focus:ring-orange-700/30
      "
    />
  );
}