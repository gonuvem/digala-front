import React from 'react';
import { Form } from '@unform/web';

import ShortTextField from '../../../../components/ResearchFields/ShortTextField';
import TextAreaField from '../../../../components/ResearchFields/TextAreaField';
import Calendar from '../../../../components/ResearchFields/Calendar';

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
          selectRange
          view="month"
          next2Label={null}
          prev2Label={null}
        />
      </section>
    </Form>
  </Container>
);

export default ResearchConfigurations;
