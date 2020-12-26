import React from 'react';

import { PatternProps } from '@/lib/interfaces';

const width = 200;
const height = 100;

const HishiSeigaiha: React.FC<PatternProps> = ({
  innerRef,
  primary = '#888',
  secondary = 'white',
  size,
}) => {
  const s = size ?? 1;
  const w = width * s;
  const h = height * s;
  return (
    <div style={{ width, height }}>
      <svg
        ref={innerRef}
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        width={w}
        height={h}
        viewBox="0 0 24 24"
        preserveAspectRatio="none"
      >
        <path fill={primary} d="M-12-12v48h48v-48z" />
        <path
          fill={secondary}
          d="M1 13l11-11 11 11-2 2-9-9-9 9zm3 3 8-8 8 8-2 2-6-6-6 6zm3 3 5-5 5 5-2 2-3-3-3 3zm3 3 2-2 2 2-2 2zM-11 1l11-11 11 11-2 2-9-9-9 9zm3 3 8-8 8 8-2 2-6-6-6 6zm3 3 5-5 5 5-2 2-3-3-3 3zm3 3 2-2 2 2-2 2zM13 1l11-11 11 11-2 2-9-9-9 9zm3 3 8-8 8 8-2 2-6-6-6 6zm3 3 5-5 5 5-2 2-3-3-3 3zm3 3 2-2 2 2-2 2zM-11 25l11-11 11 11-2 2-9-9-9 9zm3 3 8-8 8 8-2 2-6-6-6 6zM13 25l11-11 11 11-2 2-9-9-9 9zm3 3 8-8 8 8-2 2-6-6-6 6z"
        />
      </svg>
    </div>
  );
};

export default HishiSeigaiha;
