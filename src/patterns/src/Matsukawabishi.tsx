import React from 'react';

import { PatternProps } from '@/lib/interfaces';

const Matsukawabishi: React.FC<PatternProps> = ({
  innerRef,
  primary = '#888',
  secondary = 'white',
  size = 1,
}) => {
  const width = 100 * size;
  const height = 70 * size;
  return (
    <div style={{ width, height }}>
      <svg
        ref={innerRef}
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 20 14"
        preserveAspectRatio="none"
      >
        <path fill={primary} d="M-10-7v28h40v-28z" />
        <path
          fill={secondary}
          d="m10 0 6 3-2 1 6 3-6 3 2 1-6 3-6-3 2-1-6-3 6-3-2-1z"
        />
      </svg>
    </div>
  );
};

export default Matsukawabishi;
