import type { InputHTMLAttributes } from 'react';

interface Props
  extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'className' | 'style' | 'type' | 'id'
  > {
  id: 'string';
}

export const Checkbox = ({ id, ...restProps }: Props) => (
  <input id={id} className="checkbox" type="checkbox" {...restProps} />
);
