import type { TextareaHTMLAttributes } from "react";
import { clsx } from "clsx";

interface Props
  extends Omit<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    "className" | "style"
  > {
  appearance?: "error";
}

export const Button = ({ children, appearance, ...restProps }: Props) => (
  <textarea
    className={clsx("textarea", {
      ["textarea--error"]: appearance === "error",
    })}
    {...restProps}
  >
    {children}
  </textarea>
);
