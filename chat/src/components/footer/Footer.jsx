import Nav from 'react-bootstrap/Nav';

const Footer = () => {

  return (
    <>
      <span>Нет аккаунта</span>
      <Nav.Item>
        <Nav.Link href="/signup">Регистрация</Nav.Link>
      </Nav.Item>
    </>
  )
}

export default Footer;