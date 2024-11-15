import { useFormContext } from 'react-hook-form';
import type { ReactNode } from 'react';

interface FormFieldProps {
  name: string;
  label: string;
  type?: 'text' | 'email' | 'password' | 'number' | 'textarea';
  required?: boolean;
  placeholder?: string;
  children?: ReactNode;
}

export default function FormField({
  name,
  label,
  type = 'text',
  required = false,
  placeholder,
  children
}: FormFieldProps) {
  const { register, formState: { errors } } = useFormContext();
  const error = errors[name];

  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={name} className="text-sm font-medium text-gray-700 dark:text-gray-300">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>

      {type === 'textarea' ? (
        <textarea
          id={name}
          placeholder={placeholder}
          className="rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          {...register(name)}
        />
      ) : (
        <input
          type={type}
          id={name}
          placeholder={placeholder}
          className="rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          {...register(name)}
        />
      )}

      {children}

      {error && (
        <p className="text-sm text-red-500 mt-1">
          {error.message as string}
        </p>
      )}
    </div>
  );
}