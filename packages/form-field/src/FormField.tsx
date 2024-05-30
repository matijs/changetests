import type { PropsWithChildren } from 'react';
import { createContext } from 'react';

interface FormFieldContext {
  hasError: boolean;
}

const initialValue: FormFieldContext = {
  hasError: false,
};

const Context = createContext<FormFieldContext>(initialValue);

type Props = PropsWithChildren<{}>;

export function FormField({ children }: Props) {
  return <Context.Provider value={initialValue}>{children}</Context.Provider>;
}
