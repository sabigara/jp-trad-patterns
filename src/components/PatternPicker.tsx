import React from 'react';
import clsx from 'clsx';

import { PatternName } from '@/lib/interfaces';
import * as patterns from '@/patterns';
import Modal from '@/components/Modal';
import Button from '@/components/Button';

import styles from '@/components/PatternPicker.module.scss';

type Props = {
  patternName: PatternName;
  onChange: (patternName: PatternName) => void;
};

export const getByName = (name: PatternName) => {
  switch (name) {
    case 'yagasuri':
      return patterns.Yagasuri;
    case 'seigaiha':
      return patterns.Seigaiha;
    case 'hishiseigaiha':
      return patterns.HishiSeigaiha;
    case 'ichimatsu':
      return patterns.Ichimatsu;
    case 'shichihou':
      return patterns.Shichihou;
    case 'matsukawabishi':
      return patterns.Matsukawabishi;
    case 'urokomon':
      return patterns.Urokomon;
    case 'kagome':
      return patterns.Kagome;
    default:
      throw new Error('Invalid pattern name.');
  }
};

const PatternPicker: React.FC<Props> = ({ patternName, onChange }) => {
  const [isOpen, setOpen] = React.useState(false);
  const handleClick = React.useCallback(() => {
    setOpen((curr) => !curr);
  }, []);

  return (
    <>
      <div className={styles.buttons}>
        <button type="button" onClick={handleClick} className={styles.button}>
          <PatternThumbnail Component={getByName(patternName)} />
        </button>
        <Button size="small" type="outline" expand onClick={handleClick}>
          Select
        </Button>
      </div>
      <Modal isOpen={isOpen} close={() => setOpen(false)}>
        <div>
          <ul className={styles.list}>
            {Object.values(patterns).map((Component) => (
              <li key={Component.name}>
                <button
                  type="button"
                  className={styles.button}
                  onClick={() =>
                    onChange(Component.name.toLowerCase() as PatternName)
                  }
                >
                  <PatternThumbnail
                    Component={Component}
                    selected={Component.name.toLowerCase() === patternName}
                  />
                </button>
              </li>
            ))}
          </ul>
        </div>
      </Modal>
    </>
  );
};

const PatternThumbnail: React.FC<{
  Component: React.FC;
  selected?: boolean;
}> = React.memo(({ Component, selected }) => (
  <div className={clsx(styles.thumbnail, selected ? styles.selected : null)}>
    <div className={styles.thumbnailRow}>
      <Component />
      <Component />
    </div>
    <div className={styles.thumbnailRow}>
      <Component />
      <Component />
    </div>
  </div>
));

export default PatternPicker;
