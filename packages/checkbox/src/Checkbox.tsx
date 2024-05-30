import type { InputHTMLAttributes } from 'react';
import { clsx } from 'clsx';

interface Props
  extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'className' | 'style' | 'type'
  > {
  id: 'string';
}

export const Checkbox = ({ id, ...restProps }: Props) => (
  <input id={id} className="checkbox" type="checkbox" {...restProps} />
);
