import React, { useState, useRef, useEffect } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';

import ShortTextField from '../../../../../components/ResearchFields/ShortTextField';
import TextAreaField from '../../../../../components/ResearchFields/TextAreaField';
import ToggleSwitch from '../../../../../components/Common/ToggleSwitch';
import NumberField from '../../../../../components/ResearchFields/NumericField';

import { Question } from '../../../../../store/ducks/questions/types';

import { Container } from './styles';

interface ShortTextConfigurarionProps {
  handleChange: Function;
  field: Question;
}

const ShortTextConfigurarion: React.FC<ShortTextConfigurarionProps> = ({
  handleChange,
  field,
}) => {
  const formRef = useRef<FormHandles>(null);
  const [limitCharacter, setLimitCharacter] = useState(
    field.hasLimitedChars || false,
  );

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
            placeholder="Texto Curto"
            name="label"
            id="shortTextLabelField"
            onChange={(event) => handleChange([event.target.value], ['label'])}
          />
        </section>
        <section>
          <TextAreaField
            label="Descrição"
            placeholder="Coloque aqui sua descrição"
            name="description"
            id="shortTextDescriptionField"
            onChange={(event) =>
              handleChange([event.target.value], ['description'])
            }
          />
        </section>
        <section>
          <ShortTextField
            label="Texto de exemplo"
            placeholder="Insira o nome aqui"
            name="placeholder"
            id="shortTextPlaceholderField"
            onChange={(event) =>
              handleChange([event.target.value], ['placeholder'])
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
            label="Limitar caracteres"
            helpHint="Limitar o número de caracteres permitido na resposta"
            name="hasLimitedChars"
            onChange={(event) => {
              setLimitCharacter(event.target.checked);
              handleChange([event.target.checked], ['hasLimitedChars']);
            }}
          />
        </section>
        {limitCharacter && (
          <section>
            <NumberField
              label="Limite de caracteres"
              id="shortTextMaxValueField"
              name="maxChars"
              onChange={(event) =>
                handleChange([parseInt(event.target.value, 10)], ['maxChars'])
              }
            />
          </section>
        )}
      </Form>
    </Container>
  );
};

export default ShortTextConfigurarion;
