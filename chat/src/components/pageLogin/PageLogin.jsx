import FormLogin from './FormLogin.jsx';
import Header from '../header/Header.jsx';
import Footer from '../footer/Footer.jsx';

const PageLogin = () => {
  return (
  <>
    <Header />
    <img alt="foo" src="./images.jpg" />
    <h1>Войти</h1>
    <FormLogin />
    <Footer />
  </>
  )
}
export default PageLogin