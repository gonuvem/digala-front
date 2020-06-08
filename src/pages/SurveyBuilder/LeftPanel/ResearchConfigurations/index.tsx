import React from 'react';
import { Form } from '@unform/web';

import ShortTextField from '../../../../components/ResearchFields/ShortTextField';
import TextAreaField from '../../../../components/ResearchFields/TextAreaField';

import { Container } from './styles';

const ResearchConfigurations: React.FC = () => (
  <Container>
    <span>Informações Básicas</span>
    <Form onSubmit={() => null}>
      <ShortTextField
        label="Nome da pesquisa"
        name="researchName"
        id="researchNameField"
      />
      <TextAreaField
        label="Descrição da Pesquisa"
        name="researchDescription"
        id="researchDescriptionField"
      />
    </Form>
  </Container>
);

export default ResearchConfigurations;
