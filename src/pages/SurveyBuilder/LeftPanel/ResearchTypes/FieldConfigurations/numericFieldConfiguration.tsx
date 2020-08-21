import React, { useState } from 'react';
import { Form } from '@unform/web';

import ShortTextField from '../../../../../components/ResearchFields/ShortTextField';
import TextAreaField from '../../../../../components/ResearchFields/TextAreaField';
import ToggleSwitch from '../../../../../components/Common/ToggleSwitch';
import NumberField from '../../../../../components/ResearchFields/NumericField';

import { Question } from '../../../../../store/ducks/questions/types';

import { Container } from './styles';

interface NumericFieldConfigurationProps {
  handleChange: Function;
  field: Question;
}

const NumericFieldConfiguration: React.FC<NumericFieldConfigurationProps> = ({
  handleChange,
  field,
}) => {
  const [showLimiters, setShowLimiters] = useState(
    field?.hasMaxMinLimit || false,
  );

  return (
    <Container>
      <Form initialData={field} onSubmit={() => null}>
        <section>
          <ShortTextField
            label="Nome"
            placeholder="Número"
            name="label"
            id="numericLabelField"
            onChange={(event) => handleChange([event.target.value], ['label'])}
          />
        </section>
        <section>
          <TextAreaField
            label="Descrição"
            placeholder="Coloque aqui sua descrição"
            name="description"
            id="numericDescriptionField"
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
            label="Limitar máximo e mínimo"
            helpHint="Limitar valores máximos e minímos"
            name="hasMaxMinLimit"
            onChange={(event) => {
              handleChange([event.target.checked], ['hasMaxMinLimit']);
              setShowLimiters(event.target.checked);
            }}
          />
        </section>
        {showLimiters && (
          <>
            <section>
              <NumberField
                id="minValueField"
                label="Número minímo"
                name="minValue"
                onChange={(event) =>
                  handleChange([event.target.value], ['minValue'])
                }
              />
            </section>
            <section>
              <NumberField
                label="Número máximo"
                id="maxValueField"
                name="maxValue"
                onChange={(event) =>
                  handleChange([event.target.value], ['maxValue'])
                }
              />
            </section>
          </>
        )}
        <section>
          <NumberField
            label="Valor do incrementador"
            id="stepSizeField"
            name="incValue"
            onChange={(event) =>
              handleChange([parseInt(event.target.value, 10)], ['incValue'])
            }
          />
        </section>
      </Form>
    </Container>
  );
};

export default NumericFieldConfiguration;
