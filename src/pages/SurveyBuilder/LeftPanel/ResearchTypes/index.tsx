import React from 'react';

import { FaSlidersH } from 'react-icons/fa';

import QuestionBox from '../../../../components/Common/QuestionBox';

import { QuestionsContainer } from './styles';

const ResearchTypes: React.FC = () => (
  <div>
    <h5>Perguntas Básicas</h5>
    <QuestionsContainer>
      <QuestionBox
        name="Slider"
        description="Lorem ipsum sit dolor amet"
        image="https://media.giphy.com/media/h1zypyYAgZE96sCNuV/giphy.gif"
        icon={FaSlidersH}
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

export default ResearchTypes;
