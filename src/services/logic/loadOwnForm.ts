import * as FormsActions from '../../store/ducks/forms/actions';

interface FormDTO {
  data: {
    error: object | null;
    form: {
      _id: string;
      config: {
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
      };
      style: {
        background: string;
        logo: string;
        headerText: string;
        hasLogoInHeader: boolean;
        headerBackground: string;
        footerText: string;
        footerBackground: string;
      };
    } | null;
    __typename: string;
  };
}

export default function loadOwnForm(
  dispatch: Function,
  formData: FormDTO | undefined,
): void {
  if (formData !== undefined && formData.data.form !== null) {
    // console.log(formData);
    dispatch(
      FormsActions.loadForm({
        id: formData.data.form._id,
        config: {
          ...formData.data.form.config,

          progressBarType: {
            value: formData.data.form.config.progressBarType,
            label: formData.data.form.config.progressBarType,
          },
        },
        style: {
          ...formData.data.form.style,
          background: formData.data.form.style.background,
          headerBackground: formData.data.form.style.headerBackground,
          footerBackground: formData.data.form.style.footerBackground,
        },
      }),
    );
  }
}
