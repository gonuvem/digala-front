import React from 'react';
import { Form } from '@unform/web';
import { FiCheck } from 'react-icons/fi';

import ShortTextField from '../../components/ResearchFields/ShortTextField';
import SolidButton from '../../components/Common/SolidButton';

import gonuvemLogo from '../../assets/GONUVEM_HOR.png';

import {
  Container,
  ResearchBody,
  ResearchHeader,
  ResearchFooter,
  ProgressBar,
  Step,
  FormArea,
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
        <FormArea>
          <div id="progress-wrapper">
            <ProgressBar pagesCount={2}>
              <div>
                <Step filled>
                  <p>1</p>
                </Step>
                <Step>
                  <p>1</p>
                </Step>
                <Step>
                  <FiCheck size={16} />
                </Step>
              </div>
            </ProgressBar>
          </div>
          <Form onSubmit={() => null}>
            <ShortTextField
              name="fake-short-text"
              id="fake-short-text-id"
              label="Texto Curto"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
              placeholder="Insira o nome aqui"
            />
            <div id="form-separator" />
            <SolidButton hasShadow={false}>Enviar</SolidButton>
          </Form>
        </FormArea>
        <ResearchFooter>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
        </ResearchFooter>
        <div id="research-separator" />
        <img src={gonuvemLogo} alt="logo da gonuvem" />
      </ResearchBody>
    </Container>
  );
};

export default Research;
