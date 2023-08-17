import { signUpSchema } from '../../utils/validate.js';
import { useFormik } from 'formik';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const FormSignUp = () => {
  const formik = useFormik({
    initialValues: {
      userName: '',
      password: '',
      passwordConfirm: ''
    },
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
    },
    validationSchema: signUpSchema
  });
  return (
    <>
      <Form onSubmit={formik.handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicUserName">
          <Form.Control 
            type="userName"
            placeholder="Имя пользователя"
            id="userName"
            onChange={formik.handleChange}
            value={formik.values.userName}
          />
          {formik.errors.userName && formik.touched.userName ? <Form.Text className="text-danger">{formik.errors.userName}</Form.Text> : null}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            type="password"
            placeholder="Пароль"
            id="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          {formik.errors.password && formik.touched.password ? <Form.Text className="text-danger">{formik.errors.password}</Form.Text> : null}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPasswordComfirm">
          <Form.Control
            type="passwordConfirm"
            placeholder="Подтвердите пароль"
            id="passwordConfirm"
            onChange={formik.handleChange}
            value={formik.values.passwordConfirm}
          />
          {formik.errors.passwordConfirm && formik.touched.passwordConfirm ? <Form.Text className="text-danger">{formik.errors.passwordComfirm}</Form.Text> : null}
        </Form.Group>
      
        <Button type='submit'  variant='outline-primary'>Зарегистрироваться</Button>
      </Form> 
    </>
  )
}

export default FormSignUp