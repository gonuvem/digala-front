import React, { useRef, useState } from 'react';
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
import { useDebouncedCallback } from '../../../../hooks/useDebouncedCallback';

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
  const [showMaxResponses, setShowMaxResponses] = useState(
    formData?.config.hasLimitedResponses || false,
  );
  const dispatch = useDispatch();
  // const [hasLimitedResponses, setHasLimitResponses] = useState(false);

  const onChange = useDebouncedCallback(() => {
    const data = formRef.current?.getData();
    changeFormConfiguration(dispatch, {
      attribute: 'config',
      config: data as FormConfigDTO,
    });
  }, 300);

  return (
    <Container>
      <span>Informações Básicas</span>
      <Form ref={formRef} initialData={formData?.config} onSubmit={() => null}>
        <section>
          <ShortTextField
            name="name"
            id="researchNameField"
            label="Nome da pesquisa"
            onChange={onChange}
          />
        </section>
        <section>
          <TextAreaField
            label="Descrição da pesquisa"
            name="description"
            id="researchDescriptionField"
            onChange={onChange}
          />
        </section>
        <section>
          <Calendar
            name="researchExpireDate"
            label="Validade da pesquisa"
            selectRange
            view="month"
            next2Label={null}
            prev2Label={null}
            // defaultValue={[b, e]}
            // onChange={(event) => {
            //   onChange(event);
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
            onChange={(event) => {
              onChange();
              setShowMaxResponses(event.target.checked);
            }}
          />
        </section>
        {showMaxResponses && (
          <section>
            <NumericField
              id="maxResponsesField"
              name="maxResponses"
              label="Quantidade de respostas"
              onChange={onChange}
            />
          </section>
        )}
        <section>
          <SwitchToggle
            name="isTotemMode"
            label="Modo Totem"
            helpHint="Lorem ipsum"
            onChange={onChange}
          />
        </section>
        <section>
          <SwitchToggle
            name="canDisplayProgressBar"
            label="Mostrar barra de progresso"
            helpHint="Lorem ipsum"
            onChange={(event) => {
              onChange();
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
                { value: 'Step', label: 'Por páginas' },
                { value: 'Linear', label: 'Por questão respondida' },
              ]}
              onChange={onChange}
            />
          </section>
        )}
        <section>
          <SwitchToggle
            name="canAllowMultipleSubmissions"
            label="Permitir múltiplas submissões"
            helpHint="Lorem ipsum"
            onChange={onChange}
          />
        </section>
      </Form>
    </Container>
  );
};

export default ResearchConfigurations;
