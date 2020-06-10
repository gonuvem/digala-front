import React, { useCallback, useState } from 'react';
import ReactDOM from 'react-dom';

import { Container, Rect } from './styles';
import Draggable from './Draggable';

interface SortAnswersProps {
  label: string;
  description?: string;
}

const SortAnswers: React.FC<SortAnswersProps> = ({ label, description }) => {
  return (
    <Container>
      <label>
        {label}
        {description && <p>{description}</p>}
        {/* {choices.map((choice) => (
          <Option id={uuid()} fieldName={name} label={choice} />
        ))} */}
        <div>
          <Draggable>
            <Rect />
          </Draggable>
        </div>
      </label>
    </Container>
  );
};

export default SortAnswers;
