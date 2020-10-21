import { ReactNode } from "react";
import classNames from "classnames";

type ButtonProps = {
  children: ReactNode;
  className?: string;
  onClick(): void;
  type?: "submit" | "button";
};

export function Button({ children, className, type, onClick }: ButtonProps) {
  return (
    <button
      type={type || "button"}
      className={classNames(
        "py-1 px-3 w-auto text-xs font-bold tracking-wider uppercase rounded-full focus:outline-none focus:shadow-outline bg-purple-700 hover:bg-purple-800 active:bg-purple-900 text-white",
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
