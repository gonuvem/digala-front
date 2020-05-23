import React from 'react';
import { FaSlidersH } from 'react-icons/fa';

import { Container } from './styles';

const QuestionBox: React.FC = () => (
  <Container>
    <div>
      <FaSlidersH size={24} />
    </div>
    <span>Slider</span>
  </Container>
);

export default QuestionBox;
