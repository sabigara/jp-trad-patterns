import React from 'react';

import { PatternProps } from '@/lib/interfaces';

const width = 100;
const height = 100;

const Ichimatsu: React.FC<PatternProps> = ({
  innerRef,
  primary = '#888',
  secondary = 'white',
  size = 1,
}) => {
  const w = width * size;
  const h = height * size;
  return (
    <div style={{ width: w, height: h }}>
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
        <path fill={secondary} d="M0 0H1V1H0zM1 1H2V2H1z" />
      </svg>
    </div>
  );
};

export default Ichimatsu;
