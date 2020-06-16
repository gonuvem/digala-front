import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useQuery } from '@apollo/react-hooks';

import { Container, Panels } from './styles';

import LeftPanel from './LeftPanel';
import Preview from './Preview';
import Pagination from './Pagination';

import * as QuestionsActions from '../../store/ducks/questions/actions';
import { LIST_OWN_QUESTIONS } from '../../services/requests/questions';

const SurveyBuilder: React.FC = () => {
  const dispatch = useDispatch();

  const { data: questionsList } = useQuery(LIST_OWN_QUESTIONS, {
    variables: { form: '5ede7552b3c9d80017446c40' },
  });

  useEffect(() => {
    if (questionsList?.data?.error !== null) {
      dispatch(QuestionsActions.loadQuestions([]));
      return;
    }
    const questions = questionsList?.data?.questions;
    dispatch(QuestionsActions.loadQuestions(questions));
  }, [questionsList, dispatch]);

  return (
    <Container>
      <Panels>
        <LeftPanel />
        <Preview />
        <Pagination />
      </Panels>
    </Container>
  );
};

export default SurveyBuilder;
