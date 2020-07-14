import React, { useCallback, useState, useEffect } from 'react';
import { Form } from '@unform/web';
import { FiMove } from 'react-icons/fi';
import { FaTrashAlt } from 'react-icons/fa';
import { uuid } from 'uuidv4';
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from 'react-beautiful-dnd';

import ShortTextField from '../../../../../components/ResearchFields/ShortTextField';
import TextAreaField from '../../../../../components/ResearchFields/TextAreaField';
import ToggleSwitch from '../../../../../components/Common/ToggleSwitch';

import SolidButton from '../../../../../components/Common/SolidButton';

import { Container, DragContainer, Option, ViewButton } from './styles';

import { Question } from '../../../../../store/ducks/questions/types';

interface SortAnswerConfigurarionProps {
  handleChange: Function;
  field: Question;
}

interface ListOptions {
  id: string;
  content: string;
  value?: string;
  label?: string;
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

const SortAnswerConfigurarion: React.FC<SortAnswerConfigurarionProps> = ({
  handleChange,
  field,
}) => {
  const [options, setOptions] = useState<Array<ListOptions>>([
    { id: uuid(), content: '' },
  ]);

  useEffect(() => {
    if (field.listOptions) {
      setOptions([...field.listOptions]);
    }
  }, []);

  const onDragEnd = useCallback(
    (result: DropResult) => {
      if (!result.destination) return;

      const items = reorder(
        options,
        result.source.index,
        result.destination.index,
      );
      setOptions(items);
      handleChange([items], ['listOptions']);
    },
    [options, setOptions, handleChange],
  );

  const handleAddOption = useCallback(() => {
    const newOption = { id: uuid(), content: '' };
    const copyOptions = options;

    copyOptions.push(newOption);

    setOptions(copyOptions);
    handleChange([options], ['listOptions']);
  }, [options, setOptions, handleChange]);

  const handleChangeInput = useCallback(
    (text: string, index: number) => {
      const newArray = options;

      newArray[index].content = text;
      setOptions(newArray);
      handleChange([options], ['listOptions']);
    },
    [options, setOptions, handleChange],
  );

  const handleDeleteInput = useCallback(
    (index: number) => {
      const newArray = options;
      newArray.splice(index, 1);
      setOptions(newArray);
      handleChange([options], ['listOptions']);
    },
    [options, setOptions, handleChange],
  );

  return (
    <Container>
      <Form initialData={field} onSubmit={() => null}>
        <section>
          <ShortTextField
            label="Nome"
            placeholder="Nome"
            name="label"
            id="sortLabelField"
            onChange={(event) => handleChange([event.target.value], ['label'])}
          />
        </section>
        <section>
          <TextAreaField
            label="Descrição"
            placeholder="Coloque aqui sua descrição"
            name="description"
            id="sortDescriptionField"
            onChange={(event) =>
              handleChange([event.target.value], ['description'])
            }
          />
        </section>
        <section>
          <ToggleSwitch
            label="Obrigatório"
            helpHint="Caso o usuário seja obrigado a responder"
            name="required"
            onChange={(event) =>
              handleChange([event.target.checked], ['required'])
            }
          />
        </section>
        <section>
          <ToggleSwitch
            label="Ordem das respostas aleatórias"
            helpHint="As opções serão exibidas em ordem aleatória para o usuário"
            name="randomSort"
            onChange={(event) =>
              handleChange([event.target.checked], ['randomSort'])
            }
          />
        </section>
        <section>
          <span>Opções</span>
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
                      draggableId={item.id}
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
                          <input
                            placeholder="Escreva a opção"
                            defaultValue={item.content}
                            onChange={(event) =>
                              handleChangeInput(event.target.value, index)
                            }
                          />
                          <button type="button">
                            <FiMove />
                          </button>
                          <button
                            type="button"
                            onClick={() => handleDeleteInput(index)}
                          >
                            <FaTrashAlt />
                          </button>
                        </Option>
                      )}
                    </Draggable>
                  ))}
                </DragContainer>
              )}
            </Droppable>
          </DragDropContext>
          <ViewButton>
            <SolidButton onClick={handleAddOption}>Adicionar Opção</SolidButton>
          </ViewButton>
        </section>
      </Form>
    </Container>
  );
};

export default SortAnswerConfigurarion;
