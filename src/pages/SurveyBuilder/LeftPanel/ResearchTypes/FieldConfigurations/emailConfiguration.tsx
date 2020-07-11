import React from 'react';
import { Form } from '@unform/web';

import ShortTextField from '../../../../../components/ResearchFields/ShortTextField';
import TextAreaField from '../../../../../components/ResearchFields/TextAreaField';
import ToggleSwitch from '../../../../../components/Common/ToggleSwitch';

import { Question } from '../../../../../store/ducks/questions/types';

import { Container } from './styles';

interface EmailConfigutationProps {
  handleChange: Function;
  field: Question;
}

const EmailConfiguration: React.FC<EmailConfigutationProps> = ({
  handleChange,
  field,
}) => (
  <Container>
    <Form initialData={field} onSubmit={() => null}>
      <section>
        <ShortTextField
          label="Nome"
          placeholder="E-mail"
          name="label"
          id="emailLabelField"
          onChange={(event) => handleChange([event.target.value], ['label'])}
        />
      </section>
      <section>
        <TextAreaField
          label="Descrição"
          placeholder="Coloque aqui sua descrição"
          name="description"
          id="emailDescriptionField"
          onChange={(event) =>
            handleChange([event.target.value], ['description'])
          }
        />
      </section>
      <section>
        <ToggleSwitch
          label="Obrigatório"
          helpHint="Caso o usuário seja obrigado a responder"
          name="required"
          onChange={(event) =>
            handleChange([event.target.checked], ['required'])
          }
        />
      </section>
      <section>
        <ToggleSwitch
          label="Validação de e-mail"
          helpHint="Validar se o formato é um e-mail válido"
          name="validatePattern"
          onChange={(event) =>
            handleChange([event.target.checked], ['validatePattern'])
          }
        />
      </section>
    </Form>
  </Container>
);

export default EmailConfiguration;
