import React, { useMemo, useRef, useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { useParams } from 'react-router-dom';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { Helmet } from 'react-helmet';
import { FiCheck } from 'react-icons/fi';

import { Question } from '../../store/ducks/questions/types';

import Loading from '../../components/Common/LoadingAnimation';
import Field from '../../components/Common/Field';

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
import { READ_RESPONSE } from '../../services/requests/survey';
import formatQuestionResponse from '../../services/logic/formatQuestionResponse';

interface IFormData {
  [key: string]: string;
}

const Survey: React.FC = () => {
  const { id } = useParams();
  const formRef = useRef<FormHandles>(null);

  const { data: responseData, loading: surveyLoading } = useQuery(
    READ_RESPONSE,
    {
      variables: { id },
    },
  );

  const response = useMemo(() => {
    if (!surveyLoading && responseData.data.response) {
      return responseData.data.response;
    }
    return {};
  }, [surveyLoading, responseData]);

  const questions: Question[] = useMemo(() => {
    if (response.form && response.form.questions) {
      return formatQuestionResponse(response.form.questions);
    }
    return [];
  }, [response]);

  useEffect(() => {
    if (response.answersAndQuestions) {
      const data = {};
      response.answersAndQuestions.forEach((resp: any) => {
        Object.assign(data, {
          [resp.question._id]: resp.answer[resp.question.type.alias],
        });
      });
      console.log('Initial data: ', data);
      formRef.current?.setData(data);
    }
  }, [response]);

  if (surveyLoading) {
    return <Loading isLoading={surveyLoading} />;
  }

  return (
    <Container>
      <Helmet>
        <style type="text/css">
          {`
            body {
              background-color: ${
                response.form.style.background || Colors.white
              }
            }
          `}
        </style>
      </Helmet>
      <SurveyBody>
        <SurveyHeader
          backgroundColor={
            response.form.style.headerBackground || Colors.smokeWhite
          }
        >
          {response.form.style.hasLogoInHeader && (
            <img src={response.form.style.logo} alt="logo da pesquisa" />
          )}
          <div>
            <h3>{response.form.config.name}</h3>
            {response.form.config.description && (
              <p>{response.form.config.description}</p>
            )}
          </div>
        </SurveyHeader>
        <FormArea>
          {response.form.config.canDisplayProgressBar && (
            <div id="progress-wrapper">
              <ProgressBar pagesCount={response.form.numPages}>
                <div>
                  {Array.from(
                    { length: response.form.numPages },
                    (_, number) => (
                      <Step filled>
                        <p>{number + 1}</p>
                      </Step>
                    ),
                  )}
                  <Step>
                    <FiCheck size={16} />
                  </Step>
                </div>
              </ProgressBar>
            </div>
          )}
          <Form ref={formRef} onSubmit={(data) => console.log(data)}>
            {questions.map((question) => (
              <QuestionWrapper key={question.id}>
                <Field question={question} />
              </QuestionWrapper>
            ))}
            <button type="submit">Enviar</button>
            <div id="form-separator" />
          </Form>
        </FormArea>
        {response.form.style.footerText && (
          <SurveyFooter
            backgroundColor={
              response.form.style.footerBackground || Colors.white
            }
          >
            <p>{response.form.style.footerText}</p>
          </SurveyFooter>
        )}
        <div id="survey-separator" />
        <a href="https://www.gonuvem.com.br" target="_blank" rel="noreferrer">
          <img src={gonuvemLogo} alt="logo da gonuvem" />
        </a>
      </SurveyBody>
    </Container>
  );
};

export default Survey;
