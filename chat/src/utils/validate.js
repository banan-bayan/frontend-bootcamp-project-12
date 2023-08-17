import * as yup from 'yup';

export const loginSchema = yup.object().shape({
  userName: yup.string()
    .required('Обязательное поле')
    .min(5, 'Минимум 5 букв')
    .max(50, 'Максимум 50 букв'),
  password: yup.string()
    .min(5, 'Минимум 5 символов')
    .max(50, 'Максимум 50 символов')
});

export const signUpSchema = yup.object().shape({
  userName: yup.string()
    .required('Обязательное поле')
    .min(5, 'Минимум 5 букв')
    .max(50, 'Максимум 50 букв'),
  password: yup.string()
    .min(5, 'Минимум 5 символов')
    .max(50, 'Максимум 50 символов'),
  passwordComfirm: yup.string()
    .min(5, 'Минимум 5 символов')
    .max(50, 'Максимум 50 символов'),
});
