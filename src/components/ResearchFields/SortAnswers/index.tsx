import React, { useCallback, useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { FiMove } from 'react-icons/fi';
import { Container, DragContainer, Option } from './styles';

interface SortAnswersProps {
  label: string;
  description?: string;
  listOptions: ListOptions[];
}

interface ListOptions {
  id: string;
  content: string;
}

const reorder = (list: any, startIndex: any, endIndex: any) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const SortAnswers: React.FC<SortAnswersProps> = ({
  label,
  description,
  listOptions,
}) => {
  const [options, setOptions] = useState(listOptions);

  const onDragEnd = useCallback((result: any, item: any, setItem: any) => {
    if (!result.destination) return;

    const items = reorder(item, result.source.index, result.destination.index);

    setItem(items);
  }, []);

  return (
    <Container>
      <label>
        {label}
        {description && <p>{description}</p>}

        <DragDropContext
          onDragEnd={(result) => onDragEnd(result, options, setOptions)}
        >
          <Droppable droppableId={'id'} key={'id'}>
            {(provided, snapshot) => (
              <DragContainer
                {...provided.droppableProps}
                ref={provided.innerRef}
                isDraggingOver={snapshot.isDraggingOver}
              >
                {options.map((item, index) => (
                  <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(provided, snapshot) => (
                      <Option
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={{
                          // userSelect: 'none',
                          // padding: 16,
                          // margin: '0 0 8px 0',
                          // minHeight: '50px',
                          // backgroundColor: snapshot.isDragging
                          //   ? '#263B4A'
                          //   : '#456c86',
                          // color: 'white',
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
      </label>
    </Container>
  );
};

export default SortAnswers;
