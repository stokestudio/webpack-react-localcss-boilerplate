import React from 'react';
import { Link } from 'react-router/es6';
import Content from './Content';
import styles from './Layout.scss';

const Layout = ({ children }) => (
  <div className={styles.container}>
    <Content className={styles.header}>
      Boilerplate
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
    </Content>
    {children}
  </div>
);

export default Layout;
