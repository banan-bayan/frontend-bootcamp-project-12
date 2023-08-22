import React from 'react';
import Nav from 'react-bootstrap/Nav';
// import Button from 'react-bootstrap/esm/Button';
import { AuthButton } from '../providers/AuthProvider.jsx';

const Header = () => (
  <div style={{ display: 'flex', justifyContent: 'space-around' }}>
    <Nav.Item>
      <Nav.Link href="/">Hexlet Chat</Nav.Link>
    </Nav.Item>
    <AuthButton variant='primary'>Выйти</AuthButton>
  </div>
);

export default Header;
