import type { TextareaHTMLAttributes } from 'react';
import { clsx } from 'clsx';

interface Props
  extends Omit<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    'className' | 'style'
  > {
  id: 'string';
  appearance?: 'error';
}

export const Button = ({ id, children, appearance, ...restProps }: Props) => (
  <textarea
    id={id}
    className={clsx('textarea', {
      ['textarea--error']: appearance === 'error',
    })}
    {...restProps}
  >
    {children}
  </textarea>
);
