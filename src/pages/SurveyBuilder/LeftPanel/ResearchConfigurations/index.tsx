import React, { useCallback, useRef, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';

import ShortTextField from '../../../../components/ResearchFields/ShortTextField';
import TextAreaField from '../../../../components/ResearchFields/TextAreaField';
import Calendar from '../../../../components/ResearchFields/Calendar';
import SwitchToggle from '../../../../components/Common/ToggleSwitch';
import NumericField from '../../../../components/ResearchFields/NumericField';
import SelectField from '../../../../components/ResearchFields/SelectField';

import { Container } from './styles';

import { Form as FormType } from '../../../../store/ducks/forms/types';
import changeFormConfiguration from '../../../../services/logic/changeFormConfiguration';
import useDebounce from '../../../../hooks/useDebounce';

interface ResearchConfigurationsProps {
  formData: FormType | null;
}

const ResearchConfigurations: React.FC<ResearchConfigurationsProps> = ({
  formData,
}) => {
  const [tempInformation, setTempInformation] = useState('');
  const formRef = useRef<FormHandles>(null);
  const dispatch = useDispatch();

  const debouncedTrigger = useDebounce(tempInformation, 500);

  const handleChange = useCallback((value) => {
    setTempInformation(value);
  }, []);

  useEffect(() => {
    const data = formRef.current?.getData();
    changeFormConfiguration(dispatch, { attribute: 'config', config: data });
  }, [debouncedTrigger, dispatch]);

  return (
    <Container>
      <span>Informações Básicas</span>
      <Form ref={formRef} initialData={formData?.config} onSubmit={() => null}>
        <section>
          <ShortTextField
            label="Nome da pesquisa"
            name="name"
            id="researchNameField"
            onChange={(event) => handleChange(event.target.value)}
          />
        </section>
        <section>
          <TextAreaField
            label="Descrição da Pesquisa"
            name="description"
            id="researchDescriptionField"
          />
        </section>
        <section>
          <Calendar
            name="researchExpireDate"
            selectRange
            view="month"
            next2Label={null}
            prev2Label={null}
          />
        </section>
        <section>
          <SwitchToggle
            name="hasLimitedResponses"
            label="Quantidade de respostas limitada?"
            helpHint="Lorem ipsum sit dolor amet"
          />
        </section>
        <section>
          <NumericField name="maxResponses" label="Quantidade de respostas" />
        </section>
        <section>
          <SwitchToggle
            name="isTotemMode"
            label="Modo Totem"
            helpHint="Lorem ipsum"
          />
        </section>
        <section>
          <SwitchToggle
            name="canDisplayProgressBar"
            label="Mostrar barra de progresso"
            helpHint="Lorem ipsum"
          />
        </section>
        <section>
          <SelectField
            name="progressBarType"
            label="Tipo da barra de progresso"
            options={[
              { value: 'Step', label: 'Step' },
              { value: 'Linear', label: 'Linear' },
            ]}
            onChange={handleChange}
          />
        </section>
        <section>
          <SwitchToggle
            name="canAllowMultipleSubmissions"
            label="Permitir múltiplas submissões"
            helpHint="Lorem ipsum"
          />
        </section>
      </Form>
    </Container>
  );
};

export default ResearchConfigurations;
