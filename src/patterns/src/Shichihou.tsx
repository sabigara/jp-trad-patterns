import React from 'react';

import { PatternProps } from '@/lib/interfaces';

const width = 100;
const height = 100;

const Shichihou: React.FC<PatternProps> = ({
  innerRef,
  primary = '#888',
  secondary = 'white',
  size = 1,
}) => {
  const w = width * size;
  const h = height * size;
  return (
    <div style={{ width, height }}>
      <svg
        ref={innerRef}
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        width={w}
        height={h}
        viewBox="0 0 2 2"
        preserveAspectRatio="none"
      >
        <path fill={primary} d="M-1-1v4h4v-4z" />
        <path
          fill={secondary}
          d="m1 0a1 1 0 0 1 0 2 1 1 0 0 1 0-2 1 1 0 0 1-1 1 1 1 0 0 1 1 1 1 1 0 0 1 1-1 1 1 0 0 1-1-1z"
        />
      </svg>
    </div>
  );
};

export default Shichihou;
