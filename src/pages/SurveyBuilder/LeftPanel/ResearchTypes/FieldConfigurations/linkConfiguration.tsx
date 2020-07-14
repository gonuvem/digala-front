import React from 'react';
import { Form } from '@unform/web';

import ShortTextField from '../../../../../components/ResearchFields/ShortTextField';
import TextAreaField from '../../../../../components/ResearchFields/TextAreaField';
import ToggleSwitch from '../../../../../components/Common/ToggleSwitch';

import { Question } from '../../../../../store/ducks/questions/types';

import { Container } from './styles';

interface LinkFieldConfigurarionProps {
  handleChange: Function;
  field: Question;
}

const LinkFieldConfigurarion: React.FC<LinkFieldConfigurarionProps> = ({
  handleChange,
  field,
}) => (
  <Container>
    <Form initialData={field} onSubmit={() => null}>
      <section>
        <ShortTextField
          label="Nome"
          placeholder="Link"
          name="label"
          id="linkLabelField"
          onChange={(event) => handleChange([event.target.value], ['label'])}
        />
      </section>
      <section>
        <TextAreaField
          label="Descrição"
          placeholder="Coloque aqui sua descrição"
          name="description"
          id="linkDescriptionField"
          onChange={(event) =>
            handleChange([event.target.value], ['description'])
          }
        />
      </section>
      <section>
        <ToggleSwitch
          label="Obrigatório"
          helpHint="Caso o usuário seja obrigado a responder"
          name="required"
          onChange={(event) =>
            handleChange([event.target.checked], ['required'])
          }
        />
      </section>
      <section>
        <ToggleSwitch
          label="Ativar validação de link"
          helpHint="O formato do link sera validado"
          name="validatePattern"
          onChange={(event) =>
            handleChange([event.target.checked], ['validatePattern'])
          }
        />
      </section>
    </Form>
  </Container>
);

export default LinkFieldConfigurarion;
