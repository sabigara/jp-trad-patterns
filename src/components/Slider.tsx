import React from 'react';
import RCSlider from 'rc-slider';
import 'rc-slider/assets/index.css';

type Props = {
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (val: number) => void;
};

const Slider: React.FC<Props> = ({ value, min, max, step, onChange }) => (
  <RCSlider value={value} min={min} max={max} step={step} onChange={onChange} />
);

export default Slider;
