import type { LabelHTMLAttributes } from "react";
import { forwardRef } from "react";

interface Props
  extends Omit<
    LabelHTMLAttributes<HTMLLabelElement>,
    "className" | "htmlFor" | "style"
  > {
  // Encourage associating a label with a form element by making
  // `htmlFor` mandatory
  htmlFor: "string";
}

export const Label = forwardRef<HTMLLabelElement, Props>(function Label(
  props,
  forwardedRef
) {
  const { htmlFor, children, ...restProps } = props;

  return (
    <label htmlFor={htmlFor} {...restProps} ref={forwardedRef}>
      {children}
    </label>
  );
});
