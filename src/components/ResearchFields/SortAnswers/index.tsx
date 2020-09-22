import React, { useCallback, useState, useEffect } from 'react';
import { useField } from '@unform/core';
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from 'react-beautiful-dnd';
import { FiMove } from 'react-icons/fi';
import { Container, DragContainer, Option } from './styles';

interface SortAnswersProps {
  name: string;
  label: string;
  description?: string;
  answerOptions?: ListOptions[];
}

interface ListOptions {
  _id?: string;
  text?: string;
}

const reorder = (
  list: Array<ListOptions>,
  startIndex: number,
  endIndex: number,
): Array<ListOptions> => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const SortAnswers: React.FC<SortAnswersProps> = ({
  name,
  label,
  description,
  answerOptions,
}) => {
  const [options, setOptions] = useState<Array<ListOptions>>(
    answerOptions || [],
  );

  const { fieldName, registerField, defaultValue, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: undefined,
      getValue: () => {
        return options;
      },
    });
  }, [registerField, fieldName, options]);

  const onDragEnd = useCallback(
    (result: DropResult) => {
      if (!result.destination) return;

      const items = reorder(
        options,
        result.source.index,
        result.destination.index,
      );
      setOptions(items);
    },
    [options, setOptions],
  );

  useEffect(() => {
    if (answerOptions) {
      setOptions(answerOptions);
    }
  }, [answerOptions, setOptions]);

  return (
    <Container>
      <label htmlFor="id">
        <span>{label}</span>
        {description && <p>{description}</p>}
        {options && (
          <DragDropContext onDragEnd={(result) => onDragEnd(result)}>
            <Droppable droppableId="id" key="id">
              {(provided, snapshot) => (
                <DragContainer
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  isDraggingOver={snapshot.isDraggingOver}
                  optionsLength={options.length}
                >
                  {options.map((item, index) => (
                    <Draggable
                      key={item._id}
                      draggableId={item._id ? item._id : ''}
                      index={index}
                    >
                      {(input) => (
                        <Option
                          ref={input.innerRef}
                          {...input.draggableProps}
                          {...input.dragHandleProps}
                          style={{
                            ...input.draggableProps.style,
                          }}
                        >
                          {item.text}
                          <FiMove />
                        </Option>
                      )}
                    </Draggable>
                  ))}
                </DragContainer>
              )}
            </Droppable>
          </DragDropContext>
        )}
      </label>
    </Container>
  );
};

export default SortAnswers;
