import type { InputHTMLAttributes } from 'react';
import { clsx } from 'clsx';

interface Props
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'className' | 'style'> {
  appearance?: 'error';
  id: 'string';
}

export const Input = ({
  appearance,
  id,
  type = 'text',
  ...restProps
}: Props) => (
  <input
    id={id}
    className={clsx('input', { ['input--error']: appearance === 'error' })}
    type={type}
    {...restProps}
  />
);
