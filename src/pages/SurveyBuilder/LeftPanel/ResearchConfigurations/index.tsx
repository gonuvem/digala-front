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

interface FormConfigDTO {
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
}

const ResearchConfigurations: React.FC<ResearchConfigurationsProps> = ({
  formData,
}) => {
  const formRef = useRef<FormHandles>(null);
  const [showProgressBarType, setShowProgressBarType] = useState(
    formData?.config.canDisplayProgressBar || false,
  );
  const [tempInformation, setTempInformation] = useState('');
  const dispatch = useDispatch();
  // const [hasLimitedResponses, setHasLimitResponses] = useState(false);

  const debouncedTrigger = useDebounce(tempInformation, 500);

  const handleChange = useCallback((value) => {
    setTempInformation(value);
  }, []);

  useEffect(() => {
    const data = formRef.current?.getData();
    changeFormConfiguration(dispatch, {
      attribute: 'config',
      config: data as FormConfigDTO,
    });
  }, [debouncedTrigger, dispatch]);

  return (
    <Container>
      <span>Informações Básicas</span>
      <Form ref={formRef} initialData={formData?.config} onSubmit={() => null}>
        {/* {console.log(formData)} */}
        <section>
          <ShortTextField
            name="name"
            id="researchNameField"
            label="Nome da pesquisa"
            onChange={(event) => handleChange(event.target.value)}
          />
        </section>
        <section>
          <TextAreaField
            label="Descrição da Pesquisa"
            name="description"
            id="researchDescriptionField"
            onChange={(event) => handleChange(event.target.value)}
          />
        </section>
        <section>
          <Calendar
            name="researchExpireDate"
            selectRange
            view="month"
            next2Label={null}
            prev2Label={null}
            // defaultValue={[b, e]}
            // onChange={(event) => {
            //   handleChange(event);
            // console.log(event);
            // setDaterCalendar(event);
            // }}
          />
        </section>
        <section>
          <SwitchToggle
            name="hasLimitedResponses"
            label="Quantidade de respostas limitada?"
            helpHint="Lorem ipsum sit dolor amet"
            onChange={(event) => handleChange(event.target.checked)}
          />
        </section>
        <section>
          <NumericField
            id="maxResponsesField"
            name="maxResponses"
            label="Quantidade de respostas"
            onChange={(event) => handleChange(event.target.value)}
          />
        </section>
        <section>
          <SwitchToggle
            name="isTotemMode"
            label="Modo Totem"
            helpHint="Lorem ipsum"
            onChange={(event) => {
              handleChange(event.target.checked);
            }}
          />
        </section>
        <section>
          <SwitchToggle
            name="canDisplayProgressBar"
            label="Mostrar barra de progresso"
            helpHint="Lorem ipsum"
            onChange={(event) => {
              handleChange(event.target.checked);
              setShowProgressBarType(event.target.checked);
            }}
          />
        </section>
        {showProgressBarType && (
          <section>
            <SelectField
              name="progressBarType"
              label="Tipo da barra de progresso"
              options={[
                { value: 'Step', label: 'Step' },
                { value: 'Linear', label: 'Linear' },
              ]}
              onChange={(value) => handleChange(value)}
            />
          </section>
        )}
        <section>
          <SwitchToggle
            name="canAllowMultipleSubmissions"
            label="Permitir múltiplas submissões"
            helpHint="Lorem ipsum"
            onChange={(event) => handleChange(event.target.checked)}
          />
        </section>
      </Form>
    </Container>
  );
};

export default ResearchConfigurations;
