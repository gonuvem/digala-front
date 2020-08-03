import React, { useMemo, useCallback } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { useParams } from 'react-router-dom';
import { Form } from '@unform/web';
import { Helmet } from 'react-helmet';
import { FiCheck } from 'react-icons/fi';

import { ISurvey } from './ISurvey';

import SolidButton from '../../components/Common/SolidButton';
import Question from './question';

import gonuvemLogo from '../../assets/GONUVEM_HOR.png';

import {
  Container,
  SurveyBody,
  SurveyFooter,
  SurveyHeader,
  ProgressBar,
  Step,
  FormArea,
  QuestionWrapper,
} from './styles';

import Colors from '../../utils/colors';
import { SHOW_FORM } from '../../services/requests/survey';

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

  const onSubmit = useCallback((formData) => {
    console.log('Form Data >> ', formData);
  }, []);

  if (surveyLoading) {
    return <h1>Loading survey...</h1>;
  }

  console.log('Survey >> ', survey);

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
              <ProgressBar pagesCount={survey.numPages}>
                <div>
                  {Array.from({ length: survey.numPages }, (_, number) => (
                    <Step filled>
                      <p>{number + 1}</p>
                    </Step>
                  ))}
                  <Step>
                    <FiCheck size={16} />
                  </Step>
                </div>
              </ProgressBar>
            </div>
          )}
          <Form onSubmit={onSubmit}>
            {survey.questions.map((question) => (
              <QuestionWrapper>
                <Question question={question} />
              </QuestionWrapper>
            ))}
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
