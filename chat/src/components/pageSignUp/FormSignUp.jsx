import { signUpSchema } from '../../utils/validate.js';
import { useFormik } from 'formik';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import routes from '../../roures/routes.js';

const FormSignUp = () => {
  const formik = useFormik({
    initialValues: {
      userName: '',
      password: '',
      passwordConfirm: ''
    },
    onSubmit: async (values) => {
      try {
        const { username, password } = values;
        const response = await axios.post(routes.signUp(), { username, password });
        console.log(response);
      } catch {
        console.log('ERROR');
      }
    },
    validationSchema: signUpSchema
  });
  return (
    <>
      <Form onSubmit={formik.handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicUserName">
          <Form.Control 
            type="userName"
            name="userName"
            placeholder="Имя пользователя"
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

        <Form.Group className="mb-3" controlId="formBasicPasswordComfirm">
          <Form.Control
            type="passwordConfirm"
            name="passwordConfirm"
            placeholder="Подтвердите пароль"
            onChange={formik.handleChange}
            value={formik.values.passwordConfirm}
          />
          {formik.errors.passwordConfirm && formik.touched.passwordConfirm
            ?
            <Form.Text className="text-danger">
              {formik.errors.passwordConfirm}
            </Form.Text>
            :
            null
          }
        </Form.Group>
      
        <Button 
          type='submit'
          variant='outline-primary'
        >
          Зарегистрироваться
        </Button>
      </Form> 
    </>
  )
}

export default FormSignUp