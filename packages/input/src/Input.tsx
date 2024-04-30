import type { InputHTMLAttributes } from "react";
import { clsx } from "clsx";

interface Props
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "className" | "style"> {
  appearance?: "error";
}

export const Input = ({ appearance, ...restProps }: Props) => (
  <input
    className={clsx("input", { ["input--error"]: appearance === "error" })}
    {...restProps}
  />
);
