import * as FormsActions from '../../store/ducks/forms/actions';

interface FormDTO {
  data: {
    error: object | null;
    form: {
      _id: string;
      config: {
        name: string;
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
    dispatch(
      FormsActions.loadForm({
        name: formData.data.form.config.name,
        id: formData.data.form._id,
      }),
    );
  }
}
