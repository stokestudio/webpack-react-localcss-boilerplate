import React from 'react';
import styles from './Content.scss';

const Content = ({ children, className }) => (
  <div className={className}>
    <div className={styles.content}>{children}</div>
  </div>
);

export default Content;
