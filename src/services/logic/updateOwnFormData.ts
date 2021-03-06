import { toast } from 'react-toastify';
import * as Yup from 'yup';

import { Form } from '../../store/ducks/forms/types';
import UpdateFormSchema from '../../schemas/updateForm';

interface FormDTO {
  id: string;
  isActive: boolean;
  name: string;
  description?: string;
  beginDate?: Date;
  endDate?: Date;
  hasLimitedResponses: boolean;
  maxResponses?: number;
  isTotemMode: boolean;
  canDisplayProgressBar: boolean;
  progressBarType?: string;
  canAllowMultipleSubmissions: boolean;
  background?: string;
  logo?: string;
  headerText?: string;
  hasLogoInHeader: boolean;
  headerBackground?: string;
  footerText?: string;
  footerBackground?: string;
}

export default async function updateOwnFormData(
  updateForm: Function,
  formData: Form | null,
): Promise<void> {
  try {
    if (!formData) {
      throw new Error('Form Data not sended');
    }

    const sendData: FormDTO = {
      id: formData.id,
      isActive: true,
      name: formData.config.name,
      beginDate: formData.config.beginDate,
      endDate: formData.config.endDate,
      hasLimitedResponses: formData.config.hasLimitedResponses,
      isTotemMode: formData.config.isTotemMode,
      canDisplayProgressBar: formData.config.canDisplayProgressBar,
      progressBarType: formData.config.progressBarType?.value,
      canAllowMultipleSubmissions: formData.config.canAllowMultipleSubmissions,
      background: formData.style.background,
      hasLogoInHeader: formData.style.hasLogoInHeader,
      headerBackground: formData.style.headerBackground,
      footerBackground: formData.style.footerBackground,
      ...(formData.style.hasLogoInHeader ? { logo: formData.style.logo } : {}),
    };

    if (formData.config.description) {
      sendData.description = formData?.config.description;
    }

    if (formData.style.footerText) {
      sendData.footerText = formData.style.footerText;
    }

    if (formData.style.headerText) {
      sendData.headerText = formData.style.headerText;
    }

    if (formData.config.hasLimitedResponses) {
      sendData.maxResponses = formData.config.maxResponses;
    }

    const filteredData = Object.entries(sendData).filter(
      ([_, value]) => value !== null,
    );

    const sendDataWithoutNullProperties = filteredData.reduce((obj, pair) => {
      return {
        ...obj,
        [pair[0]]: pair[1],
      };
    }, {});

    await UpdateFormSchema.validate(sendDataWithoutNullProperties, {
      abortEarly: false,
    });

    const response = await updateForm({
      variables: { ...sendDataWithoutNullProperties },
    });

    if (response.data.data.error) {
      throw new Error(response.data.data.error.message);
    }

    toast.success('Pesquisa atualizada com sucesso');
  } catch (err) {
    if (err instanceof Yup.ValidationError) {
      console.log(err);
      toast.error('Voc?? precisa preencher todos os campos das configura????es');
      return;
    }

    toast.error(err.message);
  }
}
