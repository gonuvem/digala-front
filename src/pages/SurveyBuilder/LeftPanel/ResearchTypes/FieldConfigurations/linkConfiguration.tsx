import React from 'react';
import { Form } from '@unform/web';

import ShortTextField from '../../../../../components/ResearchFields/ShortTextField';
import TextAreaField from '../../../../../components/ResearchFields/TextAreaField';
import ToggleSwitch from '../../../../../components/Common/ToggleSwitch';

import { Container } from './styles';

interface LinkFieldConfigurarionProps {
  handleChange: Function;
}

const LinkFieldConfigurarion: React.FC<LinkFieldConfigurarionProps> = ({
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
          label="Ativar validação de link"
          helpHint="O formato do link sera validado"
          name="linkValidation"
        />
      </section>
    </Form>
  </Container>
);

export default LinkFieldConfigurarion;
