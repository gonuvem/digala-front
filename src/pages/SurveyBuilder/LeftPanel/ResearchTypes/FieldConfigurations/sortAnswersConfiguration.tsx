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
interface SortAnswerConfigurarionProps {
  handleChange: Function;
}

interface ListOptions {
  id: string;
  content: string;
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
}) => {
  // const listOptions = [{ id: '1', content: '1' }];
  const [options, setOptions] = useState<Array<ListOptions>>([
    { id: uuid(), content: '' },
  ]);
  const [refresh, setRefresh] = useState(true);

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

  function handleOption() {
    const newOption = { id: uuid(), content: '' };
    const copyOptions = options;

    copyOptions.push(newOption);

    setOptions(copyOptions);
    setRefresh(!refresh);

    // console.log(options);
  }

  function handleChangeInput(text: string, index: number) {
    // console.log(index);
  }

  function handleDeleteInput(index: number) {
    const newArray = options;
    newArray.splice(index, 1);
    setOptions(newArray);
    setRefresh(!refresh);
  }

  return (
    <Container>
      <Form onSubmit={() => null}>
        <section>
          <ShortTextField
            label="Nome"
            placeholder="Link"
            name="linkLabel"
            id="linkLabelField"
            onChange={(event) => handleChange(event.target.value, 'label')}
          />
        </section>
        <section>
          <TextAreaField
            label="Descrição"
            placeholder="Coloque aqui sua descrição"
            name="linkDescripion"
            id="linkDescriptionField"
            onChange={(event) =>
              handleChange(event.target.value, 'description')
            }
          />
        </section>
        <section>
          <ToggleSwitch
            label="Obrigatório"
            helpHint="Caso o usuário seja obrigado a responder"
            name="linkRequired"
          />
        </section>
        <section>
          <ToggleSwitch
            label="Ordem das respostas aleatórias"
            helpHint="As opções serão exibidas em ordem aleatória para o usuário"
            name="sortOptions"
          />
        </section>
        <section>
          {/* <Sort label="Opções" listOptions={options} /> */}
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
                            onChange={(event) =>
                              handleChangeInput(event.target.value, index)
                            }
                          />
                          <FiMove />
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
            <SolidButton onClick={handleOption}>Adicionar Opção</SolidButton>
          </ViewButton>
        </section>
      </Form>
    </Container>
  );
};

export default SortAnswerConfigurarion;
