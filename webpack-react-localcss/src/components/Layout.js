import React from 'react';
import Content from './Content';
import styles from './Layout.scss';

const Layout = ({ children }) => (
  <div className={styles.container}>
    <Content className={styles.header}>
      Boilerplate
    </Content>
    {children}
  </div>
);

export default Layout;
