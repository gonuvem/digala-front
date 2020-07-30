import React, { useEffect, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { useQuery } from '@apollo/react-hooks';
import { useParams } from 'react-router-dom';

import Layout from '../../layout';
import PageHeader from '../../components/Common/Header';

import { Container, Panels } from './styles';

import LeftPanel from './LeftPanel';
import Preview from './Preview';
import Pagination from './Pagination';

import * as QuestionsActions from '../../store/ducks/questions/actions';
import { READ_FORM } from '../../services/requests/forms';
import {
  LIST_OWN_QUESTIONS,
  LIST_QUESTION_TYPES,
} from '../../services/requests/questions';
import loadOwnForm from '../../services/logic/loadOwnForm';

const SurveyBuilder: React.FC = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const { data: formData } = useQuery(READ_FORM, { variables: { id } });

  const { data: questionsList } = useQuery(LIST_OWN_QUESTIONS, {
    variables: { form: id },
  });

  const { data: questionsTypesData } = useQuery(LIST_QUESTION_TYPES, {
    variables: { perPage: 20 },
  });

  useEffect(() => {
    if (
      formData?.data?.form?.config?.beginDate &&
      formData?.data?.form?.config?.endDate
    ) {
      const year = formData?.data?.form?.config?.beginDate.substr(0, 4);
      const month = formData?.data?.form?.config?.beginDate.substr(5, 2);
      const day = formData?.data?.form?.config?.beginDate.substr(8, 2);
      const beginDate = new Date(year, month - 1, day);
      formData.data.form.config.beginDate = beginDate;

      const year2 = formData?.data?.form?.config?.endDate.substr(0, 4);
      const month2 = formData?.data?.form?.config?.endDate.substr(5, 2);
      const day2 = formData?.data?.form?.config?.endDate.substr(8, 2);
      const endDate = new Date(year2, month2 - 1, day2);
      formData.data.form.config.endDate = endDate;

      formData.data.form.config.researchExpireDate = [beginDate, endDate];
    }

    loadOwnForm(dispatch, formData);
  }, [formData, dispatch]);

  useEffect(() => {
    if (questionsList?.data?.error !== null) {
      dispatch(QuestionsActions.loadQuestions([]));
      return;
    }
    const questions = questionsList?.data?.questions;
    dispatch(QuestionsActions.loadQuestions(questions));
  }, [questionsList, dispatch]);

  const questionTypes = useMemo(
    () =>
      questionsTypesData?.data?.error === null
        ? questionsTypesData?.data?.types
        : [],
    [questionsTypesData],
  );

  return (
    <>
      <PageHeader />
      <Layout>
        <Container>
          <Panels>
            <LeftPanel questionsTypes={questionTypes} />
            <Preview questionsTypes={questionTypes} />
            <Pagination />
          </Panels>
        </Container>
      </Layout>
    </>
  );
};

export default SurveyBuilder;
