import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { FaSlidersH } from 'react-icons/fa';

import QuestionBox from '../../../../components/SurveyBuilder/QuestionBox';

import { QuestionsContainer } from './styles';
import * as QuestionsActions from '../../../../store/ducks/questions/actions';

const ResearchTypes: React.FC = () => {
  const dispatch = useDispatch();

  const addFieldToForm = useCallback(() => {
    dispatch(
      QuestionsActions.addQuestion({
        alias: 'Slider',
      }),
    );
  }, [dispatch]);

  return (
    <div>
      <h5>Perguntas Básicas</h5>
      <QuestionsContainer>
        <QuestionBox
          name="Slider"
          description="Lorem ipsum sit dolor amet"
          image="https://media.giphy.com/media/h1zypyYAgZE96sCNuV/giphy.gif"
          icon={FaSlidersH}
          onClick={addFieldToForm}
        />
        <QuestionBox
          name="Dropdown"
          description="Lorem ipsum sit dolor amet"
          image="https://media.giphy.com/media/h1zypyYAgZE96sCNuV/giphy.gif"
          icon={FaSlidersH}
        />
        <QuestionBox
          name="Escolha Única"
          description="Lorem ipsum sit dolor amet"
          image="https://media.giphy.com/media/h1zypyYAgZE96sCNuV/giphy.gif"
          icon={FaSlidersH}
        />
      </QuestionsContainer>
    </div>
  );
};

export default ResearchTypes;
