import React from 'react';
import { Form } from '@unform/web';

import ShortTextField from '../../../../../components/ResearchFields/ShortTextField';
import TextAreaField from '../../../../../components/ResearchFields/TextAreaField';
import ToggleSwitch from '../../../../../components/Common/ToggleSwitch';

import { Container } from './styles';

interface EmailConfigutationProps {
  handleChange: Function;
}

const EmailConfiguration: React.FC<EmailConfigutationProps> = ({
  handleChange,
}) => (
  <Container>
    <Form onSubmit={() => null}>
      <section>
        <ShortTextField
          label="Nome"
          placeholder="E-mail"
          name="emailLabel"
          id="emailLabelField"
          onChange={(event) => handleChange(event.target.value, 'label')}
        />
      </section>
      <section>
        <TextAreaField
          label="Descrição"
          placeholder="Coloque aqui sua descrição"
          name="emailDescripion"
          id="emailDescriptionField"
          onChange={(event) => handleChange(event.target.value, 'description')}
        />
      </section>
      <section>
        <ToggleSwitch
          label="Obrigatório"
          helpHint="Caso o usuário seja obrigado a responder"
          name="emailRequired"
          onChange={(event) => handleChange(event.target.checked, 'required')}
        />
      </section>
      <section>
        <ToggleSwitch
          label="Validação de e-mail"
          helpHint="Validar se o formato é um e-mail válido"
          name="emailValidation"
          onChange={(event) =>
            handleChange(event.target.checked, 'validatePattern')
          }
        />
      </section>
    </Form>
  </Container>
);

export default EmailConfiguration;
