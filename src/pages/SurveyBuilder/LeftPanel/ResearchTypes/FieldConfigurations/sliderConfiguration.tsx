import React from 'react';
import { Form } from '@unform/web';

import ShortTextField from '../../../../../components/ResearchFields/ShortTextField';
import TextAreaField from '../../../../../components/ResearchFields/TextAreaField';
import ToggleSwitch from '../../../../../components/Common/ToggleSwitch';
import NumberField from '../../../../../components/ResearchFields/NumericField';

import { Container } from './styles';

interface SliderConfigurationProps {
  handleChange: Function;
}

const SliderConfiguration: React.FC<SliderConfigurationProps> = ({
  handleChange,
}) => (
  <Container>
    <Form onSubmit={() => null}>
      <section>
        <ShortTextField
          label="Nome"
          placeholder="Slider"
          name="sliderLabel"
          id="sliderLabelField"
          onChange={(event) => handleChange([event.target.value], ['label'])}
        />
      </section>
      <section>
        <TextAreaField
          label="Descrição"
          placeholder="Coloque aqui sua descrição"
          name="sliderDescripion"
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
          name="leftSubtitleLabel"
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
          name="rightSubtitleLabel"
          id="rightSubtileLabelField"
          onChange={(event) =>
            handleChange([event.target.value], ['rightSubtitle'])}
        />
      </section>
      <section>
        <ToggleSwitch
          label="Obrigatório"
          helpHint="Caso o usuário seja obrigado a responder"
          name="sliderRequired"
          onChange={(event) => {
            handleChange([event.target.checked], ['required']);
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
