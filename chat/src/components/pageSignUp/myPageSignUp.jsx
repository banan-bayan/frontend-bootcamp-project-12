import React from 'react';
import Header from '../header/Header.jsx';
import FormSignUp from './FormSignUp.jsx';
import '../../styles/styles.css';

const PageSignUp = () => (
  <>
    <Header />
    <h1 className='registration'>Регистрация</h1>
    <FormSignUp />
  </>
);

export default PageSignUp;
