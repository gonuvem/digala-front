import * as FormActions from '../../store/ducks/forms/actions';

interface FormDataDTO {
  attribute: 'config' | 'style';
  config?: {};
  style?: {};
}

export default function changeFormConfiguration(
  dispatch: Function,
  { config, style, attribute }: FormDataDTO,
): void {
  const dataToDispatch = attribute === 'config' ? config : style;

  console.log('Data to Dispatch >> ', dataToDispatch);

  if (dataToDispatch) {
    const action =
      attribute === 'config'
        ? FormActions.updateFormConfig
        : FormActions.updateFormStyle;

    dispatch(action(dataToDispatch));
  }
}
