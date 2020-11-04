import React, { useRef, useEffect } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';

import ShortTextField from '../../../../../components/ResearchFields/ShortTextField';
import TextAreaField from '../../../../../components/ResearchFields/TextAreaField';
import ToggleSwitch from '../../../../../components/Common/ToggleSwitch';

import { Question } from '../../../../../store/ducks/questions/types';
import { useDebouncedCallback } from '../../../../../hooks/useDebouncedCallback';

import { Container } from './styles';

interface EmailConfigutationProps {
  handleChange: Function;
  field: Question;
}

const EmailConfiguration: React.FC<EmailConfigutationProps> = ({
  handleChange,
  field,
}) => {
  const formRef = useRef<FormHandles>(null);

  useEffect(() => {
    formRef.current?.setData(field);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [field.id]);

  const onChange = useDebouncedCallback(
    (value: any[], properties: string[]) => {
      handleChange(value, properties);
    },
    500,
  );

  return (
    <Container>
      <Form initialData={field} onSubmit={() => null}>
        <section>
          <ShortTextField
            label="Nome"
            placeholder="E-mail"
            name="label"
            id="emailLabelField"
            onChange={(event) => onChange([event.target.value], ['label'])}
          />
        </section>
        <section>
          <TextAreaField
            label="Descrição"
            placeholder="Coloque aqui sua descrição"
            name="description"
            id="emailDescriptionField"
            onChange={(event) =>
              onChange([event.target.value], ['description'])
            }
          />
        </section>
        <section>
          <ToggleSwitch
            label="Obrigatório"
            helpHint="Campo é obrigatório responder"
            name="isRequired"
            onChange={(event) =>
              handleChange([event.target.checked], ['isRequired'])
            }
          />
        </section>
        <section>
          <ToggleSwitch
            label="Validação de e-mail"
            helpHint="Validar se o formato é um e-mail válido"
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

export default EmailConfiguration;
