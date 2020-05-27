import React from 'react';
import { IconType } from 'react-icons';
import { FaSlidersH } from 'react-icons/fa';

import { Container } from './styles';

interface QuestionBoxProps {
  icon: IconType;
}

const QuestionBox: React.FC<QuestionBoxProps> = ({ icon: Icon }) => (
  <Container>
    <div>
      <Icon />
    </div>
    <span>Slider</span>
  </Container>
);

export default QuestionBox;
