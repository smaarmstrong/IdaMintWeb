import React, { ReactNode } from 'react';

type ButtonProps = {
  disabled?: boolean;
  children: ReactNode;
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({ disabled = false, children, onClick }) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className="group inline-flex items-center justify-center rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-500 focus:outline-none active:bg-blue-800 active:text-blue-100"
    >
      {children}
    </button>
  );
};

export default Button;
