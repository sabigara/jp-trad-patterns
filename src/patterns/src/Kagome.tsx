import React from 'react';

import { PatternProps } from '@/lib/interfaces';

const Kagome: React.FC<PatternProps> = ({
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
        viewBox="0 0 160 240"
        preserveAspectRatio="none"
      >
        <path fill={secondary} d="M-80-120v480h320v-480z" />
        <path
          fill="none"
          stroke={primary}
          strokeWidth="41"
          d="M0 0 160 240M0 240 160 0M-15 60h190M-15 180h190"
        />
        <path
          fill={secondary}
          d="M11-38h29l-51 76h-29zM-15 48h21l16 24h-37zM-15 168h101l16 24h-117zM11 202h29l-51 76h-29zM21 10l53 80-15 21-53-80zM58 48h117v24h-101zM171-38h29l-51 76h-29zM91 82h29l-51 76h-29zM101 129l53 80-15 21-53-80zM138 168h37v24h-21zM171 202h29l-51 76h-29z"
        />
      </svg>
    </div>
  );
};

export default Kagome;
