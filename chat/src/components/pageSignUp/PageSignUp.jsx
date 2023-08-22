import Header from '../header/Header';
import FormSignUp from './FormSignUp';
import '../../styles/styles.css';

const PageSignUp = () => {

  return (
    <>
      <Header />
      <h1 className='registration'>Регистрация</h1>
      <FormSignUp />
    </>
  )
}

export default PageSignUp;