import type { PropsWithChildren } from 'react';

type Props = PropsWithChildren<{}>;

export function FormField({ children }: Props) {
  return <div className="form-field">{children}</div>;
}
