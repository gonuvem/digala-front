import React, { useMemo } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { useParams } from 'react-router-dom';
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

import Colors from '../../utils/colors';

import { SHOW_FORM } from '../../services/requests/survey';

interface ISurvey {
  _id: string;
  config: {
    name: string;
    description?: string;
    beginDate?: Date;
    endDate?: Date;
    hasLimitedResponses: boolean;
    maxResponses?: number;
    isTotemMode: boolean;
    canDisplayProgressBar: boolean;
    progressBarType?: string;
    canAllowMultipleSubmissions: boolean;
  };
  style: {
    background?: string;
    logo?: string;
    headerText?: string;
    hasLogoInHeader: boolean;
    headerBackground?: string;
    footerText?: string;
    footerBackground?: string;
  };
  numResponses?: number;
}

const Survey: React.FC = () => {
  const { id } = useParams();

  const { data: surveyData, loading: surveyLoading } = useQuery(SHOW_FORM, {
    variables: { id },
  });

  const survey: ISurvey = useMemo(() => {
    if (!surveyLoading && surveyData.showForm.form) {
      return surveyData.showForm.form;
    }
    return {};
  }, [surveyLoading, surveyData]);

  if (surveyLoading) {
    return <h1>Loading survey...</h1>;
  }

  console.log('Survey Data >> ', survey);

  return (
    <Container>
      <Helmet>
        <style type="text/css">
          {`
            body {
              background-color: ${survey.style.background || Colors.white}
            }
          `}
        </style>
      </Helmet>
      <SurveyBody>
        <SurveyHeader
          backgroundColor={survey.style.headerBackground || Colors.smokeWhite}
        >
          {survey.style.hasLogoInHeader && (
            <img src={survey.style.logo} alt="logo da pesquisa" />
          )}
          <div>
            <h3>{survey.config.name}</h3>
            {survey.config.description && <p>{survey.config.description}</p>}
          </div>
        </SurveyHeader>
        <FormArea>
          {survey.config.canDisplayProgressBar && (
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
          )}
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
        {survey.style.footerText && (
          <SurveyFooter
            backgroundColor={survey.style.footerBackground || Colors.white}
          >
            <p>{survey.style.footerText}</p>
          </SurveyFooter>
        )}
        <div id="survey-separator" />
        <img src={gonuvemLogo} alt="logo da gonuvem" />
      </SurveyBody>
    </Container>
  );
};

export default Survey;
