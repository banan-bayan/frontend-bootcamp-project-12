import Nav from 'react-bootstrap/Nav';
// import Button from 'react-bootstrap/esm/Button';
import { AuthButton } from '../providers/AuthProvider';
import { Children } from 'react';

const Header = () => {
  
  return (
    <div style={{display: 'flex', justifyContent: 'space-around'}}>
       <Nav.Item>
          <Nav.Link href="/">Hexlet Chat</Nav.Link>
        </Nav.Item>
        <AuthButton variant='primary'>{Children}</AuthButton>
    </div>
  )
}
export default Header;