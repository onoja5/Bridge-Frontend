import React from 'react';
import Spinner from './skeleton/Spinner';
import { Link } from 'react-router-dom';

type ButtonProps = {
  link?: boolean;
  type?: 'button' | 'submit' | 'reset' | 'link';
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  loading?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement> &
  React.AnchorHTMLAttributes<HTMLAnchorElement>;

const Button: React.FC<ButtonProps> = ({
  type = 'button',
  href,
  onClick,
  children,
  className,
  link,
  loading,
  disabled,
  // ...rest
}) => {
  if (link) {
    return (
      <Link
        to={href as string}
        className={` ${className} btn flex items-center justify-center gap-2`}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={` ${className} btn gap-2`}
      disabled={loading || disabled}
    >
      <span className='flex items-center justify-center gap-3 transition-all'>
        {loading && <Spinner />}
        {children}
      </span>
    </button>
  );
};

export default Button;
