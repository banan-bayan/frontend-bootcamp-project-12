// import { loremIpsum } from 'lorem-ipsum';
import { loginSchema } from '../utils/validate.js';
import { Formik, Form, Field } from 'formik';
import Button from 'react-bootstrap/Button';
// import btstrpForm from 'react-bootstrap/Form';

const Login = () => (
  <>
  <h3 style={{background: 'pink'}}>LOGIN</h3>
  <Formik
  initialValues={{ userName: "", password: "" }}
  validationSchema={loginSchema}
  onSubmit={({ setSubmitting }) => {
    console.log("Form is validated! Submitting the form...");
    setSubmitting(false);
  }}
>
{({ errors, touched }) => (
    <Form>
      <div>
        <label htmlFor="userName">Ваш ник</label>
        <Field 
          type="userName"
          name="userName"
        />
        {errors.userName && touched.userName ? <div>{errors.userName}</div> : null}
      </div>
      <div>
        <label htmlFor="password">Пароль</label>
        <Field
          type="password"
          name="password"
        />
        {errors.password && touched.password ? <div>{errors.password}</div> : null}
      </div>
      <Button type='submit'  variant="primary" className='primary'>Войти</Button>
    </Form>
  )}
  </Formik>
  <Button type='submit'  variant="primary">Войти</Button>
</>
);

export default Login;