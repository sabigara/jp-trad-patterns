import React from 'react';

import { PatternProps } from '@/lib/interfaces';

const Urokomon: React.FC<PatternProps> = ({
  innerRef,
  primary = '#888',
  secondary = 'white',
  size = 1,
}) => {
  const width = 80 * size;
  const height = 140 * size;
  return (
    <div style={{ width, height }}>
      <svg
        ref={innerRef}
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 8 14"
        preserveAspectRatio="none"
      >
        <path fill={primary} d="M-4-7v28h16v-28z" />
        <path fill={secondary} d="m4 0 8 14h-16zm4 7h-8l4 7z" />
      </svg>
    </div>
  );
};

export default Urokomon;
