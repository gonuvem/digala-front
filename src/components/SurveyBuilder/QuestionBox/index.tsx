import React from 'react';
import { IconType } from 'react-icons';

import { Container, Tooltip } from './styles';

interface QuestionBoxProps {
  icon: IconType;
  name: string;
  description: string;
  image: string;
}

const QuestionBox: React.FC<QuestionBoxProps> = ({
  icon: Icon,
  name,
  description,
  image,
}) => (
  <>
    <Container data-tip data-for={`question-${name}`}>
      <Icon size={20} />
      <span>{name}</span>
    </Container>
    <Tooltip id={`question-${name}`} effect="solid" place="top" type="light">
      <img alt="question-helper-video" src={image} />
      <h3>{name}</h3>
      <p>{description}</p>
    </Tooltip>
  </>
);

export default QuestionBox;
