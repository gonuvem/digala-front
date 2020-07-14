import * as FormActions from '../../store/ducks/forms/actions';

interface FormDataDTO {
  attribute: 'config' | 'style';
  config?: {
    name: string;
    description?: string;
    beginDate?: Date;
    endDate?: Date;
    hasLimitedResponses: boolean;
    maxResponses?: string;
    isTotemMode: boolean;
    canDisplayProgressBar: boolean;
    progressBarType?: { value?: string; label?: string };
    canAllowMultipleSubmissions: boolean;
    researchExpireDate?: any;
  };
  style?: {
    background?: { value?: string; name?: string };
    logo?: string;
    headerText?: string;
    hasLogoInHeader: string;
    headerBackground?: { value?: string; name?: string };
    footerText?: string;
    footerBackground?: { value?: string; name?: string };
  };
}

export default function changeFormConfiguration(
  dispatch: Function,
  { config, style, attribute }: FormDataDTO,
): void {
  const dataToDispatch = attribute === 'config' ? config : style;

  let sendData = {};

  if (attribute === 'config') {
    sendData = {
      ...config,
      hasLimitedResponses: config?.hasLimitedResponses,
      isTotemMode: config?.isTotemMode,
      canDisplayProgressBar: config?.canDisplayProgressBar,
      canAllowMultipleSubmissions: config?.canAllowMultipleSubmissions,
      maxResponses: parseInt(config?.maxResponses || '', 10),
    };

    if (config?.researchExpireDate.length === 2) {
      sendData = {
        ...config,
        beginDate: config?.researchExpireDate[0],
        endDate: config?.researchExpireDate[1],
      };
    }
    console.log(sendData);
  }

  if (attribute === 'style') {
    sendData = {
      ...style,
      hasLogoInHeader: style?.hasLogoInHeader === 'on',
    };
  }

  if (dataToDispatch) {
    const action =
      attribute === 'config'
        ? FormActions.updateFormConfig
        : FormActions.updateFormStyle;

    dispatch(action(sendData));
  }
}
