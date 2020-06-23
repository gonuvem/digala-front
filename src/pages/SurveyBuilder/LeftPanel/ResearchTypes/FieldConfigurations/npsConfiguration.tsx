import React from 'react';
import { Form } from '@unform/web';

import ShortTextField from '../../../../../components/ResearchFields/ShortTextField';
import TextAreaField from '../../../../../components/ResearchFields/TextAreaField';
import ToggleSwitch from '../../../../../components/Common/ToggleSwitch';
import NumberField from '../../../../../components/ResearchFields/NumericField';

import { Container } from './styles';

interface NpsConfigurationProps {
  handleChange: Function;
}

const NpsConfiguration: React.FC<NpsConfigurationProps> = ({
  handleChange,
}) => (
  <Container>
    <Form onSubmit={() => null}>
      <section>
        <ShortTextField
          label="Nome"
          placeholder="Link"
          name="linkLabel"
          id="linkLabelField"
          onChange={(event) => handleChange(event.target.value, 'label')}
        />
      </section>
      <section>
        <TextAreaField
          label="Descrição"
          placeholder="Coloque aqui sua descrição"
          name="linkDescripion"
          id="linkDescriptionField"
          onChange={(event) => handleChange(event.target.value, 'description')}
        />
      </section>
      <section>
        <ToggleSwitch
          label="Obrigatório"
          helpHint="Caso o usuário seja obrigado a responder"
          name="linkRequired"
        />
      </section>
      <section>
        <ToggleSwitch
          label="Mostrar Legendas"
          helpHint="Exibir legendas em cada extremidade"
          name="linkShowSubtitle"
        />
      </section>
      <section>
        <ShortTextField
          label="Legenda ao lado esquerdo"
          placeholder="Pouco provável"
          name="linkLeftSubtitle"
          id="linkLeftSubtitleField"
          onChange={(event) => handleChange(event.target.value, 'label')}
        />
      </section>
      <section>
        <ShortTextField
          label="Legenda ao lado direito "
          placeholder="Muito provável"
          name="linkRightSubtitle"
          id="linkRightSubtitleField"
          onChange={(event) => handleChange(event.target.value, 'label')}
        />
      </section>
      <section>
        <ToggleSwitch
          label="Começar no zero"
          helpHint="Caso seja ativado o limite inferior será 0"
          name="linkStartZero"
        />
      </section>
      <section>
        <NumberField
          label="Escala"
          name="scale"
          measurement="unidades"
          onChange={(event) => handleChange(event.target.value)}
        />
      </section>
    </Form>
  </Container>
);

export default NpsConfiguration;
