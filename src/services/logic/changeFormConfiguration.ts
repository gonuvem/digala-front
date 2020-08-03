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
    background?: string;
    logo?: {
      image: string;
      loading: boolean;
    };
    headerText?: string;
    hasLogoInHeader: boolean;
    headerBackground?: string;
    footerText?: string;
    footerBackground?: string;
  };
}

export default function changeFormConfiguration(
  dispatch: Function,
  { config, style, attribute }: FormDataDTO,
): void {
  const dataToDispatch = attribute === 'config' ? config : style;

  let sendData = {};

  if (attribute === 'config') {
    // console.log(config);
    sendData = {
      ...config,
      hasLimitedResponses: config?.hasLimitedResponses,
      isTotemMode: config?.isTotemMode,
      canDisplayProgressBar: config?.canDisplayProgressBar,
      canAllowMultipleSubmissions: config?.canAllowMultipleSubmissions,
      // beginDate: config?.beginDate,
      // endDate: config?.endDate,
      maxResponses: parseInt(config?.maxResponses || '', 10),
    };

    if (config?.researchExpireDate.length === 2) {
      sendData = {
        ...config,
        beginDate: config?.researchExpireDate[0],
        endDate: config?.researchExpireDate[1],
        maxResponses: parseInt(config?.maxResponses || '', 10),
      };
    }
  }

  if (attribute === 'style') {
    sendData = {
      ...style,
      hasLogoInHeader: style?.hasLogoInHeader,
    };
  }

  if (dataToDispatch) {
    const action =
      attribute === 'config'
        ? FormActions.updateFormConfig
        : FormActions.updateFormStyle;

    // console.log(style);
    dispatch(action(sendData));
  }
}
