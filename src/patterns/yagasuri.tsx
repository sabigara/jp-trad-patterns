import React from 'react';

import { PatternProps } from '@/lib/interfaces';

const viewWidth = 80;
const viewHeight = 120;

const Yagasuri: React.FC<PatternProps> = ({
  innerRef,
  primary = '#888',
  secondary = 'white',
  size = 1,
}) => {
  const width = viewWidth * size;
  const height = viewHeight * size;
  return (
    <div style={{ width: viewWidth, height: viewHeight }}>
      <svg
        ref={innerRef}
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox={`0 0 ${viewWidth} ${viewHeight}`}
        preserveAspectRatio="none"
      >
        <path fill={secondary} d="M-40-60v240h160v-240z" />
        <path
          fill={primary}
          fillRule="evenodd"
          d="m0 0l19 19h2l19-19v60l-19 19h-2l-19-19zm19-60h2v240h-2zm21 0l19 19h2l19-19v60l-19 19h-2l-19-19zm19 0h2v240h-2zm-19 120l19 19h2l19-19v60l-19 19h-2l-19-19z"
        />
      </svg>
    </div>
  );
};

export default Yagasuri;
