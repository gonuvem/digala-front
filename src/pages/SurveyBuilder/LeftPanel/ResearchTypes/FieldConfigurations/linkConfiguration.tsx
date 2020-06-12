import React from 'react';
import { Form } from '@unform/web';

import ShortTextField from '../../../../../components/ResearchFields/ShortTextField';
import TextAreaField from '../../../../../components/ResearchFields/TextAreaField';
import ToggleSwitch from '../../../../../components/Common/ToggleSwitch';

import { Container } from './styles';

const LinkFieldConfigurarion: React.FC = () => (
  <Container>
    <Form onSubmit={() => null}>
      <section>
        <ShortTextField
          label="Nome"
          placeholder="Link"
          name="linkName"
          id="linkNameField"
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
