import React, { useCallback, useState, useEffect } from 'react';
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from 'react-beautiful-dnd';
import { FiMove } from 'react-icons/fi';
import { Container, DragContainer, Option } from './styles';

interface SortAnswersProps {
  label: string;
  description?: string;
  listOptions?: ListOptions[];
  randomSort?: boolean;
}

interface ListOptions {
  id?: string;
  content?: string;
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
  label,
  description,
  listOptions,
  randomSort = false,
}) => {
  const [options, setOptions] = useState<Array<ListOptions>>(listOptions || []);

  const [refresh, setRefresh] = useState(false);

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
    if (listOptions && !randomSort) {
      setOptions(listOptions);
    } else if (listOptions && randomSort) {
      setOptions(listOptions);
      shuffle();
    }
  }, [listOptions, setOptions, randomSort]);

  const shuffle = useCallback(() => {
    const list = options;
    let currentIndex = list.length;
    let temporaryValue;
    let randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = list[currentIndex];
      list[currentIndex] = list[randomIndex];
      list[randomIndex] = temporaryValue;
    }

    setOptions(list);
    setRefresh(!refresh);
  }, [options, setOptions, refresh]);

  return (
    <Container>
      <label htmlFor="id">
        {label}
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
                      key={item.id}
                      draggableId={item.id ? item.id : ''}
                      index={index}
                    >
                      {(provided) => (
                        <Option
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          style={{
                            ...provided.draggableProps.style,
                          }}
                        >
                          {item.content}
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
