'use client';

import React from 'react'
import clsx from 'clsx';

interface ButtonProps {
    title: string;
    type?: "button" | "submit";
    size?: 'small' | 'medium' | 'large';
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    color?: 'blue' | 'red' | 'green' | 'gray';
    icon?: React.ReactNode;
    disabled?: boolean;
    onClick?: () => void;
}

const AppButton = ({title, type = 'button', size = 'medium', variant = 'primary', color = 'gray', icon, disabled = false, onClick}:ButtonProps) => {
  const baseStyles = 'rounded-md font-medium transition-all flex items-center justify-center gap-2 cursor-pointer';

  const sizeStyles = {
    small: 'px-3 py-1 text-sm',
    medium: 'px-4 py-2 text-base',
    large: 'px-5 py-3 text-lg',
  }[size];

  const variantStyles = {
    primary: `bg-${color}-800 text-white hover:bg-${color}-900`,
    secondary: `bg-${color}-100 text-${color}-700 hover:bg-${color}-200`,
    outline: `border border-${color}-500 text-${color}-500 hover:bg-${color}-100`,
    ghost: `text-${color}-500 hover:bg-${color}-100`,
  }[variant];

  return (
    <button className={clsx(baseStyles, sizeStyles, variantStyles, disabled && 'opacity-50 cursor-not-allowed')} onClick={onClick} disabled={disabled} type={type}>
        {icon && <span>{icon}</span>}
        {title}
    </button>
  )
}

export default AppButton