import React from 'react';

import styles from '@/components/Header.module.scss';

type Props = unknown;

const Header: React.FC<Props> = () => {
  console.log();
  return (
    <header className={styles.header}>
      <h1>JP Trad Patterns</h1>
    </header>
  );
};

export default Header;
