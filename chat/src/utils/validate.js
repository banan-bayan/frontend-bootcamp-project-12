import * as yup from 'yup';

export const loginSchema = yup.object().shape({
  userName: yup.string()
    .required('Обязательное поле')
    .min(5, 'Минимум 5 букв')
    .max(20, 'Максимум 20 букв'),
  password: yup.string()
    .min(5, 'Минимум 5 символов')
    .max(20, 'Максимум 20 символов')
});

export const signUpSchema = yup.object().shape({
  userName: yup.string()
    .required('Обязательное поле')
    .min(5, 'Минимум 5 букв')
    .max(20, 'Максимум 20 букв'),
  password: yup.string()
    .min(5, 'Минимум 5 символов')
    .max(20, 'Максимум 20 символов'),
  passwordConfirm: yup.string()
    .min(5, 'Минимум 5 символов')
    .max(20, 'Максимум 20 символов')
    .oneOf([yup.ref('password')], 'Пароль не совпадает'),
});
