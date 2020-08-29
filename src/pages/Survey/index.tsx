import React, { useMemo, useCallback, useRef } from 'react';
import * as Yup from 'yup';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { useParams } from 'react-router-dom';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { Helmet } from 'react-helmet';
import { FiCheck } from 'react-icons/fi';
import { toast } from 'react-toastify';

import { ISurvey } from './ISurvey';
import { Question } from '../../store/ducks/questions/types';

import Loading from '../../components/Common/LoadingAnimation';
import SolidButton from '../../components/Common/SolidButton';
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
import { SHOW_FORM } from '../../services/requests/survey';
import { SUBMIT_RESPONSE } from '../../services/requests/answers';
import getValidationErrors from '../../utils/getValidationErrors';
import formatQuestionResponse from '../../services/logic/formatQuestionResponse';
import sendAnswer from '../../services/logic/sendAnswer';
import generateSchema from '../../services/logic/generateSchema';

interface IFormData {
  [key: string]: string;
}

const Survey: React.FC = () => {
  const { id } = useParams();
  const formRef = useRef<FormHandles>(null);

  const { data: surveyData, loading: surveyLoading } = useQuery(SHOW_FORM, {
    variables: { id },
  });

  const [submitResponse, { loading: submitResponseLoading }] = useMutation(
    SUBMIT_RESPONSE,
  );

  const survey: ISurvey = useMemo(() => {
    if (!surveyLoading && surveyData.showForm.form) {
      return surveyData.showForm.form;
    }
    return {};
  }, [surveyLoading, surveyData]);

  const questions: Question[] = useMemo(() => {
    if (survey.questions) {
      return formatQuestionResponse(survey.questions);
    }
    return [];
  }, [survey.questions]);

  const schema: Yup.ObjectSchema = useMemo(() => {
    if (survey.questions) {
      return generateSchema(survey.questions);
    }
    return Yup.object().shape({});
  }, [survey.questions]);

  const onSubmit = useCallback(
    async (formData: IFormData) => {
      try {
        await schema.validate(formData, { abortEarly: false });
        await sendAnswer(id, formData, questions, submitResponse);
      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          const errors = getValidationErrors(error);
          formRef.current?.setErrors(errors);
          toast.error(
            'Verifique o formulário, existem campos obrigatórios vazio',
          );
          return;
        }

        toast.error(
          'Ocorreu um erro durante o envio dos dados, por favor tente novamente',
        );
      }
    },
    [id, questions, schema, submitResponse],
  );

  if (surveyLoading) {
    return <Loading isLoading={surveyLoading} />;
  }

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
          <Form ref={formRef} onSubmit={onSubmit}>
            {questions.map((question) => (
              <QuestionWrapper key={question.id}>
                <Field question={question} />
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
