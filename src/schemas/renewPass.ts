import * as Yup from 'yup';

export default Yup.object().shape({
  code: Yup.string().required('E-mail obrigatório'),
  newPassword: Yup.string().required('Senha obrigatória'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('newPassword')], 'Confirmação não corresponde a senha')
    .required('Confirmação obrigatória'),
});
