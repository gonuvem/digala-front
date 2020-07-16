import React, { useState } from 'react';
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
  const [limitCharacter, setLimitCharacter] = useState(
    field.limitCharacter || false,
  );
  return (
    <Container>
      <Form initialData={field} onSubmit={() => null}>
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
            name="shortTextPlaceholder"
            id="shortTextPlaceholderField"
            onChange={(event) =>
              handleChange([event.target.value], ['shortTextPlaceholder'])
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
            label="Limitar caracteres"
            helpHint="Limitar o número de caracteres permitido na resposta"
            name="limitCharacter"
            onChange={(event) => {
              setLimitCharacter(event.target.checked);
              handleChange([event.target.checked], ['limitCharacter']);
            }}
          />
        </section>
        {limitCharacter && (
          <section>
            <NumberField
              label="Limite de caracteres"
              id="shortTextMaxValueField"
              name="shortTextMaxValue"
              onChange={(event) =>
                handleChange(
                  [parseInt(event.target.value, 10)],
                  ['shortTextMaxValue'],
                )
              }
            />
          </section>
        )}
      </Form>
    </Container>
  );
};

export default ShortTextConfigurarion;
