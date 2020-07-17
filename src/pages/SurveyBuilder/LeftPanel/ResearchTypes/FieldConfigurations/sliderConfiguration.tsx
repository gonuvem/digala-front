import React from 'react';
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
}) => (
  <Container>
    <Form initialData={field} onSubmit={() => null}>
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
          name="lowerLimit"
          onChange={(event) =>
            handleChange([event.target.value], ['lowerLimit'])
          }
        />
      </section>
      <section>
        <ShortTextField
          label="Legenda ao lado esquerdo"
          placeholder="Legenda esquerda"
          name="leftSubtitle"
          id="leftSubtitleLabelField"
          onChange={(event) =>
            handleChange([event.target.value], ['leftSubtitle'])
          }
        />
      </section>
      <section>
        <NumberField
          label="Limite superior"
          id="upperLimitField"
          name="upperLimit"
          onChange={(event) =>
            handleChange([event.target.value], ['upperLimit'])
          }
        />
      </section>
      <section>
        <ShortTextField
          label="Legenda ao lado direito"
          placeholder="Legenda direita"
          name="rightSubtitle"
          id="rightSubtileLabelField"
          onChange={(event) =>
            handleChange([event.target.value], ['rightSubtitle'])
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
          name="linkRequired"
        />
      </section>
    </Form>
  </Container>
);

export default SliderConfiguration;
