import React from 'react';
import { Form } from '@unform/web';

import ShortTextField from '../../components/ResearchFields/ShortTextField';
import SolidButton from '../../components/Common/SolidButton';

import {
  Container,
  ResearchBody,
  ResearchHeader,
  ResearchFooter,
} from './styles';

const Research: React.FC = () => {
  return (
    <Container>
      <ResearchBody>
        <ResearchHeader>
          <h3>Pesquisa Eleitoral de Lagoa Alegre</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
        </ResearchHeader>
        <Form onSubmit={() => null}>
          <ShortTextField
            name="fake-short-text"
            id="fake-short-text-id"
            label="Texto Curto"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
            placeholder="Insira o nome aqui"
          />
          <div id="separator" />
          <SolidButton hasShadow={false}>Enviar</SolidButton>
        </Form>
      </ResearchBody>
    </Container>
  );
};

export default Research;
