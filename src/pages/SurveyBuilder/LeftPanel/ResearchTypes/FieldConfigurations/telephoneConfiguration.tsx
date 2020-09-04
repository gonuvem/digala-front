import React, { useEffect, useRef } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';

import ShortTextField from '../../../../../components/ResearchFields/ShortTextField';
import TextAreaField from '../../../../../components/ResearchFields/TextAreaField';
import ToggleSwitch from '../../../../../components/Common/ToggleSwitch';

import { Question } from '../../../../../store/ducks/questions/types';

import { Container } from './styles';

interface TelephoneConfigurationProps {
  handleChange(value: string[] | boolean[], attribute: string[]): void;
  field: Question;
}

const TelephoneConfiguration: React.FC<TelephoneConfigurationProps> = ({
  handleChange,
  field,
}) => {
  const formRef = useRef<FormHandles>(null);

  useEffect(() => {
    formRef.current?.setData(field);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [field.id]);

  return (
    <Container>
      <Form ref={formRef} onSubmit={() => null}>
        <section>
          <ShortTextField
            label="Nome"
            placeholder="Telefone"
            name="label"
            id="phoneLabelField"
            onChange={(event) => handleChange([event.target.value], ['label'])}
          />
        </section>
        <section>
          <TextAreaField
            label="Descrição"
            placeholder="Coloque aqui sua descrição"
            name="description"
            id="phoneDescriptionField"
            onChange={(event) =>
              handleChange([event.target.value], ['description'])
            }
          />
        </section>
        <section>
          <ToggleSwitch
            label="Obrigatório"
            helpHint="Caso o usuário seja obrigado a responder"
            name="isRequired"
            onChange={(event) =>
              handleChange([event.target.checked], ['isRequired'])
            }
          />
        </section>
        <section>
          <ToggleSwitch
            label="Ativar validação de telefone"
            helpHint="Formato do telefone será válidado antes da submissão"
            name="hasValidation"
            onChange={(event) =>
              handleChange([event.target.checked], ['hasValidation'])
            }
          />
        </section>
      </Form>
    </Container>
  );
};

export default TelephoneConfiguration;
