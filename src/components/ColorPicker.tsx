import React from 'react';
import 'rc-color-picker/assets/index.css';
import RCColorPicker from 'rc-color-picker';

type Props = {
  color: string;
  onChange: (color: string) => void;
};

const ColorPicker: React.FC<Props> = ({ color, onChange }) => {
  const handleChange = React.useCallback(
    (c) => {
      onChange(c.color);
    },
    [onChange],
  );

  return (
    <RCColorPicker color={color} onChange={handleChange} enableAlpha={false} />
  );
};

export default ColorPicker;
