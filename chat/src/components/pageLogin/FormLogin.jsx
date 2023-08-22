import { loginSchema } from '../../utils/validate.js';
import { useFormik } from 'formik';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
// import axios from 'axios';

const FormLogin = () => {
  const formik = useFormik({
    initialValues: {
      userName: '',
      password: ''
    },
    onSubmit:  (values) => {
      // const response = await axios.post()
      // console.log(response)
    },
    validationSchema: loginSchema
  });

  return (
    <>
      <Form onSubmit={formik.handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicUserName">
          <Form.Control 
            type="userName"
            name="userName"
            placeholder="Ваш ник"
            onChange={formik.handleChange}
            value={formik.values.userName}
          />
          {formik.errors.userName && formik.touched.userName
            ?
            <Form.Text className="text-danger">
              {formik.errors.userName}
            </Form.Text>
            :
            null
          }
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            type="password"
            name="password"
            placeholder="Пароль"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          {formik.errors.password && formik.touched.password
            ?
            <Form.Text className="text-danger">
              {formik.errors.password}
            </Form.Text>
            :
            null
          }
        </Form.Group>
        <Button type='submit'  variant='outline-primary'>Войти</Button>
      </Form> 
    </>
  )
};

export default FormLogin;