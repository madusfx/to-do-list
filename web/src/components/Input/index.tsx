'use client';
import { FieldValues, Path, UseFormRegister } from 'react-hook-form';
import ReactInputMask from 'react-input-mask';

type InputProps<T extends FieldValues> = {
  name: Path<T>;
  register: UseFormRegister<T>;
  type: string;
  label: string;
  placeholder?: string;
  required?: boolean;
  errorMessage?: string;
  value?: string;
};

export function Input<T extends FieldValues>({
  name,
  register,
  type,
  label,
  placeholder,
  required,
  errorMessage,
  value,
}: InputProps<T>) {
  return (
    <div className="flex flex-col w-full mt-6">
      <label htmlFor="" className="text-base text-customBlue">
        {label}
      </label>
      {name === 'phone' ? (
        <ReactInputMask
          mask={'(99) 99999-9999'}
          type={type}
          placeholder={placeholder}
          className="border rounded-md border-customBlue p-3"
          {...register(name, { required: true })}
          value={value}
        />
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          className="border rounded-md border-customBlue p-3"
          {...register(name, { required: required })}
          value={value}
        />
      )}
      <p>{errorMessage}</p>
    </div>
  );
}
