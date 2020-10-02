import React, { useRef, useCallback } from 'react';
import { FiChevronDown, FiChevronUp, FiTrash } from 'react-icons/fi';
import { TiDelete } from 'react-icons/ti';
import { useDispatch } from 'react-redux';

import Field from '../../Common/Field';

import { Question } from '../../../store/ducks/questions/types';
import * as QuestionActions from '../../../store/ducks/questions/actions';

import { Container, LeftController, RightController } from './styles';

interface FieldWrapperProps {
  field: Question;
  fieldIndex: number;
  isSelected: boolean;
  handleFocusQuestion(questionId: string): void;
  handleChangePosition(direction: 'up' | 'down', fieldIndex: number): void;
  toggleModal(): void;
}

const FieldWrapper: React.FC<FieldWrapperProps> = ({
  field,
  isSelected,
  handleFocusQuestion,
  handleChangePosition,
  toggleModal,
  fieldIndex,
}) => {
  const fieldWrapperRef = useRef(null);
  const dispatch = useDispatch();

  const handleContainerClick = useCallback(() => {
    if (isSelected) {
      dispatch(QuestionActions.clearFocusedQuestion());
    } else {
      handleFocusQuestion(field.id);
    }
  }, [dispatch, field.id, handleFocusQuestion, isSelected]);

  const handleEscapeKeyPress = useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (event.keyCode === 27) {
        console.log('Pressed esc...');
      }
    },
    [],
  );

  const handleCloseController = useCallback(() => {
    dispatch(QuestionActions.clearFocusedQuestion());
  }, [dispatch]);

  return (
    <Container ref={fieldWrapperRef} key={field.id} selected={isSelected}>
      <div
        onKeyPress={handleEscapeKeyPress}
        tabIndex={fieldIndex}
        role="button"
        onClick={handleContainerClick}
      >
        <Field question={field} />
      </div>
      {isSelected && (
        <>
          <LeftController>
            <div>
              <button
                onClick={() => handleChangePosition('up', fieldIndex)}
                type="button"
              >
                <FiChevronUp size={24} />
              </button>
              <button
                onClick={() => handleChangePosition('down', fieldIndex)}
                type="button"
              >
                <FiChevronDown size={24} />
              </button>
            </div>
            <button onClick={toggleModal} type="button" id="delete-button">
              <FiTrash size={24} />
            </button>
          </LeftController>
          <RightController>
            <button onClick={handleCloseController} type="button">
              <TiDelete size={32} />
            </button>
          </RightController>
        </>
      )}
    </Container>
  );
};

export default FieldWrapper;
