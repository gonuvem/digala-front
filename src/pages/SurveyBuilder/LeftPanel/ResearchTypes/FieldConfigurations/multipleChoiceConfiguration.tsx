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
import NumberField from '../../../../../components/ResearchFields/NumericField';
import SolidButton from '../../../../../components/Common/SolidButton';

import { Container, DragContainer, Option, ViewButton } from './styles';

interface MultipleChoiceConfigurarionProps {
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

const MultipleChoiceConfigurarion: React.FC<MultipleChoiceConfigurarionProps> = ({
  handleChange,
}) => {
  const [limitChoiceAmmount, setLimitChoiceAmmount] = useState(false);
  const [options, setOptions] = useState<Array<ListOptions>>([
    { id: uuid(), content: '' },
  ]);

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
    [options, setOptions],
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
      <Form onSubmit={() => null}>
        <section>
          <ShortTextField
            label="Nome"
            placeholder="Nome"
            name="multipleChoiceLabel"
            id="multipleChoiceLabelField"
            onChange={(event) => handleChange([event.target.value], ['label'])}
          />
        </section>
        <section>
          <TextAreaField
            label="Descrição"
            placeholder="Coloque aqui sua descrição"
            name="multipleChoiceDescripion"
            id="multipleChoiceDescriptionField"
            onChange={(event) =>
              handleChange([event.target.value], ['description'])
            }
          />
        </section>
        <section>
          <ToggleSwitch
            label="Obrigatório"
            helpHint="Caso o usuário seja obrigado a responder"
            name="multipleChoiceRequired"
            onChange={(event) =>
              handleChange([event.target.checked], ['required'])
            }
          />
        </section>
        <section>
          <ToggleSwitch
            label="Adicionar opção outros(a)"
            helpHint="Cria um novo campo com o valor Outros "
            name="anotherOption"
            onChange={(event) =>
              handleChange([event.target.checked], ['anotherOption'])
            }
          />
        </section>
        <section>
          <ToggleSwitch
            label="Alinhamento horizontal"
            helpHint="Alinha as opções de forma horizontal no formulário"
            name="rowDirection"
            onChange={(event) =>
              handleChange([event.target.checked], ['rowDirection'])
            }
          />
        </section>
        <section>
          <ToggleSwitch
            label="Ordem das respostas aleatórias"
            helpHint="As opções serão exibidas em ordem aleatória para o usuário"
            name="multipleChoicerandomSort"
            onChange={(event) =>
              handleChange([event.target.checked], ['randomSort'])
            }
          />
        </section>
        <section>
          <ToggleSwitch
            label="Limite de escolhas"
            helpHint="Isso irá permitir que o usuário marque de uma opção na pergunta"
            name="limitChoices"
            onChange={(event) => {
              handleChange([event.target.checked], ['limitChoices']);
              setLimitChoiceAmmount(event.target.checked);
            }}
          />
        </section>
        {limitChoiceAmmount && (
          <section>
            <NumberField
              id="choiceMaxAmmountField"
              label="Quantidade de opções selecionaveis"
              name="choiceMaxAmmount"
              defaultValue={2}
              limitMaxMin
              minValue={2}
              maxValue={Number.MAX_SAFE_INTEGER}
              onChange={(event) =>
                handleChange([event.target.value], ['choiceMaxAmmount'])
              }
            />
          </section>
        )}
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

export default MultipleChoiceConfigurarion;
