import React from 'react';
import { Form } from '@unform/web';
import { Helmet } from 'react-helmet';
import { FiCheck } from 'react-icons/fi';

import ShortTextField from '../../components/ResearchFields/ShortTextField';
import SolidButton from '../../components/Common/SolidButton';

import gonuvemLogo from '../../assets/GONUVEM_HOR.png';

import {
  Container,
  SurveyBody,
  SurveyFooter,
  SurveyHeader,
  ProgressBar,
  Step,
  FormArea,
} from './styles';

const fakeResearchProps = {
  backgroundColor: '#faf0af',
  headerColor: '#f1c5c5',
  footerColor: '#8bcdcd',
  headerLogo:
    'https://www.freepnglogos.com/uploads/logo-adidas-vector-png-32.png',
};

const Survey: React.FC = () => {
  return (
    <Container>
      <Helmet>
        <style type="text/css">
          {`
            body {
              background-color: ${fakeResearchProps.backgroundColor}
            }
          `}
        </style>
      </Helmet>
      <SurveyBody>
        <SurveyHeader backgroundColor={fakeResearchProps.headerColor}>
          {fakeResearchProps && (
            <img src={fakeResearchProps.headerLogo} alt="logo da pesquisa" />
          )}
          <div>
            <h3>Pesquisa Eleitoral de Lagoa Alegre</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
          </div>
        </SurveyHeader>
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
        <SurveyFooter backgroundColor={fakeResearchProps.footerColor}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
        </SurveyFooter>
        <div id="survey-separator" />
        <img src={gonuvemLogo} alt="logo da gonuvem" />
      </SurveyBody>
    </Container>
  );
};

export default Survey;
