import * as yup from 'yup';

export const modalScheme = yup.object().shape({
  modalsScheme: (Yup, t, channels) => (
    Yup.object().shape({
      channelName: Yup
        .string()
        .notOneOf(channels, 'Канал с таким именем уже существует')
        .min(3, t('modals.errors'))
        .max(20, t('modals.errors')),
    })
  ),
});
export const loginSchema = yup.object().shape({
  userName: yup.string()
    .trim()
    .required('Обязательное поле')
    .min(5, 'Минимум 5 букв')
    .max(20, 'Максимум 20 букв'),
  password: yup.string()
    .trim()
    .required('Обязательное поле')
    .min(5, 'Минимум 5 символов')
    .max(20, 'Максимум 20 символов'),
});

export const signUpSchema = yup.object().shape({
  userName: yup.string()
    .trim()
    .required('Обязательное поле')
    .min(5, 'Минимум 5 букв')
    .max(20, 'Максимум 20 букв'),
  password: yup.string()
    .trim()
    .required('Обязательное поле')
    .min(5, 'Минимум 5 символов')
    .max(20, 'Максимум 20 символов'),
  passwordConfirm: yup.string()
    .trim()
    .required('Обязательное поле')
    .min(5, 'Минимум 5 символов')
    .max(20, 'Максимум 20 символов')
    .oneOf([yup.ref('password')], 'Пароль не совпадает'),
});
