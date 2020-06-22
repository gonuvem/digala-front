import * as FormActions from '../../store/ducks/forms/actions';

interface FormDataDTO {
  attribute: 'config' | 'style';
  config?: {
    name: string;
    description?: string;
    beginDate?: Date;
    endDate?: Date;
    hasLimitedResponses: string;
    maxResponses?: string;
    isTotemMode: string;
    canDisplayProgressBar: string;
    progressBarType?: { value?: string; label?: string };
    canAllowMultipleSubmissions: string;
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
      hasLimitedResponses: config?.hasLimitedResponses === 'on',
      isTotemMode: config?.isTotemMode === 'on',
      canDisplayProgressBar: config?.canDisplayProgressBar === 'on',
      canAllowMultipleSubmissions: config?.canAllowMultipleSubmissions === 'on',
      maxResponses: parseInt(config?.maxResponses || '', 10),
    };
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
