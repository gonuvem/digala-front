import React from 'react';
import { Form } from '@unform/web';

import ShortTextField from '../../../../../components/ResearchFields/ShortTextField';
import TextAreaField from '../../../../../components/ResearchFields/TextAreaField';
import ToggleSwitch from '../../../../../components/Common/ToggleSwitch';
import NumberField from '../../../../../components/ResearchFields/NumericField';

import ImageOption from '../../../../../components/Common/ImageOption';

import { Container } from './styles';

interface ImagesChoiceConfigurationProps {
  handleChange: Function;
}

const ImagesChoiceConfiguration: React.FC<ImagesChoiceConfigurationProps> = ({
  handleChange,
}) => (
  <Container>
    <Form onSubmit={() => null}>
      <section>
        <ShortTextField
          label="Nome"
          placeholder="Escolha de imagens"
          name="imagesChoiceLabel"
          id="imagesChoiceLabelField"
          onChange={(event) => handleChange(event.target.value, 'label')}
        />
      </section>
      <section>
        <TextAreaField
          label="Descrição"
          placeholder="Coloque aqui sua descrição"
          name="imagesChoiceDescripion"
          id="imagesChoiceDescriptionField"
          onChange={(event) => handleChange(event.target.value, 'description')}
        />
      </section>
      <section>
        <ToggleSwitch
          label="Obrigatório"
          helpHint="Caso o usuário seja obrigado a responder"
          name="imagesChoiceRequired"
          onChange={(event) => handleChange(event.target.checked, 'required')}
        />
      </section>
      <section>
        <ToggleSwitch
          label="Escolha Múltipla"
          helpHint="Caso o usuário possa escolhar mais de uma opção"
          name="imagesChoiceMultiple"
          onChange={(event) => handleChange(event.target.checked, 'required')}
        />
      </section>
      <section>
        <NumberField
          label="Limite de Escolhas"
          name="choiceMaxAmmount"
          defaultValue={1}
          onChange={(event) =>
            parseInt(event.target.value) <= 10
              ? handleChange(event.target.value, 'choiceMaxAmmount')
              : undefined}
        />
      </section>
      <section>
        <ToggleSwitch
          label="Adicionar opção outros(a)"
          helpHint="Adicionar uma opção genérica outros"
          name="addOtherOption"
          onChange={(event) =>
            handleChange(event.target.checked, 'addOtherOption')
          }
        />
      </section>
      <section>
        <ToggleSwitch
          label="Ordem das respostas aleatória"
          helpHint="Toda vez que será gerado uma ordem aleatória para as opções"
          name="randomOrder"
          onChange={(event) =>
            handleChange(event.target.checked, 'randomOrder')
          }
        />
      </section>
      <section>
        <ImageOption />
      </section>
    </Form>
  </Container>
);

export default ImagesChoiceConfiguration;
