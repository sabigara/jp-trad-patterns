import React from 'react';

import styles from '@/components/Radio.module.scss';

type Props = {
  label: string;
  id: string;
  value: string;
  group: string;
  selected: boolean;
  onChange: (val: string) => void;
};

const RadioButton: React.FC<Props> = ({
  label,
  id,
  value,
  group,
  selected,
  onChange,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.currentTarget.value);
  };

  return (
    <div className={styles.radio}>
      <input
        id={id}
        onChange={handleChange}
        value={value}
        name={group}
        type="radio"
        checked={selected}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

export default RadioButton;
