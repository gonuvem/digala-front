import React, { useRef, useEffect } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';

import ShortTextField from '../../../../../components/ResearchFields/ShortTextField';
import TextAreaField from '../../../../../components/ResearchFields/TextAreaField';
import ToggleSwitch from '../../../../../components/Common/ToggleSwitch';
import NumberField from '../../../../../components/ResearchFields/NumericField';

import { Question } from '../../../../../store/ducks/questions/types';

import { Container } from './styles';

interface SliderConfigurationProps {
  handleChange: Function;
  field: Question;
}

const SliderConfiguration: React.FC<SliderConfigurationProps> = ({
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
            placeholder="Slider"
            name="label"
            id="sliderLabelField"
            onChange={(event) => handleChange([event.target.value], ['label'])}
          />
        </section>
        <section>
          <TextAreaField
            label="Descrição"
            placeholder="Coloque aqui sua descrição"
            name="description"
            id="sliderDescriptionField"
            onChange={(event) =>
              handleChange([event.target.value], ['description'])
            }
          />
        </section>
        <section>
          <NumberField
            label="Limite inferior"
            id="lowerLimitField"
            defaultValue={0}
            name="minValue"
            onChange={(event) =>
              handleChange([event.target.value], ['minValue'])
            }
          />
        </section>
        <section>
          <ShortTextField
            label="Legenda ao lado esquerdo"
            placeholder="Legenda esquerda"
            name="minLabel"
            id="leftSubtitleLabelField"
            onChange={(event) =>
              handleChange([event.target.value], ['minLabel'])
            }
          />
        </section>
        <section>
          <NumberField
            label="Limite superior"
            id="upperLimitField"
            defaultValue={10}
            name="maxValue"
            onChange={(event) =>
              handleChange([event.target.value], ['maxValue'])
            }
          />
        </section>
        <section>
          <ShortTextField
            label="Legenda ao lado direito"
            placeholder="Legenda direita"
            name="maxLabel"
            id="rightSubtileLabelField"
            onChange={(event) =>
              handleChange([event.target.value], ['maxLabel'])
            }
          />
        </section>
        <section>
          <ToggleSwitch
            label="Obrigatório"
            helpHint="Caso o usuário seja obrigado a responder"
            name="isRequired"
            onChange={(event) => {
              handleChange([event.target.checked], ['isRequired']);
            }}
          />
        </section>
        <section>
          <ToggleSwitch
            label="Ocultar valor no seletor"
            helpHint="Quando ativado o valor selecionado não é exibido"
            name="canHideValue"
            onChange={(event) => {
              handleChange([event.target.checked], ['canHideValue']);
            }}
          />
        </section>
      </Form>
    </Container>
  );
};

export default SliderConfiguration;
