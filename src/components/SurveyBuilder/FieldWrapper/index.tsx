import React, { useRef, useCallback, useEffect } from 'react';
import { FiChevronDown, FiChevronUp, FiTrash } from 'react-icons/fi';
import { useDispatch } from 'react-redux';

import Field from '../../Common/Field';

import { Question } from '../../../store/ducks/questions/types';
import * as QuestionActions from '../../../store/ducks/questions/actions';

import { Container, LeftController } from './styles';

interface FieldWrapperProps {
  field: Question;
  fieldIndex: number;
  isSelected: boolean;
  handleFocusQuestion(questionId: string): void;
  handleChangePosition(direction: 'up' | 'down', fieldIndex: number): void;
  toggleModal(): void;
  leftPanelRef: any;
  paginationRef: any;
}

const FieldWrapper: React.FC<FieldWrapperProps> = ({
  field,
  isSelected,
  handleFocusQuestion,
  handleChangePosition,
  toggleModal,
  fieldIndex,
}) => {
  const fieldWrapperRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();

  const handleClickOutsideContainer = useCallback(
    (event: any) => {
      console.log('Event target: ', event.target.dataset.outside);

      if (event.target.dataset.outside !== undefined) {
        dispatch(QuestionActions.clearFocusedQuestion());
      }
    },
    [dispatch],
  );

  useEffect(() => {
    if (isSelected) {
      document.addEventListener('click', handleClickOutsideContainer);
    } else {
      document.removeEventListener('click', handleClickOutsideContainer);
    }
  }, [handleClickOutsideContainer, isSelected]);

  const handleContainerClick = useCallback(() => {
    handleFocusQuestion(field.id);
  }, [field.id, handleFocusQuestion]);

  const handleEscapeKeyPress = useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (event.keyCode === 27) {
        dispatch(QuestionActions.clearFocusedQuestion());
        document.removeEventListener('click', handleClickOutsideContainer);
      }
    },
    [dispatch, handleClickOutsideContainer],
  );

  return (
    <Container ref={fieldWrapperRef} key={field.id} selected={isSelected}>
      <div
        onKeyDown={handleEscapeKeyPress}
        tabIndex={fieldIndex}
        role="button"
        onClick={handleContainerClick}
      >
        <Field question={field} readOnly />
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
        </>
      )}
    </Container>
  );
};

export default FieldWrapper;
