import React, { MouseEventHandler } from 'react';
import clsx from 'clsx';

import styles from '@/components/Button.module.scss';

type Props = {
  onClick?: MouseEventHandler;
  type?: 'fill' | 'outline';
  color?: 'primary' | 'danger';
  size?: 'small' | 'medium';
  loading?: boolean;
  disabled?: boolean;
  expand?: boolean;
};

const Button: React.FC<Props> = ({
  children,
  loading,
  disabled,
  type = 'fill',
  color = 'primary',
  size = 'medium',
  expand,
  onClick,
}) => {
  const colorType = type + color.replace(color[0], color[0].toUpperCase());

  return (
    <button
      type="button"
      onClick={onClick}
      className={clsx(
        styles.button,
        styles[colorType],
        styles[size],
        expand ? styles.expand : null,
      )}
      disabled={loading || disabled}
    >
      {loading ? '...' : children}
    </button>
  );
};

export default Button;
