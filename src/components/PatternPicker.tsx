import React from 'react';

import { PatternName } from '@/lib/interfaces';
import * as patterns from '@/patterns';
import styles from '@/components/PatternPicker.module.scss';

type Props = { onChange: (patternName: PatternName) => void };

export const getByName = (name: PatternName) => {
  switch (name) {
    case 'yagasuri':
      return patterns.Yagasuri;
    case 'seigaiha':
      return patterns.Seigaiha;
    case 'hishiseigaiha':
      return patterns.HishiSeigaiha;
    default:
      throw new Error('Invalid pattern name.');
  }
};

const PatternPicker: React.FC<Props> = ({ onChange }) => (
  <div>
    <ul className={styles.list}>
      {Object.values(patterns).map((Component) => (
        <li key={Component.name}>
          <button
            type="button"
            onClick={() =>
              onChange(Component.name.toLowerCase() as PatternName)
            }
          >
            <PatternThumbnail Component={Component} />
          </button>
        </li>
      ))}
    </ul>
  </div>
);

const PatternThumbnail: React.FC<{ Component: React.FC }> = React.memo(
  ({ Component }) => (
    <div className={styles.thumbnail}>
      <div className={styles.thumbnailRow}>
        <Component />
        <Component />
      </div>
      <div className={styles.thumbnailRow}>
        <Component />
        <Component />
      </div>
    </div>
  ),
);

export default PatternPicker;
