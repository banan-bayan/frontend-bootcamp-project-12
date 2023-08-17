import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/esm/Button';

const Header = () => {
  
  return (
    <div style={{display: 'flex', justifyContent: 'space-around'}}>
       <Nav.Item>
          <Nav.Link href="/">Hexlet Chat</Nav.Link>
        </Nav.Item>
     
        <Button variant='primary'>Выйти</Button>
    </div>
  )
}
export default Header;