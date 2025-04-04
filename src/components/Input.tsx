import React, { ReactNode } from 'react';
import { InputHTMLAttributes } from 'react';

type InputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'id' | 'value' | 'onChange' | 'type'> & {
  id: string;
  children: ReactNode;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
};

const Input: React.FC<InputProps> = ({
  id,
  children,
  value,
  onChange,
  type = 'text',
  ...props
}) => {
  return (
    <div>
      <label htmlFor={id} className="mb-3 block text-sm font-medium text-gray-700">
        {children}
      </label>
      <input
        id={id}
        value={value}
        onChange={onChange}
        type={type}
        {...props}
        className="block w-full appearance-none rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-blue-500 sm:text-sm"
      />
    </div>
  );
};

export default Input;
