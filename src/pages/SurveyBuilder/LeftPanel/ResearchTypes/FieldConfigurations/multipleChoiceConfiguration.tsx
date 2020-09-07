import React, { useCallback, useState, useEffect, useRef } from 'react';
import { FormHandles } from '@unform/core';
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

import { Question } from '../../../../../store/ducks/questions/types';
import { useDebouncedCallback } from '../../../../../hooks/useDebouncedCallback';

import { Container, DragContainer, Option, ViewButton } from './styles';

interface MultipleChoiceConfigurarionProps {
  handleChange: Function;
  field: Question;
}

interface ListOptions {
  _id: string;
  text: string;
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
  field,
}) => {
  const formRef = useRef<FormHandles>(null);
  const [limitChoiceAmmount, setLimitChoiceAmmount] = useState(
    field.limitChoices || false,
  );
  const [options, setOptions] = useState<Array<ListOptions>>([
    { _id: uuid(), text: '' },
  ]);

  useEffect(() => {
    formRef.current?.setData(field);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [field.id]);

  const onChange = useDebouncedCallback(
    (value: any[], properties: string[]) => {
      handleChange(value, properties);
    },
    500,
  );

  const onDragEnd = useCallback(
    (result: DropResult) => {
      if (!result.destination) return;

      const items = reorder(
        options,
        result.source.index,
        result.destination.index,
      );
      setOptions(items);
      handleChange([items], ['answerOptions']);
    },
    [handleChange, options],
  );

  const handleAddOption = useCallback(() => {
    const newOption = { _id: uuid(), text: '' };
    const copyOptions = options;

    copyOptions.push(newOption);

    setOptions(copyOptions);
    handleChange([options], ['answerOptions']);
  }, [options, setOptions, handleChange]);

  const handleChangeInput = useCallback(
    (text: string, index: number) => {
      const newArray = options;

      newArray[index].text = text;
      setOptions(newArray);
      handleChange([options], ['answerOptions']);
    },
    [options, setOptions, handleChange],
  );

  const handleDeleteInput = useCallback(
    (index: number) => {
      const newArray = options;
      newArray.splice(index, 1);
      setOptions(newArray);
      handleChange([options], ['answerOptions']);
    },
    [options, setOptions, handleChange],
  );

  useEffect(() => {
    if (field.answerOptions) {
      setOptions([...field.answerOptions]);
    }
  }, []);

  return (
    <Container>
      <Form ref={formRef} onSubmit={() => null}>
        <section>
          <ShortTextField
            label="Nome"
            placeholder="Nome"
            name="label"
            id="multipleChoiceLabelField"
            onChange={(event) => onChange([event.target.value], ['label'])}
          />
        </section>
        <section>
          <TextAreaField
            label="Descrição"
            placeholder="Coloque aqui sua descrição"
            name="description"
            id="multipleChoiceDescriptionField"
            onChange={(event) =>
              onChange([event.target.value], ['description'])
            }
          />
        </section>
        <section>
          <ToggleSwitch
            label="Obrigatório"
            helpHint="Caso o usuário seja obrigado a responder"
            name="isRequired"
            onChange={(event) =>
              handleChange([event.target.checked], ['isRequired'])
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
            name="hasHorizontalAlignment"
            onChange={(event) =>
              handleChange([event.target.checked], ['hasHorizontalAlignment'])
            }
          />
        </section>
        <section>
          <ToggleSwitch
            label="Ordem das respostas aleatórias"
            helpHint="As opções serão exibidas em ordem aleatória para o usuário"
            name="hasRandomResponsesOrder"
            onChange={(event) =>
              handleChange([event.target.checked], ['hasRandomResponsesOrder'])
            }
          />
        </section>
        <section>
          <ToggleSwitch
            label="Limite de escolhas"
            helpHint="Isso irá permitir que o usuário marque de uma opção na pergunta"
            name="isMultipleChoice"
            onChange={(event) => {
              handleChange([event.target.checked], ['isMultipleChoice']);
              setLimitChoiceAmmount(event.target.checked);
            }}
          />
        </section>
        {limitChoiceAmmount && (
          <section>
            <NumberField
              id="choiceMaxAmmountField"
              label="Quantidade de opções selecionaveis"
              name="maxChoices"
              defaultValue={2}
              limitMaxMin
              minValue={2}
              maxValue={Number.MAX_SAFE_INTEGER}
              onChange={(event) =>
                handleChange([event.target.value], ['maxChoices'])
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
                      key={item._id}
                      draggableId={item._id}
                      index={index}
                    >
                      {(itemOption) => (
                        <Option
                          ref={itemOption.innerRef}
                          {...itemOption.draggableProps}
                          {...itemOption.dragHandleProps}
                          style={{
                            ...itemOption.draggableProps.style,
                          }}
                        >
                          <input
                            placeholder="Escreva a opção"
                            defaultValue={item.text}
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
