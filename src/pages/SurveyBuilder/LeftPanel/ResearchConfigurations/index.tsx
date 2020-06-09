import React from 'react';
import { Form } from '@unform/web';

import ShortTextField from '../../../../components/ResearchFields/ShortTextField';
import TextAreaField from '../../../../components/ResearchFields/TextAreaField';
import Calendar from '../../../../components/ResearchFields/Calendar';
import SwitchToggle from '../../../../components/Common/ToggleSwitch';
import NumericField from '../../../../components/ResearchFields/NumericField';
import SelectField from '../../../../components/ResearchFields/SelectField';

import { Container } from './styles';

const ResearchConfigurations: React.FC = () => (
  <Container>
    <span>Informações Básicas</span>
    <Form onSubmit={() => null}>
      <section>
        <ShortTextField
          label="Nome da pesquisa"
          name="researchName"
          id="researchNameField"
        />
      </section>
      <section>
        <TextAreaField
          label="Descrição da Pesquisa"
          name="researchDescription"
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
          name="limitedAnswerQuant"
          label="Quantidade de respostas limitada?"
          helpHint="Lorem ipsum sit dolor amet"
        />
      </section>
      <section>
        <NumericField name="answersQuant" label="Quantidade de respostas" />
      </section>
      <section>
        <SwitchToggle
          name="totemMode"
          label="Modo Totem"
          helpHint="Lorem ipsum"
        />
      </section>
      <section>
        <SwitchToggle
          name="showProgressBar"
          label="Mostrar barra de progresso"
          helpHint="Lorem ipsum"
        />
      </section>
      <section>
        <SelectField
          name="progressBarType"
          label="Tipo da barra de progresso"
        />
      </section>
      <section>
        <SwitchToggle
          name="allowMultipleSubmissions"
          label="Permitir múltiplas submissões"
          helpHint="Lorem ipsum"
        />
      </section>
    </Form>
  </Container>
);

export default ResearchConfigurations;