import React, { useRef, useEffect } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';

import ShortTextField from '../../../../../components/ResearchFields/ShortTextField';
import TextAreaField from '../../../../../components/ResearchFields/TextAreaField';
import ToggleSwitch from '../../../../../components/Common/ToggleSwitch';

import { Question } from '../../../../../store/ducks/questions/types';
import { useDebouncedCallback } from '../../../../../hooks/useDebouncedCallback';

import { Container } from './styles';

interface LinkFieldConfigurarionProps {
  handleChange: Function;
  field: Question;
}

const LinkFieldConfigurarion: React.FC<LinkFieldConfigurarionProps> = ({
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
      <Form ref={formRef} onSubmit={() => null}>
        <section>
          <ShortTextField
            label="Nome"
            placeholder="Link"
            name="label"
            id="linkLabelField"
            onChange={(event) => onChange([event.target.value], ['label'])}
          />
        </section>
        <section>
          <TextAreaField
            label="Descrição"
            placeholder="Coloque aqui sua descrição"
            name="description"
            id="linkDescriptionField"
            onChange={(event) =>
              onChange([event.target.value], ['description'])
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
            label="Ativar validação de link"
            helpHint="O formato do link será validado"
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

export default LinkFieldConfigurarion;
