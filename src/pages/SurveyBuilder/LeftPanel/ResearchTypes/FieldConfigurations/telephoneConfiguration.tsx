import React, { useState } from 'react';
import { Form } from '@unform/web';

import ShortTextField from '../../../../../components/ResearchFields/ShortTextField';
import TextAreaField from '../../../../../components/ResearchFields/TextAreaField';
import ToggleSwitch from '../../../../../components/Common/ToggleSwitch';

import { Container } from './styles';

interface TelephoneConfigurationProps {
  handleChange(value: string[] | boolean[], attribute: string[]): void;
}

const TelephoneConfiguration: React.FC<TelephoneConfigurationProps> = ({
  handleChange,
}) => {
  return (
    <Container>
      <Form onSubmit={() => null}>
        <section>
          <ShortTextField
            label="Nome"
            placeholder="Telefone"
            name="phoneLabel"
            id="phoneLabelField"
            onChange={(event) => handleChange([event.target.value], ['label'])}
          />
        </section>
        <section>
          <TextAreaField
            label="Descrição"
            placeholder="Coloque aqui sua descrição"
            name="phoneDescripion"
            id="phoneDescriptionField"
            onChange={(event) =>
              handleChange([event.target.value], ['description'])}
          />
        </section>
        <section>
          <ToggleSwitch
            label="Obrigatório"
            helpHint="Caso o usuário seja obrigado a responder"
            name="phoneRequired"
            onChange={(event) =>
              handleChange([event.target.checked], ['required'])
            }
          />
        </section>
        <section>
          <ToggleSwitch
            label="Ativar validação de telefone"
            helpHint="Formato do telefone será válidado antes da submissão"
            name="phoneFormatValidation"
            onChange={(event) =>
              handleChange([event.target.checked], ['validatePattern'])
            }
          />
        </section>
      </Form>
    </Container>
  );
};

export default TelephoneConfiguration;
