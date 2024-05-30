import type { ButtonHTMLAttributes } from 'react';
import { clsx } from 'clsx';

interface Props
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className' | 'style'> {
  appearance: 'primary' | 'secondary';
}

export const Button = ({
  appearance = 'secondary',
  children,
  type = 'submit',
  ...restProps
}: Props) => (
  <button
    className={clsx('button', {
      ['button--primary']: appearance === 'primary',
      ['button--secondary']: appearance === 'secondary',
    })}
    type={type}
    {...restProps}
  >
    {children}
  </button>
);
