import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ContentArea from './ContentArea';
import './Layout.scss';

const Header = styled.div`
  background: #eee;
  font-size: 24px;
  padding: 30px 0;

  nav {
    display: block;
    font-size: 18px;
    margin-top: 15px;

    a, a:visited {
      display: inline-block;
      margin-right: 20px;
      text-decoration: none;
    }
  }
`;

const Layout = ({ children }) => (
  <div>
    <Header>
      <ContentArea>
        Boilerplate
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </nav>
      </ContentArea>
    </Header>
    {children}
  </div>
);

export default Layout;
