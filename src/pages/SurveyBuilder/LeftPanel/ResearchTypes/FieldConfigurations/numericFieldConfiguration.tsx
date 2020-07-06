import React, { useState } from 'react';
import { Form } from '@unform/web';

import ShortTextField from '../../../../../components/ResearchFields/ShortTextField';
import TextAreaField from '../../../../../components/ResearchFields/TextAreaField';
import ToggleSwitch from '../../../../../components/Common/ToggleSwitch';
import NumberField from '../../../../../components/ResearchFields/NumericField';

import { Container } from './styles';

interface NumericFieldConfigurationProps {
  handleChange: Function;
}

const NumericFieldConfiguration: React.FC<NumericFieldConfigurationProps> = ({
  handleChange,
}) => {
  const [showLimiters, setShowLimiters] = useState(false);

  return (
    <Container>
      <Form onSubmit={() => null}>
        <section>
          <ShortTextField
            label="Nome"
            placeholder="Número"
            name="numericLabel"
            id="numericLabelField"
            onChange={(event) => handleChange(event.target.value, 'label')}
          />
        </section>
        <section>
          <TextAreaField
            label="Descrição"
            placeholder="Coloque aqui sua descrição"
            name="numericDescripion"
            id="numericDescriptionField"
            onChange={(event) =>
              handleChange(event.target.value, 'description')
            }
          />
        </section>
        <section>
          <ToggleSwitch
            label="Obrigatório"
            helpHint="Caso o usuário seja obrigado a responder"
            name="numericRequired"
            onChange={(event) => handleChange(event.target.checked, 'required')}
          />
        </section>
        <section>
          <ToggleSwitch
            label="Limitar máximo e mínimo"
            helpHint="Limitar valores máximos e minímos"
            name="limitMaxMin"
            onChange={(event) => {
              handleChange(event.target.checked, 'limitMaxMin');
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
                defaultValue={1}
                onChange={(event) =>
                  handleChange(event.target.value, 'minValue')
                }
              />
            </section>
            <section>
              <NumberField
                label="Número máximo"
                id="maxValueField"
                name="maxValue"
                defaultValue={10}
                onChange={(event) =>
                  handleChange(event.target.value, 'maxValue')}
              />
            </section>
          </>
        )}
        <section>
          <NumberField
            label="Valor do incrementador"
            id="stepSizeField"
            name="stepSize"
            defaultValue={1}
            onChange={(event) =>
              handleChange(parseInt(event.target.value, 10), 'stepSize')
            }
          />
        </section>
      </Form>
    </Container>
  );
};

export default NumericFieldConfiguration;