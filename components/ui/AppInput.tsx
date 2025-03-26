'use client';

import React from 'react'
import clsx from 'clsx';

interface InputProps {
    size?: 'small' | 'medium' | 'large';
    type?: 'text' | 'password' | 'file';
    variant?: 'primary' | 'outline' | 'ghost';
    color?: 'blue' | 'red' | 'green' | 'gray';
    icon?: React.ReactNode;
    disabled?: boolean;
    fullWidth?: boolean;
    placeholder?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  }

const AppInput = ({size = 'medium', type = 'text', variant = 'primary', color = 'gray', icon, disabled = false, fullWidth = false, placeholder = '', value, onChange}:InputProps) => {
    const baseStyles = 'rounded-md font-medium transition-all flex items-center gap-2 border px-3';

    const sizeStyles = {
        small: 'h-8 text-sm',
        medium: 'h-10 text-base',
        large: 'h-12 text-lg',
    }[size];

    const variantStyles = {
        primary: `border-${color}-800 focus:ring-${color}-700`,
        outline: `border border-${color}-300 focus:ring-${color}-400`,
        ghost: 'border-none bg-transparent focus:ring-gray-400',
    }[variant];
  return (
    <div className={'relative w-full max-w-max'}>      
      <input
        type={type}
        className={clsx(baseStyles, sizeStyles, variantStyles, fullWidth && 'w-full', disabled && 'opacity-50 cursor-not-allowed')}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
      />
      {icon && <span className={`text-${color}-800 absolute right-3 top-1/2 -translate-y-1/2`}>{icon}</span>}
    </div>
  )
}

export default AppInput