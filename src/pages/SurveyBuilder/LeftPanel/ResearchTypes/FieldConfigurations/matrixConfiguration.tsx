import React, { useState } from 'react';
import { Form } from '@unform/web';

import ShortTextField from '../../../../../components/ResearchFields/ShortTextField';
import TextAreaField from '../../../../../components/ResearchFields/TextAreaField';
import ToggleSwitch from '../../../../../components/Common/ToggleSwitch';

import { Container } from './styles';

interface MatrixConfigurationProps {
  handleChange: Function;
}

const MatrixConfiguration: React.FC<MatrixConfigurationProps> = ({
  handleChange,
}) => {
  return (
    <Container>
      <Form onSubmit={() => null}>
        <section>
          <ShortTextField
            label="Nome"
            placeholder="matrix"
            name="matrixLabel"
            id="matrixLabelField"
            onChange={(event) => handleChange(event.target.value, 'label')}
          />
        </section>
        <section>
          <TextAreaField
            label="Descrição"
            placeholder="Coloque aqui sua descrição"
            name="matrixDescripion"
            id="matrixDescriptionField"
            onChange={(event) =>
              handleChange(event.target.value, 'description')}
          />
        </section>
        <section>
          <ToggleSwitch
            label="Obrigatório"
            helpHint="Caso o usuário seja obrigado a responder"
            name="matrixRequired"
            onChange={(event) => handleChange(event.target.checked, 'required')}
          />
        </section>
      </Form>
    </Container>
  );
};

export default MatrixConfiguration;
