import React, { useEffect, useMemo, useState } from 'react';
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

  const { data: form, loading: formLoading } = useQuery(READ_FORM, {
    variables: { id },
  });

  const { data: questionsList } = useQuery(LIST_OWN_QUESTIONS, {
    variables: { form: id, perPage: 100 },
  });

  const { data: questionsTypesData } = useQuery(LIST_QUESTION_TYPES, {
    variables: { perPage: 20 },
  });

  const formData: any = useMemo(() => {
    if (!formLoading && form?.data) {
      return form;
    }
    return null;
  }, [formLoading, form]);

  useEffect(() => {
    if (formData) {
      loadOwnForm(dispatch, formData);
    }
  }, [formData, dispatch]);

  useEffect(() => {
    if (questionsList?.data?.error !== null) {
      dispatch(QuestionsActions.loadQuestions([]));
      return;
    }
    const questions = questionsList?.data?.questions;
    const questionsFormated = [];
    for (let i = 0; i < questions.length; i++) {
      const newConfig = questions[i].config;
      Object.keys(newConfig).forEach(
        (key) => newConfig[key] == null && delete newConfig[key],
      );

      const newQuestion = {
        ...newConfig[questions[i]?.type?.alias],
        label: newConfig?.name,
        id: questions[i]?._id,
        alias: questions[i]?.type?.alias,
        name: newConfig?.name,
        isRequired: newConfig?.isRequired,
        description: newConfig?.description,
      };
      questionsFormated.push(newQuestion);
    }
    // console.log(questionsFormated);
    dispatch(QuestionsActions.loadQuestions(questionsFormated));
  }, [questionsList, dispatch]);

  const questionTypes = useMemo(
    () =>
      questionsTypesData?.data?.error === null
        ? questionsTypesData?.data?.types
        : [],
    [questionsTypesData],
  );

  return !formLoading ? (
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
  ) : (
    <h3>Carregando</h3>
  );
};

export default SurveyBuilder;
