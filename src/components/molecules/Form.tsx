import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import type { ReactNode } from 'react';
import type { ZodSchema } from 'zod';

interface FormProps {
  onSubmit: (data: any) => void;
  schema: ZodSchema;
  children: ReactNode;
  className?: string;
}

export default function Form({
  onSubmit,
  schema,
  children,
  className = ''
}: FormProps) {
  const methods = useForm({
    resolver: zodResolver(schema)
  });

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className={className}
        noValidate
      >
        {children}
      </form>
    </FormProvider>
  );
}