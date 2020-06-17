import { toast } from 'react-toastify';
import * as Yup from 'yup';

import { Form } from '../../store/ducks/forms/types';
import UpdateFormSchema from '../../schemas/updateForm';

export default async function updateOwnFormData(
  updateForm: Function,
  formData: Form | null,
): Promise<void> {
  try {
    const sendData = {
      id: formData?.id,
      isActive: true,
      name: formData?.config.name,
      description: formData?.config.description,
      beginDate: formData?.config.beginDate,
      endDate: formData?.config.endDate,
      hasLimitedResponses: formData?.config.hasLimitedResponses,
      maxResponses: formData?.config.maxResponses,
      isTotemMode: formData?.config.isTotemMode,
      canDisplayProgressBar: formData?.config.canDisplayProgressBar,
      progressBarType: formData?.config.progressBarType?.value,
      canAllowMultipleSubmissions: formData?.config.canAllowMultipleSubmissions,
      background: formData?.style.background?.value,
      logo: formData?.style.logo,
      headerText: formData?.style.headerText,
      hasLogoInHeader: formData?.style.hasLogoInHeader,
      headerBackground: formData?.style.headerBackground?.value,
      footerText: formData?.style.footerText,
      footerBackground: formData?.style.footerBackground?.value,
    };

    await UpdateFormSchema.validate(sendData, { abortEarly: false });

    if (formData === null) {
      throw new Error('Form data is null');
    }

    const response = await updateForm({ variables: { ...sendData } });

    if (response.data.updateOwnForm.error) {
      throw new Error(response.data.updateOwnFormData.error.message);
    }

    toast.success('Formulário atualizado com sucesso');
  } catch (err) {
    if (err instanceof Yup.ValidationError) {
      toast.error('Você precisa preencher todos os campos das configurações');
      return;
    }

    toast.error(err.message);
  }
}
