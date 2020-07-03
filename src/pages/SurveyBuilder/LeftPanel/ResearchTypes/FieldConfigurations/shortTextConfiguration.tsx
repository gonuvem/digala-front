import React, { useState } from 'react';
import { Form } from '@unform/web';

import ShortTextField from '../../../../../components/ResearchFields/ShortTextField';
import TextAreaField from '../../../../../components/ResearchFields/TextAreaField';
import ToggleSwitch from '../../../../../components/Common/ToggleSwitch';
import NumberField from '../../../../../components/ResearchFields/NumericField';

import { Container } from './styles';

interface ShortTextConfigurarionProps {
  handleChange: Function;
}

const ShortTextConfigurarion: React.FC<ShortTextConfigurarionProps> = ({
  handleChange,
}) => {
  const [limitCharacter, setLimitCharacter] = useState(false);
  return (
    <Container>
      <Form onSubmit={() => null}>
        <section>
          <ShortTextField
            label="Nome"
            placeholder="Texto Curto"
            name="shortTextLabel"
            id="shortTextLabelField"
            onChange={(event) => handleChange(event.target.value, 'label')}
          />
        </section>
        <section>
          <TextAreaField
            label="Descrição"
            placeholder="Coloque aqui sua descrição"
            name="shortTextDescripion"
            id="shortTextDescriptionField"
            onChange={(event) =>
              handleChange(event.target.value, 'description')
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
              handleChange(event.target.value, 'shortTextPlaceholder')
            }
          />
        </section>
        <section>
          <ToggleSwitch
            label="Obrigatório"
            helpHint="Caso o usuário seja obrigado a responder"
            name="shortTextRequired"
            onChange={(event) => handleChange(event.target.checked, 'required')}
          />
        </section>
        <section>
          <ToggleSwitch
            label="Limitar caracteres"
            helpHint="Limitar o número de caracteres permitido na resposta"
            name="limitCharacter"
            onChange={(event) => {
              setLimitCharacter(event.target.checked);
              handleChange(event.target.checked, 'limitCharacter');
            }}
          />
        </section>
        {limitCharacter && (
          <section>
            <NumberField
              label="Limite de caracteres"
              name="shortTextMaxValue"
              onChange={(event) =>
                handleChange(event.target.value, 'shortTextMaxValue')
              }
            />
          </section>
        )}
      </Form>
    </Container>
  );
};

export default ShortTextConfigurarion;
