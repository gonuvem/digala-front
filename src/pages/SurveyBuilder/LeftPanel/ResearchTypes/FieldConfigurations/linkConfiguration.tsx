import React, { useRef, useEffect } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';

import ShortTextField from '../../../../../components/ResearchFields/ShortTextField';
import TextAreaField from '../../../../../components/ResearchFields/TextAreaField';
import ToggleSwitch from '../../../../../components/Common/ToggleSwitch';

import { Question } from '../../../../../store/ducks/questions/types';

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
  }, [field.id]);

  return (
    <Container>
      <Form ref={formRef} onSubmit={() => null}>
        <section>
          <ShortTextField
            label="Nome"
            placeholder="Link"
            name="label"
            id="linkLabelField"
            onChange={(event) => handleChange([event.target.value], ['label'])}
          />
        </section>
        <section>
          <TextAreaField
            label="Descrição"
            placeholder="Coloque aqui sua descrição"
            name="description"
            id="linkDescriptionField"
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
            label="Ativar validação de link"
            helpHint="O formato do link sera validado"
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
