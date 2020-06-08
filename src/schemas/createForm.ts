import * as Yup from 'yup';

export default Yup.object().shape({
  researchName: Yup.string().required('Título obrigatório'),
});
